import { getAuth, signOut } from "firebase/auth";
import React from 'react';
import { useNavigate } from "react-router-dom";


const auth = getAuth();

function Signout() {
    let navigate = useNavigate();
    const signout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
          }).catch((error) => {
            // An error happened.
          });
    }
  return (
    <>
        <button onClick={signout}>Sign out</button>
    </>
  )
}

export default Signout