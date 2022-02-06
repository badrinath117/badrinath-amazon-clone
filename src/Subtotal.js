import React from 'react'
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Subtotal.css"
import CurrencyFormat from"react-currency-format";
import { UseStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
//import { useHistory } from 'react-router-dom';
 import { useHistory } from "react-router-dom";
//import { useNavigate } from 'react-router-dom';
 
function Subtotal() {
    let history  = useHistory();
  //  const [{ basket }, dispatch] = UseStateValue();
    
    return (
        <div className="subtotal">
            <CurrencyFormat
             renderText={(value) => (
                 <>
                   <p>
                       Subtotal ({basket.length} items): <strong> {value}
                       </strong>
                   </p>
                   <small className="subtotal__gift">
                       <input type="checkbox"/>this order contains a subtotal__gift
                   </small>
                 </>
             )}
             
             decimalScale={2}
             value= {getBasketTotal(basket)}
             displayType ={"text"}
             thousandSeparator={true}
             prefix={"$"}
            />

            <button onClick={e =>  history.push("/payment")}>Proceed to checkout</button>
        </div>
    );
}

export default Subtotal
