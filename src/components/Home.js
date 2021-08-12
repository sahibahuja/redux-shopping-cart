import React from "react";
function Home() {
  return (
    <div>
      <div className="add-to-cart">
        <img src="https://previews.123rf.com/images/val2014/val20141603/val2014160300005/54302312-shopping-cart-icon.jpg" alt=""/>
      </div>
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
          <button className="btn-wrapper-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
export default Home;
