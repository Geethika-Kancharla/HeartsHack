import React from 'react';
import { Redirect } from 'react-router-dom';
import { useFirebase } from '../context/Firebase';

const Admin = () => {
    const firebase = useFirebase();


    if (!firebase.currUser || (firebase.currUser.role !== 'doctor' && firebase.currUser.role !== 'staff')) {

        return <Redirect to="/" />;
    }


    return (
        <div>
            <h1>Welcome to the Admin Page</h1>

        </div>
    );
};

export default Admin;