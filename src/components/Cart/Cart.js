import { useContext } from "react";
import classes from "./Cart.module.css";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CardContext from "../../store/cart-context";

const Card = (props) => {
  const cartCtx = useContext(CardContext);
  const { items, totalAmount } = cartCtx;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    console.log(id);
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal hideModal={props.hideModal}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.hideModal}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Card;
