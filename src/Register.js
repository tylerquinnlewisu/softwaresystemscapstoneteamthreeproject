import React from 'react'
import Menu from './Menu';
import './Register.css'

// If you want to make a css for this page, named the file
//  'Register.css' and uncomment line 2 of this file.

export default function Register () {
    
    return (
    <div class="regdiv">
        <body>
            <Menu/>
            <h2>New user?</h2>
            <label class="title"> Register </label>
            <form class="regform" action="register/done" method="POST">
                <label> Email </label> <br></br><input type="text" class="emailt" name="email" id="email" placeholder="Enter an Email" required/>
                <br></br>
                <label> Password </label> <br></br><input type="password" class="passw" name="password" id="password" placeholder="Enter a password" required/>
                <br></br>
                <input class="submitbutton" type="submit" value="register"/>
            </form>
            <div class="regmore">
            <br></br> <a href="/login" class="logbut"> Login </a>
            </div>

        </body>
    </div>
    );
}