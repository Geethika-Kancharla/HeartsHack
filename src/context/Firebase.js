import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
    getAuth, GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    signInWithPopup
} from 'firebase/auth'
import { getFirestore, collection, query, where, getDocs, addDoc, doc, setDoc, serverTimestamp, Timestamp } from "firebase/firestore";


const FirebaseContext = createContext(null);


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APPID
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const firestore = getFirestore(firebaseApp);

export const useFirebase = () => {
    const firebase = useContext(FirebaseContext);
    if (!firebase) {
        throw new Error("useFirebase must be used within a FirebaseProvider");
    }
    return firebase;
}

export const FirebaseProvider = (props) => {

    const [user, setUser] = useState(null);
    const [currUser, setCurrUser] = useState();
    const [currMessage, setCurrMessage] = useState();

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, user => {
            if (user)
                setUser(user);
            else
                setUser(null);
        })
    }, [])

    const addUser = (email, password, name, role, phno) => {
        createUserWithEmailAndPassword(firebaseAuth, email, password)
            .then((userCredential) => {
                const loggedInuser = userCredential.user;
                const user = {
                    name,
                    role,
                    phno,
                    email,
                    userId: loggedInuser.uid
                };
                const userDocRef = doc(firestore, 'users', loggedInuser.uid);

                setDoc(userDocRef, user)
                    .then(() => {
                        console.log('User document created with UID: ', loggedInuser.uid);
                    })
                    .catch((error) => {
                        console.error('Error creating user document: ', error);
                    });
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleMessage = async (message) => {

        const messageDetail = {
            name: currUser?.name,
            role: currUser?.role,
            message,
            timeStamp: serverTimestamp(),
            userId: user.uid
        };
        const randomId = Math.random().toString(36).substring(2, 15);
        const messageDocRef = doc(firestore, 'messages', randomId);

        setDoc(messageDocRef, messageDetail)
            .then(() => {
                console.log('User document created with UID: ', randomId);
            })
            .catch((error) => {
                console.error('Error creating user document: ', error);
            });

    }

    const getData = async (user) => {
        if (user) { // Check if user is not null
            try {
                const q = query(collection(firestore, "users"), where("userId", "==", user.uid));
                const querySnapshot = await getDocs(q);
                const userDoc = querySnapshot.docs[0]; // Assuming there's only one document for the user

                if (userDoc.exists) {
                    setCurrUser(userDoc.data()); // Set current user data
                } else {
                    console.log("No user document found");
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        } else {
            console.log("User is null in getData");
        }
    };

    const getMessage = async (user) => {
        if (user) { // Check if user is not null
            try {
                const qr = query(collection(firestore, "messages"), where("userId", "==", user.uid));
                const querySnap = await getDocs(qr);
                const fetchedMessages = [];
                querySnap.forEach((doc) => {
                    fetchedMessages.push(doc.data());
                });
                setCurrMessage(fetchedMessages);

            } catch (error) {
                console.error("Error fetching message data:", error);
            }
        } else {
            console.log("Message is null in getData");
        }
    };
    console.log(currMessage);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
            if (user) {
                await getMessage(user);
            } else {
                setCurrMessage(null);
            }
        });

        return () => unsubscribe();
    }, []);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
            if (user) {
                await getData(user); // Call getData on user change
            } else {
                setCurrUser(null); // Clear user data on logout
            }
        });

        return () => unsubscribe(); // Cleanup function to prevent memory leaks
    }, []);

    console.log(currUser);



    const signinUserWithEmailAndPassword = (email, password) => {
        signInWithEmailAndPassword(firebaseAuth, email, password);
    }

    const signinWithGoogle = () => {
        signInWithPopup(firebaseAuth, googleProvider);
    }
    const isLoggedIn = user ? true : false;

    const handleLogout = async () => {
        try {
            await signOut(firebaseAuth);
        } catch (error) {
            console.error('Error occurred during logout:', error);
        }
    };

    return (
        <FirebaseContext.Provider value={{
            user,
            addUser,
            currUser,
            signinUserWithEmailAndPassword,
            signinWithGoogle,
            isLoggedIn,
            handleLogout,
            getData,
            handleMessage,
            currMessage
        }}>
            {props.children}
        </FirebaseContext.Provider>
    )

}