import "./App.css";
import Contact from './components/Contact.js';
// import Firebase from "./components/Firebase.js";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
import Card from "./components/Card.js";
import Error from "./components/Error.js";
import Signup from "./components/Signup.js";
import Login from "./components/Login.js";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/card" element={<Card/>} />
        <Route path="*" element={Error} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/" element={<Login/>} />
      </Routes>
      {/* <Contact /> */}
      {/* <Firebase /> */}
    </div>
  );
}

export default App;
