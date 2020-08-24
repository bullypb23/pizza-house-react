import React, { useEffect } from 'react';
import classes from './ShoppingCartItem.module.scss';
import { imageSrc } from '../../shared/images';
import { MdClose } from 'react-icons/md';

const ShoppingCartItem = props => {
  useEffect(() => {
    if(props.item.quantity === 0) {
      props.removeItem(props.id);
    }
  }, [props.item.quantity]);

  let src = imageSrc(props.item.name);

  return (
    <div className={classes.ShoppingCartItem}>
      <div className={classes.ProductImage}>
        <img src={src} alt="Pizza"/>
      </div>
      <div className={classes.ProductDetails}>
        <h4>{props.item.name}</h4>
        <p>Size: {props.item.size}</p>
        <p>Price: {props.item.price} €</p>
      </div>
      <div className={classes.ProductQuantity}>
        <button onClick={() => props.handleQuantity(props.id, -1)}>-</button>
        <button>{props.item.quantity}</button>
        <button onClick={() => props.handleQuantity(props.id, 1)}>+</button>
      </div>
      <div className={classes.ProductRemove}>
        <MdClose onClick={() => props.removeItem(props.id)} />
      </div>
    </div>
  )
}

export default ShoppingCartItem;