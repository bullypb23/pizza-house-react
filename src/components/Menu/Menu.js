import React, { useState } from 'react';
import classes from './Menu.module.scss';
import Pizzas from '../../containers/Pizzas/Pizzas';
import Burgers from '../../containers/Burgers/Burgers';

const Menu = props => {
  const [showPizzas, setShowPizzas] = useState(true);
  let activeProduct = [classes.MenuLinksButton, classes.Active];

  const handleShowMenuItems = () => {
    setShowPizzas(!showPizzas);
  }

  return (
    <div className={classes.Menu}>
      <div className={classes.Heading}>
        <h3>Menu</h3>
      </div>
      <div className={classes.MenuContainer}>
        <div className={classes.MenuLinks}>
          <button className={showPizzas ? activeProduct.join(' ') : classes.MenuLinksButton} onClick={handleShowMenuItems}>Pizza</button>
          <button className={!showPizzas ? activeProduct.join(' ') : classes.MenuLinksButton} onClick={handleShowMenuItems}>Burger</button>
        </div>
        <div className={classes.MenuItems}>
          {showPizzas ? <Pizzas /> : <Burgers />}
        </div>
      </div>
    </div>
  )
}

export default Menu;