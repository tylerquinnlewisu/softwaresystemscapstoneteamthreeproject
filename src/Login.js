import React from 'react'
import Menu from './Menu';
import './Login.css'

// If you want to make a css for this page, named the file
//  'Login.css' and uncomment line 2 of this file.

export default function Login () {
    return (
    <div class ="logdiv">
        <body>
            <Menu/>
            <h2>Returning user?</h2>
            <nav> 
                <form action="/login" method="POST">
                        
                <label class="title"> Log-in</label> 
                <br></br>                
                <label> Username </label> <br></br> <input type="text" class="emailt"name="username" id="username" placeholder="Enter your username" required/> <br></br>
                <label> Password </label> <br></br> <input type="password" class="passw"name="password" id="password" placeholder="Enter your password" required/> <br></br>
                <input class ="submitbutton" type="submit" value="login"/>                                                            
                </form>
            </nav>          
            <div class="regmore">
		<br></br> <a href="/register" class="registerbut"> Register </a>
		</div>           
        </body>
    </div>
    );
}