import React from 'react';
import Menu from './Menu';
import { useState } from 'react';
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut 
} from 'firebase/auth';
import { auth } from './firebase-config';
import './css/Login.css'

// If you want to make a css for this page, named the file
//  'Login.css' and uncomment line 2 of this file.

export default function Login () {

    const [loginEmail, setLoginEmail] = useState("");

    const [loginPassword, setLoginPassword] = useState("");
    

    const login = async () => {

        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            console.log(user);
            window.location ="/";
        }
        catch (error) {
            alert(error.message);
            console.log(error.message);
        }

    };

    return (
    <div class ="logdiv">
        <body>
            <Menu/>
            <h2>Returning user?</h2>
            <nav> 
                {/* <form action="/login" method="POST"> */}
                        
                <label class="title"> Log-in</label> 
                <br></br>                
                <label> Username </label> <br></br> 
                
                <input type="text" class="emailt"name="username" id="username" placeholder="Enter your username" onChange={(event) => {setLoginEmail(event.target.value)}} required/> <br></br>

                <label> Password </label> <br></br> 
                
                <input type="password" class="passw"name="password" id="password" placeholder="Enter your password" onChange={(event) => {setLoginPassword(event.target.value)}} required/> <br></br>

                <button class ="submitbutton" onClick={login}>Sign In</button>

                {/* </form> */}
            </nav>          
            <div class="regmore">
		<br></br> <a href="/register" class="registerbut"> Register </a>
		</div>           
        </body>
    </div>
    );
}