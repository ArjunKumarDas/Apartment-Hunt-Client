import React from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
firebase.initializeApp(firebaseConfig);
const Login = () => {
 const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () => {
       firebase.auth().signInWithPopup(provider);
    //   .then(res =>{
    //       const {displayName, email} = res.user;
    //       console.log(displaName, email);
    //   })
    }
    return (
    <div className="login">
        <div className="gmail-part">
            <div className="login-from">
                <form >
                      <h4>Login</h4>
                    <br />
                    {/* {newUser && <div><input className="border-bottom" name="name" type="text"  placeholder="First Name" />
                        <br />
                        <input className="border-bottom" name="name" type="text"  placeholder="Last Name" /></div>
                    } */}

                    <input className="border-bottom" type="text" name="email"  placeholder="User Name or Email" required />
                    <br />
                    <input className="border-bottom" type="password" name="password"  placeholder="password" required />
                    <br/>
                  
                    <input className="button" type="submit" />
                    <br />
                    <div>
                        
                        <div>Don't have an acount ?<buttton className="p-left">Create an account</buttton></div>

                    </div>
                </form>
            </div>
        </div>
        <div className="google-fb">
            <div> 
            
               <p className="google-btn"><button onClick={handleSignIn} className="google-signIn">Continue with Google</button></p>
            
             </div>
             <p className="google-btn"><button  className="google-signIn">Continue with Facebook</button></p>
        </div>
    </div>
    );
};

export default Login;