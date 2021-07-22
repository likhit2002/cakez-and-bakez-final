import React,{useState} from 'react'
import { auth } from './firebase'

import './Home.css'
import Header from "./Header"


  
export default function Home() {
    const [cart,setCart]=useState(0)
    function addToCart(){
        
        setCart((prev)=>(prev+1))

    
    }
    const [likes,setLikes]=useState(0)
    function Like(){
        
        setLikes((prev)=>(prev+1))

    
    }
    
    return (
        <div>
            
        <Header cart={cart} likes={likes}/>
        <section className="home" id="home">

        <div className="image">
            <img src="/images/home.jpg" alt=""/>
        </div>

        <div className="content">
            <span>Baked pantry to satiate the senses. </span>
            <h3>Made with love and baked to perfection.</h3>
            <a href="#" className="btn">get started</a>
        </div>

        </section>

        {/* <!-- home section ends --> */}

        {/* <!-- banner section starts  --> */}

        <section className="banner-container">

        <div className="banner">
            <img src="/images/banner-1.jpg" alt=""/>
            <div className="content1">
                <h3>special offer</h3>
                <p>upto 45% off</p>
                <a href="#" className="btn">check out</a>
            </div>
        </div>

        <div className="banner">
            <img src="/images/banner-2.jpeg" alt=""/>
            <div className="content2">
                <h3>limited offer</h3>
                <p>upto 50% off</p>
                <a href="#" className="btn">check out</a>
            </div>
        </div>

        </section>

        {/* <!-- banner section ends --> */}

        {/* <!-- category section starts  --> */}

        <section className="category" id="category">

        <h1 className="heading">shop by <span>category</span></h1>

        <div className="box-container">

            <div className="box">
                <h3>cakes</h3>
                <p>upto 50% off</p>
                <img src="images/category-1.jpg" alt=""/>
                <a href="#" className="btn">shop now</a>
            </div>
            <div className="box2">
                <h3>cookies</h3>
                <p>upto 44% off</p>
                <img src="images/category-2.jpg" alt=""/>
                <a href="#" className="btn">shop now</a>
            </div>
            <div className="box4">
                <h3>breads</h3>
                <p>upto 35% off</p>
                <img src="images/category-3.jpg" alt=""/>
                <a href="#" className="btn">shop now</a>
            </div>
            <div className="box3">
                <h3>pizza</h3>
                <p>upto 12% off</p>
                <img src="images/category-4.jpg" alt=""/>
                <a href="#" className="btn">shop now</a>
            </div>

        </div>

        </section>

        {/* <!-- category section ends --> */}

        {/* <!-- product section starts  --> */}

        <section className="product" id="product">

        <h1 className="heading">latest <span>products</span></h1>

        <div className="box-container">

            <div className="box box-xyz">
                <span className="discount">-33%</span>
                <div className="icons">
                  <a href="#" className="fas fa-share"></a>
                    <a href="#" className="fas fa-eye"></a>
                    <button onClick={Like}><a className="fas fa-heart"></a></button>
                </div>
                <img src="images/product-1.png" alt=""/>
                <h3>blackforest cake</h3>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="price"> $10.50 <span> $13.20 </span> </div>
                <div className="quantity">
                    <span>quantity : </span>
                    <input type="number" min="1" max="1000" value="1"/>
                    <span> /kg </span>
                </div>
                {/* <!-- <a href="#" className="btn">Add To Cart</a> --> */}
                <button className="btn1" onClick={addToCart}>Add To Cart</button>
            </div>

            <div className="box">
                <span className="discount">-45%</span>
                <div className="icons">
                   <a href="#" className="fas fa-share"></a>
                    <a href="#" className="fas fa-eye"></a>
                    <button onClick={Like}><a className="fas fa-heart"></a></button>
                </div>
                <img src="images/product-2.jpg" alt=""/>
                <h3>chocolate cake</h3>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="price"> $10.50 <span> $13.20 </span> </div>
                <div className="quantity">
                    <span>quantity : </span>
                    <input type="number" min="1" max="1000" value="1"/>
                    <span> /kg </span>
                </div>
                <button className="btn1" onClick={addToCart}>Add To Cart</button>
            </div>

            <div className="box">
                <span className="discount">-52%</span>
                <div className="icons">
                     <a href="#" className="fas fa-share"></a>
                    <a href="#" className="fas fa-eye"></a>
                    <button onClick={Like}><a className="fas fa-heart"></a></button>
                </div>
                <img src="images/product-3.jpg" alt=""/>
                <h3>pineapple cake</h3>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="price"> $10.50 <span> $13.20 </span> </div>
                <div className="quantity">
                    <span>quantity : </span>
                    <input type="number" min="1" max="1000" value="1"/>
                    <span> /kg </span>
                </div>
                {/* <!-- <a href="#" className="btn" >Add To Cart</a> --> */}
                <button className="btn1" onClick={addToCart}>Add To Cart</button>
            </div>

            <div className="box">
                <span className="discount">-13%</span>
                <div className="icons">
                   <a href="#" className="fas fa-share"></a>
                    <a href="#" className="fas fa-eye"></a>
                    <button onClick={Like}><a className="fas fa-heart"></a></button>
                </div>
                <img src="images/product-4.jpg" alt=""/>
                <h3>strawberry cake</h3>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="price"> $10.50 <span> $13.20 </span> </div>
                <div className="quantity">
                    <span>quantity : </span>
                    <input type="number" min="1" max="1000" value="1"/>
                    <span> /kg </span>
                </div>
                {/* <!-- <a href="#" className="btn">Add To Cart</a> --> */}
                <button className="btn1" onClick={addToCart}>Add To Cart</button>
            </div>

            <div className="box">
                <span className="discount">-20%</span>
                <div className="icons">
                   <a href="#" className="fas fa-share"></a>
                    <a href="#" className="fas fa-eye"></a>
                    <button onClick={Like}><a className="fas fa-heart"></a></button>
                    
                </div>
                <img src="images/product-5.png" alt=""/>
                <h3>orange cake</h3>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="price"> $10.50 <span> $13.20 </span> </div>
                <div className="quantity">
                    <span>quantity : </span>
                    <input type="number" min="1" max="1000" value="1"/>
                    <span> /kg </span>
                </div>
                {/* <!-- <a href="#" className="btn">Add To Cart</a> --> */}
                <button className="btn1" onClick={addToCart}>Add To Cart</button>
            </div>

            <div className="box">
                <span className="discount">-29%</span>
                <div className="icons">
                    <button onClick={Like}><a className="fas ga-heart"></a></button>
                    <a href="#" className="fas fa-share"></a>
                    <a href="#" className="fas fa-eye"></a>
                    <button onClick={Like}><a className="fas fa-heart"></a></button>
                </div>
                <img src="images/product-6.png" alt=""/>
                <h3>chocochip cookies</h3>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="price"> $10.50 <span> $13.20 </span> </div>
                <div className="quantity">
                    <span>quantity : </span>
                    <input type="number" min="1" max="1000" value="1"/>
                    <span> /kg </span>
                </div>
                {/* <!-- <a href="#" className="btn">Add To Cart</a> --> */}
                <button className="btn1" onClick={addToCart}>Add To Cart</button>
            </div>

            <div className="box">
                <span className="discount">-55%</span>
                <div className="icons">
                   <a href="#" className="fas fa-share"></a>
                    <a href="#" className="fas fa-eye"></a>
                    <button onClick={Like}><a className="fas fa-heart"></a></button>
                </div>
                <img src="images/product-7.png" alt=""/>
                <h3>fruit and nut cookies</h3>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="price"> $10.50 <span> $13.20 </span> </div>
                <div className="quantity">
                    <span>quantity : </span>
                    <input type="number" min="1" max="1000" value="1"/>
                    <span> /kg </span>
                </div>
                {/* <!-- <a href="#" className="btn">Add To Cart</a> --> */}
                <button className="btn1" onClick={addToCart}>Add To Cart</button>
            </div>

            <div className="box">
                <span className="discount">-30%</span>
                <div className="icons">
                   <a href="#" className="fas fa-share"></a>
                    <a href="#" className="fas fa-eye"></a>
                    <button onClick={Like}><a className="fas fa-heart"></a></button>
                </div>
                <img src="images/product-8.png" alt=""/>
                <h3>creamy bun</h3>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="price"> $10.50 <span> $13.20 </span> </div>
                <div className="quantity">
                    <span>quantity : </span>
                    <input type="number" min="1" max="1000" value="1"/>
                    <span> /kg </span>
                </div>
                {/* <!-- <a href="#" className="btn">Add To Cart</a> --> */}
                <button className="btn1" onClick={addToCart}>Add To Cart</button>
            </div>

            <div className="box">
                <span className="discount">-40%</span>
                <div className="icons">
                   <a href="#" className="fas fa-share"></a>
                    <a href="#" className="fas fa-eye"></a>
                    <button onClick={Like}><a className="fas fa-heart"></a></button>
                </div>
                <img src="images/product-9.png" alt=""/>
                <h3>peppy margherita pizza</h3>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="price"> $10.50 <span> $13.20 </span> </div>
                <div className="quantity">
                    <span>quantity : </span>
                    <input type="number" min="1" max="1000" value="1"/>
                    <span> /kg </span>
                </div>
                {/* <!-- <a href="#" className="btn">Add To Cart</a> --> */}
                <button className="btn1" onClick={addToCart}>Add To Cart</button>
            </div>

        </div>

        </section>


        <section className="cart_view">

        </section>

        {/* <!-- product section ends --> */}

        {/* <!-- deal section starts  --> */}

        <section className="deal" id="deal">

        <div className="content">

            <h3 className="title">deal of the day</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam possimus voluptates commodi laudantium! Doloribus sint voluptatibus quaerat sequi suscipit nulla?</p>

            <div className="count-down">
                <div className="box">
                    <h3 id="day">00</h3>
                    <span>day</span>
                </div>
                <div className="box">
                    <h3 id="hour">00</h3>
                    <span>hour</span>
                </div>
                <div className="box">
                    <h3 id="minute">00</h3>
                    <span>minute</span>
                </div>
                <div className="box">
                    <h3 id="second">00</h3>
                    <span>second</span>
                </div>
            </div>

            <a href="#" className="btn">check the deal</a>

        </div>

        </section>

        {/* <!-- deal section ends --> */}

        {/* <!-- contact section starts  --> */}

        <section className="contact" id="contact">

        <h1 className="heading"> <span>contact</span> us </h1>

        <form action="">

            <div className="inputBox">
                <input type="text" placeholder="name"/>
                <input type="email" placeholder="email"/>
            </div>

            <div className="inputBox">
                <input type="number" placeholder="number"/>
                <input type="text" placeholder="subject"/>
            </div>

            <textarea placeholder="message" name="" id="" cols="30" rows="10"></textarea>

            <input type="submit" value="send message" className="btn"/>

        </form>

        </section>

        {/* <!-- contact section ends --> */}

        {/* <!-- newsletter section starts  --> */}

        <section className="newsletter">

        <h3>subscribe us for latest updates</h3>

        <form action="">
            <input className="box" type="email" placeholder="enter your email"/>
            <input type="submit" value="subscribe" className="btn"/>
        </form>

        </section>

        {/* <!-- newsletter section ends --> */}

        {/* <!-- footer section starts  --> */}

        <section className="footer">

        <div className="box-container">

            <div className="box">
                <a href="#" className="logo"><i className="fas fa-shopping-basket"></i>Cakez N bakez</a>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam culpa sit enim nesciunt rerum laborum illum quam error ut alias!</p>
                <div className="share">
                    <a href="https://www.facebook.com/" className="btn fab fa-facebook-f"></a>
                    <a href="https://twitter.com/account/access" className="btn fab fa-twitter"></a>
                    <a href="https://www.instagram.com/accounts/login/?next=/accounts/edit/" className="btn fab fa-instagram"></a>
                    {/* <a href="#" className="btn fab fa-linkedin"></a> */}
                    <a href="https://www.amazon.com/" className="btn fab fa-amazon"></a>
                </div>
            </div>
            
            <div className="box">
                <h3>our location</h3>
                <div className="links">
                    <a href="#">india</a>
                    <a href="#">USA</a>
                    <a href="#">france</a>
                    <a href="#">japan</a>
                    <a href="#">russia</a>
                </div>
            </div>

            <div className="box">
                <h3>quick links</h3>
                <div className="links">
                    <a href="#">home</a>
                    <a href="#">category</a>
                    <a href="#">product</a>
                    <a href="#">deal</a>
                    <a href="#">contact</a>
                </div>
            </div>

            <div className="box">
                <h3>download app</h3>
                <div className="links">
                    <a href="#">google play</a>
                    <a href="#">window xp</a>
                    <a href="#">app store</a>
                </div>
            </div>

        </div>

        <h1 className="credit"> created by <span> mr. web designer </span> | all rights reserved! </h1>

        </section>

        {/* <!-- footer section ends --> */}







        </div>
    )
}
