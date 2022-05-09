import "../styles/contact.css";
import React, { useState } from "react";
import { IoLocationSharp, IoCall, IoMail } from "react-icons/io5";
import db from "./firebase.js";
import { doc, setDoc } from "firebase/firestore";

export default function Contact() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");

    const submit = async() => {
        const details={name:name,email:email,message:message};
        console.log(details);
        await setDoc(doc(db,"Details",name),details);
        setName("");
        setEmail("");
        setMessage("");
    }

  return (
    <div className="outer">
      <div className="Main">
        <div className="Heading">
          <p className="contact">CONTACT</p>
          <p className="italic">Fan?Drop a note!</p>
        </div>
        <div className="Body">
          <div className="Details">
            <div className="details-inner">
              <p>
                <span>
                  <IoLocationSharp />
                </span>{" "}
                Chicago,US
              </p>
              <p>
                <span>
                  <IoCall />
                </span>{" "}
                Phone: +00 151515
              </p>
              <p>
                <span>
                  <IoMail />
                </span>{" "}
                Email: mail@mail.com
              </p>
            </div>
          </div>
          <div className="Inputs">
            <div className="Inputs-inner">
              <div className="personalDetails">
                <input
                  className="Name"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                />
                <input
                  className="Email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div className="message">
                <input
                  className="Message"
                  type="text"
                  placeholder="Message"
                  value={message}
                  onChange={(e)=>setMessage(e.target.value)}
                />
              </div>
              <div className="button">
                <button className="Send" onClick={submit}>SEND</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
