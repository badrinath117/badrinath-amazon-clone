import React, {useState} from 'react';
//import ReactDOM from "react-dom"
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Login.css";
import img from "./Amazon_logo.svg";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
  //import { useHistory } from "react-router-dom";
//import {  useHistory} from 'react-router-dom';
import {auth} from "./firebase";
//import {useNavigate} from 'react-router-dom';

function Login() {
    let history  = useHistory () ;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e=> {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }
    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/')
                }
             })
            .catch(error => alert (error.message))
    }
    return (
        <div className="login">
            <Link to='/'>
             <img className="login__logo"
                  src={img} alt={"amazon logo"}>

                  </img>
             </Link>     

             <div className="login__container">
                 <h1>Sign-in</h1>

                 <from >
                     <h5>E-mail</h5>
                     <input type="Text" value={email} onChange=
                     {e => setEmail(e.target.value)}/>

                     <h5>Password</h5>
                     <input type="password" value={password} onChange=
                     {e => setPassword (e.target.value)}/>
                     
                 </from>
                 <button type="submit" onClick={signIn} className="login__signin">Sign In</button>

                 <p>
                    <h5>By sigining in you agree to terms and conditions of the Amazon clone by badrnath ,make sure you reade the privacy policy before sigin in.</h5>
                 </p>
                 <button onClick={register} className="login__registerbutton">create your amzon account</button>
             </div>
            
        </div>
    )
}

export default Login
