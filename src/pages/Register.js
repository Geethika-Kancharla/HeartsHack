import React, { useState, useEffect } from 'react'
import { useFirebase } from '../context/Firebase';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {

    const firebase = useFirebase();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [role, setRole] = useState();
    const [phno, setPhno] = useState();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await firebase.addUser(email, password, name, role, phno);
        console.log("Successfull", result);
    }

    useEffect(() => {
        if (firebase.isLoggedIn) {
            console.log(firebase);
            navigate("/home");
        }
    }, [firebase, navigate])



    return (
        <form onSubmit={handleSubmit} className='flex justify-center items-center h-screen '>
            <div className='flex flex-col p-14 justify-center items-center space-y-5 shadow-md '>
                <h2 className='text-3xl'>Sign Up </h2>
                <input type='text' placeholder='Enter the name' value={name} onChange={(e) => setName(e.target.value)} className='border border-slate-800 rounded-lg w-11/12 p-2'></input>

<select value={role} onChange={(e) => setRole(e.target.value)} className='border border-slate-800 rounded-lg w-11/12 p-2'>
<option value="" className="text-gray-50">Select a role</option>
  <option value="Doctor">Doctor</option>
  <option value="Staff">Staff</option>
  <option value="Patient">Patient</option>
</select>

<input type='tel' placeholder='Enter the phone number' value={phno} onChange={(e) => setPhno(e.target.value)} className='border border-slate-800 rounded-lg w-11/12 p-2'></input>

<input type='email' placeholder='Enter the email' value={email} onChange={(e) => setEmail(e.target.value)} className='border border-slate-800 rounded-lg w-11/12 p-2'></input>

<input type='password' placeholder='Enter the password' value={password} onChange={(e) => setPassword(e.target.value)} className='border border-slate-800 rounded-lg w-11/12 p-2'></input>

                <button className='bg-blue-500 p-2 rounded-md' type='submit'>Sign Up</button>
                <p>Already have an account <Link to="/" className="text-blue-500">Sign In</Link></p>

            </div>
        </form>
    )
}

export default Register;