import React from 'react'
import "./Product.css"
import StarIcon from '@material-ui/icons/Star';
//import img2 from "./bookM.jpg"
import { UseStateValue } from './StateProvider';
function Product({id, Info, Price, Rating, Image}) {
  const [{basket}, dispatch] = UseStateValue();

  console.log("this is the basket >>>", basket);
  const addToBasket = () => {
    //dispathc the item into data layer
    dispatch({
      type:"ADD_TO_BASKET",
      item: {
        id: id,
        Info: Info,
        Image: Image,
        Price: Price,
        Rating: Rating,
      },
    })
  };
    return (
        <div className="products">

           <div className="product__info">
              <div className="product__infoclone"> 
                 <p>{Info}</p>
                 <p className="product__price">
                   <small></small>
                   <  strong>${Price}</strong>
                 </p>
                 <div className="product__rating">
                   {Array(Rating) 
                     .fill()
                     .map((_, i) => (
                        <StarIcon/> 
                     ))}
                    
                 </div>
              </div>
                 
                     <img className="product__img"
                      src={Image} alt=""/>

                     <button className="add__button" onClick={addToBasket}>Add to cart</button>
                     
            </div> 
        </div>
    )
}

export default Product
