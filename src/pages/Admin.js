import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useFirebase } from '../context/Firebase';

const Admin = () => {
    const [userRole, setUserRole] = useState(null);
    const firebase = useFirebase();

    useEffect(() => {

        if (firebase.currUser && firebase.currUser?.role) {
            setUserRole(firebase.currUser?.role);
        }
    }, [firebase.currUser]);

    console.log('Current User:', firebase.currUser);

    if (!firebase.currUser) {

        return <Navigate to="/login" />;
    }

    if (userRole !== 'Doctor' && userRole !== 'Staff') {

        return (
            <div>
                <h1>Unauthorized Access</h1>
                <p>You do not have permission to access this page.</p>
            </div>
        );
    }
    console.log(userRole);

    return (
        <div>
            <h1>Welcome, {firebase.currentUser.displayName}!</h1>

        </div>
    );
};

export default Admin;