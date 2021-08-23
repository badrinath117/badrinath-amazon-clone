import React from 'react';
import "./Header.css";
import img from "./amazon_PNG25.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from 'react-router-dom';
import { UseStateValue } from './StateProvider';
import { auth } from './firebase';



function header() {
    const[{basket, user}, dispatch] = UseStateValue();

    const handleAuthentification = () => {
        if(user) {
            auth.signOut();
        }
    }
                        

   
    return (
        <div className="header">
            <Link to="/">
                 <img className="Header_logo"
                  src={img} alt={"amazon logo"}>
                   {/*"C:\Users\Gigi\Desktop\Amazonclone\amazon-clone\src\amazon_PNG25.png" alt="‪C:\Users\Gigi\Desktop\download (1).png" >  */}
                 </img>
            </Link>
           

             <div className="Header_search">
                 <input
                 className="header__searchinput" type="text"/>
                 <SearchIcon
                 className="header_searchIcon"/>
         
             </div>

             <div className="header__nav">

                 <Link to={!user &&"/login"}>
                 <div onClick={handleAuthentification}
                 className="header__options">
                     <span 
                     className="header__optionlineone">Hello {user?.email}</span>
                      
                     <span
                     className="header__optionlinetwo">{user ? 'Sign Out' : 'Sign In' }</span>
                 </div>
                 </Link>

                 <div className="header__options">
                     <span 
                     className="header__optionlineone">Returns</span>

                     <span
                     className="header__optionlinetwo">&Orders</span>
                 </div>

                 <div className="header__options">
                     <span 
                     className="header__optionlineone">Your</span>

                     <span
                     className="header__optionlinetwo">Prime</span>
                 </div>

                 <Link to="/checkout">
                  <div className="header__optionBasket">
                     <ShoppingBasketIcon />
                     <span className="header__optionlinetwoheader__baskrtCount">
                     {basket.length}
                     </span>
                  </div> 
                 </Link>
                 



             </div>
        </div>
    )
}

export default header
