import React from "react";
import "./css/product.css"

function Product(){
    return(
        <div className="products_wrap">
                <div className="product">
                    <img src="https://m.media-amazon.com/images/I/61PW24157AL._SL1500_.jpg" alt="Product 1"/>
                    <h3>Product Name</h3>
                    <p>Product Price</p>
                    <button onClick={()=>alert("Add to Cart")}>Buy Now</button>
                </div>
                <div className="product">
                    <img src="https://m.media-amazon.com/images/I/61cwywLZR-L._SL1500_.jpg" alt="Product 2"/>
                    <h3>Product Name</h3>
                    <p>Product Price</p>
                    <button onClick={()=>alert("Add to Cart")}>Buy Now</button>
                </div>
                <div className="product">
                    <img src="https://m.media-amazon.com/images/I/71J8tz0UeJL._SL1500_.jpg" alt="Product 3"/>
                    <h3>Product Name</h3>
                    <p>Product Price</p>
                    <button onClick={()=>alert("Add to Cart")}>Buy Now</button>
                </div>
                <div className="product">
                    <img src="https://m.media-amazon.com/images/I/611rQWZa5rL._SL1200_.jpg" alt="Product 4"/>
                    <h3>Product Name</h3>
                    <p>Product Price</p>
                    <button onClick={()=>alert("Add to Cart")}>Buy Now</button>
                </div>
        </div>
    )
}

export default Product