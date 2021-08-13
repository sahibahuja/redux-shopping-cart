import React from "react";
function Home(props) {
  // console.warn("Home",props.data)
  return (
    <div>
      <h1>Playstation</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://i.gadgets360cdn.com/products/large/sony-ps5-649x800-1592631239.jpeg" alt=""/>
        </div>
        <div className="text-wrapper item">
          <span>PS5 </span>
          <span>Price:$500.00</span>
        </div>
        <div >
          <button className="btn-wrapper-button" onClick={()=>props.addToCartHandler({price:500,name:'PS5'})}>Add to Cart</button>
          <button className="remove-cart-btn" onClick={()=>{props.removeToCartHandler()}}>Remove to Cart</button>
        </div>
      </div>
    </div>
  );
}
export default Home;
