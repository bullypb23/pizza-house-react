import React, { useState } from 'react';
import classes from './Menu.module.scss';
import Pizzas from '../../containers/Pizzas/Pizzas';

const Menu = props => {
  const [showPizzas, setShowPizzas] = useState(true);
  const [showBurgers, setShowBurgers] = useState(false);

  const handleShowPizzas = () => {
    setShowBurgers(false);
    setShowPizzas(true);
  }

  const handleShowBurgers = () => {
    setShowPizzas(false);
    setShowBurgers(true);
  }

  return (
    <div id='#menu' className={classes.Menu}>
      <div className={classes.Heading}>
        <h3>Menu</h3>
      </div>
      <div className={classes.MenuContainer}>
        <div className={classes.MenuLinks}>
          <button onClick={handleShowPizzas}>Pizza</button>
          <button onClick={handleShowBurgers}>Burger</button>
        </div>
        <div className={classes.MenuItems}>
          {showPizzas ? <Pizzas /> : null}
        </div>
      </div>
    </div>
  )
}

export default Menu;