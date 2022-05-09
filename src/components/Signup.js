import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";

const auth = getAuth();

function Signup() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const Authenticate = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log("Error Code:",errorCode);
            console.log("Error Message:",errorMessage);
        });
        setEmail("");
        setPassword("");
    }
    return(
        <>
            <div className="Credentials">
                <div className="username">
                   Email: <input type="email" className="Email" onChange={(e)=>setEmail(e.target.value)} value={email} />
                </div>
                <div className="password">
                   Password:  <input type="password" className="Email" onChange={(e)=>setPassword(e.target.value)} value={password} />
                </div>
                <div className="submit">
                    <button className="button" onClick={Authenticate} >Submit</button>
                </div>
            </div>
        </>
    );
} 

export default Signup;