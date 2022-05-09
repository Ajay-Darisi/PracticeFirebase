import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import db from './firebase.js';
import { collection, getDocs } from "firebase/firestore";
import '../styles/home.css';
import { useNavigate } from "react-router-dom";

export default function Home() {
    let navigate = useNavigate();
    var [data,setData] = useState([]);
    const fun = async() => {
        var data1 = [];
        const querySnapshot = await getDocs(collection(db, "Details"));
        querySnapshot.forEach((doc) => {
            data1.push(doc.data());
        });
        setData(data1);
    }
    useEffect( () => {
        fun();
      },[]);
      const card = (l) => {
        navigate("/card",{state : l});
      }
  return (
    <div className="home">
          <div className="cards">
            {data.map((l) => (
                <div className="card">  
                        <div className="card-inner" key={l.name} onClick={()=>card(l)} >
                            <p>Name:{l.name}</p>
                            <p>Email:{l.email}</p>
                            <p>Message: {l.message}</p>
                        </div>
                </div>
            ))}
        </div>
      </div>
  )
}
