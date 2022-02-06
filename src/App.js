import React, {useEffect} from "react";
import './App.css';
import Header from "./header";
import Home from "./Home.js";
import {BrowserRouter as Router, Switch, Route } from"react-router-dom";
import Checkout from "./Checkout.js";
import Login from "./Login";
import { auth } from "./firebase";
import { UseStateValue } from "./StateProvider";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js";
import { Elements} from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51JCvUUSJcG6kJ10ipgM8yBMg6KGKORUGSa3xFHOO9yTgWwnFK29UanYT5twLCSi9j71OuztUvczcIzUb27Pq7HyR00kvcxFZ96");

function App() {
//  const [{}, dispatch] = UseStateValue();

  useEffect(() => {

       auth.onAuthStateChanged(authUser => {
         console.log('THE USER IS >>> ', authUser);

         if (authUser) {
           //user created acc / user logged in
          dispatch({
            type:'SET_USER',
            user: authUser
          })
         } else {
           //the user is logged out
           dispatch({
             type:"SET_USER",
             user: null
           })
         }
       })
       },/*[]*/)
  return (
    //BEM
    <Router>
     <div className="App">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/checkout">
                 <Header />
               <Checkout />
            </Route>
              <Route path="/payment">
                 <Header />
                 <Elements stripe={promise}>
                     <Payment />
                 </Elements>  
            </Route>
            <Route path="/">
                 <Header />
                <Home />
          </Route>
         </Switch>
      </div>
    </Router>  
  );
}

export default App;
