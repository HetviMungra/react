import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeFromCart } from "../features/Cart/CartSlice";
import './Cart.css'


const Cart = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (items.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div className="cart">
    <center>  <h2> Welcome Your Cart</h2></center>
      {
      items.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} />
          <div>
            <h3>{item.title}</h3>
            <p>Price: ${item.price.toFixed(2)}</p>
            <p>Quantity: {item.quantity}</p>
            <button className="pluse" onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
            <button className="pluse" onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
            <button className="Removeb" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </div>
        </div>
      ))}
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
