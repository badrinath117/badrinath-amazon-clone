import React from 'react';
import "./Checkout.css";
import { UseStateValue } from './StateProvider';
import Subtotal from"./Subtotal";
import CheckoutProduct from "./CheckoutProduct"
function Checkout() {
    const [{basket, user},dispatch] =UseStateValue();
    return (
        <div className="checkout"> 
            <div className="checkout__left">
               <img 
               className="checkout__ad"
               src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
               alt="">

               </img>

               <div>
                   <h3>Hello, { user?.email}</h3>
                   <h2 calssName="checkout__title">
                     Your shopping basket
                   </h2>
                   {basket.map(item => (
                       <CheckoutProduct
                        id={item.id}
                        Info={item.Info}
                        Image={item.Image}
                        Price={item.Price}
                        Rating={item.Rating}
                        />
                   ))}
                   {/*product*/}
                   {/*product*/}
                   {/*product*/}
                   {/*product*/}
               </div>
            </div>
            <div className="checkout__right">
                   <Subtotal/>
            </div>
         
        </div>
    ) ;
}

export default Checkout
