import React, { useState } from "react";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Signup() {
    let navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const Authenticate = () => {
        const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log(user);
                console.log("Success");
                navigate("/home")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error Code:",errorCode);
                console.log("Error Message:",errorMessage);
            });
        setEmail("");
        setPassword("");
    }
    return(
        <>
            <div className="Credentials">
                Login Page
                <div className="username">
                   Email: <input type="email" className="Email" onChange={(e)=>setEmail(e.target.value)} value={email} />
                </div>
                <div className="password">
                   Password:  <input type="password" className="Email" onChange={(e)=>setPassword(e.target.value)} value={password} />
                </div>
                <div className="submit">
                    <button className="button" onClick={Authenticate} >Submit</button>
                </div>
              <li><Link to="/signup">Signup</Link></li>
            </div>
        </>
    );
} 

export default Signup;