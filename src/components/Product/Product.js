import React, { useState } from 'react';
import classes from './Product.module.scss';
import { MdShoppingCart } from 'react-icons/md';
import { imageSrc } from '../../shared/images';

const Pizza = props => {
  const [size, setSize] = useState(props.sizes[0].size);
  const [price, setPrice] = useState(+props.sizes[0].pivot.price);

  let ingredientsList;
  ingredientsList = Object.keys(props.ingredients).map(key => {
    return props.ingredients[key].name;
  });

  const sizeHandler = (size, price) => {
    setSize(size);
    setPrice(price)
  }

  let buttons = null;

  if(Object.keys(props.sizes).length > 1) {
    buttons = Object.keys(props.sizes).map(key => {
      return <button key={key} onClick={() => {sizeHandler(props.sizes[key].size, props.sizes[key].pivot.price)}}>{props.sizes[key].size} - {props.sizes[key].pivot.price} €</button>
    })

  }

  let src = imageSrc(props.name);

  return (
    <div className={classes.ProductItem}>
      <div className={classes.ImageContainer}>
        <img className={classes.ProductImage} src={src} alt='Product'/>
        <div className={classes.Description}>
          <p>Ingredients</p>
          <p>{ingredientsList.join(', ')}</p>
        </div>
      </div>
      <div className={classes.Heading}>
        <h3>{props.name}</h3>
      </div>
      {Object.keys(props.sizes).length > 1 ? (
        <div className={classes.SizeButtonsContainer}>
          {buttons}
        </div>
      ) : null}
      <div className={classes.BasketButtonContainer}>
        <button onClick={() => props.addToShoppingCart(props.id, props.name, size, price)}>Add to Cart <MdShoppingCart /></button>
      </div>
    </div>
  )
}

export default Pizza;