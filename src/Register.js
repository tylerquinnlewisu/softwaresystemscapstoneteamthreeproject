import React from 'react'
import Menu from './Menu';
import { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import {auth} from './firebase-config';
import './css/Register.css'

// If you want to make a css for this page, named the file
//  'Register.css' and uncomment line 2 of this file.

export default function Register () {

    const [registerEmail, setRegisterEmail] = useState("");

    const [registerPassword, setRegisterPassword] = useState("");

    const register = async () => {

        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(user);
            window.location ="/";
        }
        catch (error) {
            console.log(error.message);
        }


    };
    
    return (
    <div class="regdiv">
        <body>
            <Menu/>
            <h2>New user?</h2>
            <label class="title"> Register </label>
            {/* <form class="regform"> */}

                <label> Email </label> <br></br>
                
                <input type="text" class="emailt" name="email" id="email" placeholder="Enter an Email" onChange={(event) => {setRegisterEmail(event.target.value)}} required/>
                <br></br>


                <label> Password </label> <br></br>
                
                <input type="password" class="passw" name="password" id="password" placeholder="Enter a password" onChange={(event) => {setRegisterPassword(event.target.value)}} required/>
                <br></br>

                <button class="submitbutton" onClick={register}>Register</button>
            {/* </form> */}
            <div class="regmore">
            <br></br> <a href="/login" class="logbut"> Login </a>
            </div>

        </body>
    </div>
    );
}