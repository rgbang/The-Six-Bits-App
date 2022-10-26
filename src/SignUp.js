import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './firebase';
import './SignUp.css';


export const SignUp = () => {
    const auth = getAuth(app);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const signUp = () => {


        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Sucessfully created an account")
        })
        .catch((error) => {
            const errorCode = error.code;
            alert(errorCode);
        });
    };

    const signIn = () => {


        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("This user has successfuly signed in")
        })
        .catch((error) => {
            const errorCode = error.code;
            alert(errorCode);
        });
    };

    return (

        <div className='login'>
            <div className='loginContainer'>
                <input className='input' type={"email"} placeholder="please enter your email" onChange={(e) => setEmail(e.target.value)}/>
                <input className='input' type={"password"} placeholder="please enter password" onChange={(e) => setPassword(e.target.value)}/>

                <button className='button' onClick={signUp}>Create Account</button>
                <button className='button' onClick={signIn}><Link to='./Products'>SignIn</Link></button>


            </div>
        </div>


        


    );


};