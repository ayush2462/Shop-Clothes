import React, { useContext } from "react";
import "./CartItem.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItem = () => {
  const { getTotalCartAmount,all_product, cartItem, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cartitem">
      <div className="cartitem-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((product) => {
        if (cartItem[product.id] > 0) {
          return (
            <div>
            <div className="cartitem-format cartitem-format-main" key={product.id}>
              <img
                src={product.image}
                className="carticon-product-icon"
                alt={product.name}
              />
              <p>{product.name}</p>
              <p>${product.new_price}</p>
              <button className="cartitem-quantity">
                {cartItem[product.id]}
              </button>
              <p>${product.new_price * cartItem[product.id]}</p>
              <img
                src={remove_icon}
                className="cartitem-remove-icon"
                alt="Remove item"
                onClick={() => removeFromCart(product.id)}
              />
            </div>
            <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitem-down">
        <div className="cartitem-total">
            <h1>Cart Total</h1>
            <div>
                <div className="cartitem-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitem-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitem-total-item">
                  <h3>Total</h3>
                  <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-item-promocode">
            <p>If you have a promocode, Enter here</p>
            <div className="cartitem-promobox">
                <input type="text" placeholder="Promocode" />
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
