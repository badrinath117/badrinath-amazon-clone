import React from 'react'
import "./Home.css"
import Img1 from "./amazon home crop.jpg"
import Product from "./Product"
import img2 from "./bookM.jpg"
import img3 from "./Rolex_img.png"
import img4 from "./louis-vuitton.jpg"
import img5 from "./iphone-12.jpg"
import img6 from "./lucky-charms.jpg"
import img7 from "./balenciaga-shoe.jpeg"
function Home() {
    return (
        <div className="home"> 
          <div className="home__conatiner">
              <img 
              className="home__image" 
              src={Img1} alt="homeimg"/>

              <div className="home__row">
                  <Product
                  id="12321341"
                  Info="The Monk Who Sold His Ferrari 
                  by Robin Sharma for Personal Transformation
                         by robin sharma | 1 January 2003"
                  Price=  {24.34}
                  Image={img2}
                  Rating={4}
                  />
                  <Product
                  id= "49538094"
                   Info="OLEVS Luxury Analogue 
                   Men's Watch
                   (Green-Gold Dial and Silver and Gold Colored Strap)-ol85g"
                   Price= {500.00}
                   Image = {img3}
                   Rating ={5}
                  />
              </div>

              <div className="home__row">
                  <Product
                  id="4903850"
                  Info="Loui vuttion-Men's Leather 
                  Slim Bifold Wallet, 
                  Mesa ID Black/Red, One Size"
                  Price= {100.12}
                  Image={img4}
                  Rating={3}
                  />
                  <Product
                  id="23445930"
                   Info="New Apple iPhone 12 (128GB) 
                   - (Product) RED"
                  Price= {1500.00}
                  Image={img5}
                  Rating={4}
                  />
                  <Product
                  Id="3254354345"
                   Info="General Mills Cereal 
                         Lucky Charms, 326g
                         Brand: General Mills"
                  Price= {25.00}
                  Image={img6}
                  Rating={2}
                  />
               </div>   

              <div className="home__row">
                     <Product
                     id="90829332"
                      Info="Balenciaga-Men's Downshifter 
                      10 Running Shoe (Black/White/Anthracite) 
                      (Numeric_8)"
                      Price= {470.99}
                      Image={img7}
                      Rating={5}
                     />
              </div>
           </div>
        </div>

      
    )
}

export default Home
