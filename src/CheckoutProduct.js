import React from 'react'
import './CheckoutProduct.css'
import StarIcon from '@material-ui/icons/Star';
import { UseStateValue } from './StateProvider';

function CheckoutProduct({id, Image, Info, Price, Rating}) {
    const[{basket},dispatch] = UseStateValue();

    const removeFromBasket = () => {
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id: id,
        })
    }
    return (
        <div className="CheckoutProduct">
            <img className="CheckoutProduct__image" src={Image}
            />

            <div className="CheckoutProduct__info">
                <p className="CheckoutProduct__Info">{Info}
                </p>
                <p className="CheckoutProduct__price">
                    <small>$</small>
                    <strong>{Price}</strong>
                </p>
                <div className="CheckoutProduct__rating">
                    {Array(Rating)
                    .fill()
                    .map((_, i) => (
                    <p> <StarIcon/> </p>

                     )) }
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct
