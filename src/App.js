import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import { useFirebase } from './context/Firebase';
import Voice from './pages/Voice';

function App() {

  const firebase = useFirebase();

  const currentUser = firebase.isLoggedIn;

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/"></Navigate>;
  }

  return (
    <Routes>
      <Route index path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<RequireAuth><Home /></RequireAuth>} />
      <Route path='/voice' element={<RequireAuth><Voice /></RequireAuth>} />

    </Routes>

  );
}

export default App;
