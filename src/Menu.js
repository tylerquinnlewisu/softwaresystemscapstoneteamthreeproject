import React, { useEffect } from 'react'
import { useState } from 'react';
import './css/Menu.css'

import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut 
} from 'firebase/auth';

import { auth } from './firebase-config';

export default function Menu () {

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  const logout = async () => {

    await signOut(auth);

  };

  useEffect(function() {

    const loginLabel = document.getElementById("loginLabel");
    const registerLabel = document.getElementById("registerLabel");
    const emailLabel = document.getElementById("emailLabel");
    const signOutButton = document.getElementById("signOutButton");

    //  Hide Everything First
    loginLabel.style.display = "none";
    registerLabel.style.display = "none";
    emailLabel.style.display = "none";
    signOutButton.style.display = "none";

    //  Verify Sign in
    if (user) {

      //  If logged in, only show the Email and the Signout Button
      emailLabel.style.display = "block";
      signOutButton.style.display = "block";
      updateEmailButton();

    }
    else {

      //  Since we are not logged in, only show register and login labels
      loginLabel.style.display = "block";
      registerLabel.style.display = "block";

    }

    //window.location("/#/login")

  });

  async function updateEmailButton() {
    const emailLabel = document.getElementById("emailLabel");
    try {
      emailLabel.innerHTML = user.email;
    }
    catch (err) {
      updateEmailButton();
    }
  }

  return (
    <div class="menuSection">
        <div id="leftSideMenuComponent">
          <img src="lewisLogo.png" id="menuImage" alt="lewisLogo"></img>
        </div> 
        <ul class="menu">
          <li class="link"><a class="link_a" href="/">Home</a></li>
          <li class="link"><a class="link_a" href="/#/donate">Donate</a></li>
          <li class="link"><a class="link_a" href="/#/slideshow">Slideshow</a></li>
          <li class="link"><a class="link_a" href="/#/video">Video</a></li>
          <li class="link"><a class="link_a"  href="/#/about">About</a></li>
        </ul>
        <div id="rightSideMenuComponent">
          <button class="rightMenuSideComponent" id="loginLabel" onClick={function() {window.location="/#/login";}} href="/#/login">Login</button>  
          <button class="rightMenuSideComponent" id="registerLabel" onClick={function() {window.location="/#/register";}} href="/#/register">Register</button>
          <button class="rightMenuSideComponent" id="emailLabel" href="/#/register">byekv1@gmail.com</button>
          <button class="rightMenuSideComponent" id="signOutButton" onClick={function() {logout(); window.location="/";}}>Sign Out</button>    
        </div>  
    </div>
  );
}