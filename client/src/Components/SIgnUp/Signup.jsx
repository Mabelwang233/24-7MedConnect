import React,{useLayoutEffect, useRef, useState} from 'react'; 
import './Signup.css';

import signUp from '../../Utils/Images/signUp.jpg';

const Signup = () => {

  const [up, setUp] = useState(true);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [patient, setPatient] = useState(true);


  const DoctorSignIn = {
    display:  patient === true ? 'none' : '',  // Change color based on Status
  };



  const signInUp = {
    display:  up === true ? 'none' : '',  // Change color based on Status
  };

  const signUpIn = {
    display:  up === false ? 'none' : '',  // Change color based on Status
  };


    const onSignUpClick = () => {
      if(nameRef.current.value == "" || emailRef.current.value == "" || passwordRef.current.value == "")
      {
        window.alert("Please fill in details");
      }
  }

  return (
    <div className="container">
        <div className="left">
              <img src={signUp}/>
        </div>

        <div className="right">
          <h1>Welcome to 24/7 MedConnect</h1>
          

        <div className="signUp" style={signUpIn}>
        <p>Please Sign Up With Your details</p>
          <div className='inputContainer'>
            <label for="name">Name</label>
            <input ref={nameRef} name="name" placeholder='Please enter your Full Name'></input>
          </div>

          <div className='inputContainer'>
            <label for="name">Email</label>
            <input ref={emailRef} name="name"placeholder='Please enter your Email'/>
          </div>

          <div className='inputContainer'>
            <label for="name">Password</label>
            <input  ref={passwordRef} name="name" type="password" placeholder='Please enter your Password'></input>
          </div>
          
          <div className='inputContainer'  style={DoctorSignIn}>
            <label for="name">Specialty</label>
            <input ref={emailRef} name="name"placeholder='Please enter your Speciality'/>
          </div>

          <div className='inputContainer'  style={DoctorSignIn}>
            <label for="name">Languages</label>
            <input  ref={passwordRef} name="name" type="password" placeholder='Please enter your Languages'></input>
          </div>

          <div className='doctorPatient'>
            <button onClick={() => setPatient(false)}>Doctor</button>
            <button onClick={() => setPatient(true)}>Patient</button>
          </div>

          <div className='inputContainer'>
           <button onClick={() => onSignUpClick()}>Sign Up</button>
          </div>

          

          <div className='bottomButton'>
            <p>Already a member?</p>
            <button onClick={() => setUp(!up)}>SignIn</button>
          </div>

       
        </div>

        <div className="signUp" style={signInUp}>
        <p>Please Sign In With Your details</p>
          <div className='inputContainer'>
            <label for="name">Email</label>
            <input name="name"placeholder='Please enter your Email'/>
          </div>

          <div className='inputContainer'>
            <label for="name">Password</label>
            <input name="name" type="password"  placeholder='Please enter your Password'></input>
          </div>

          <div className='inputContainer'>
          <button onClick={() => onSignUpClick()}>Sign In</button>
          </div>

          <div className='bottomButton'>
            <p>Not a member?</p>
            <button onClick={() => setUp(!up)}>SignUp</button>
          </div>

          </div>
      </div>
    </div>
  )
}

export default Signup