import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  const handleContinue = () => {
    // Input elementlərini tapmaq və daxilindəki mətni əldə etmək
    const nameInput = document.querySelector('input[type="text"]');
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');

    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    // Inputlardakı mətni console-a çap etmək
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    // Inputlardakı mətni silmək
    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button onClick={handleContinue}>Continue</button>
        <p className="loginsignup-login"> Already have an account? <span>Login here</span></p> 
        <div className="loginsignup-agree">
          <input type="checkbox"  name='' id=''/>
          <p> By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;