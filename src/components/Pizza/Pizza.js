import React, { useState } from 'react';
import classes from './Pizza.module.scss';
import peperoni from '../../assets/images/pepperoni.png';
import capricciosa from '../../assets/images/capricciosa.png';
import vegetariana from '../../assets/images/vegetariana.png';
import hawaiian from '../../assets/images/hawaiian.png';
import mexicana from '../../assets/images/mexicana.png';
import quattro from '../../assets/images/quattro.png';
import margarita from '../../assets/images/margarita.png';
import funghi from '../../assets/images/funghi.png';
import { MdShoppingCart } from 'react-icons/md';

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

  let buttons = Object.keys(props.sizes).map(key => {
    return <button key={key} onClick={() => {sizeHandler(props.sizes[key].size, props.sizes[key].pivot.price)}}>{props.sizes[key].size} - {props.sizes[key].pivot.price} €</button>
  })

  let src;

  switch(props.name) {
    case 'Peperoni':
      src = peperoni;
      break;
    case 'Capricciosa':
      src = capricciosa;
      break;
    case 'Vegetariana':
      src = vegetariana;
      break;
    case 'Hawaii':
      src = hawaiian;
      break;
    case 'Mexicana':
      src = mexicana;
      break;
    case 'Quattro formaggi':
      src = quattro;
      break;
    case 'Margarita':
      src = margarita;
      break;
    case 'Funghi':
      src = funghi;
      break;
    default:
      src = peperoni
  }

  return (
    <div className={classes.PizzaItem}>
      <div className={classes.ImageContainer}>
        <img className={classes.PizzaImage} src={src} alt='Pizza'/>
        <div className={classes.Description}>
          <p>Ingredients</p>
          <p>{ingredientsList.join(', ')}</p>
        </div>
      </div>
      <div className={classes.Heading}>
        <h3>{props.name}</h3>
      </div>
      <div className={classes.SizeButtonsContainer}>
        {buttons}
      </div>
      <div className={classes.BasketButtonContainer}>
        <button onClick={() => props.addToShoppingCart(props.name, size, price)}>Add to Cart <MdShoppingCart /></button>
      </div>
    </div>
  )
}

export default Pizza;