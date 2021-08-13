import React from "react";
function Header(props) {
  console.warn("Header",props.data)
  return (
    <div>
      <div className="add-to-cart">
        <span className="cart-count">{props.data.length}</span>
        <img src="https://previews.123rf.com/images/val2014/val20141603/val2014160300005/54302312-shopping-cart-icon.jpg" alt=""/>
      </div>
     
    </div>
  );
}
export default Header;
