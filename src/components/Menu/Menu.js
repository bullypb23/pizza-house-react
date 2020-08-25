import React, { useState } from 'react';
import classes from './Menu.module.scss';
import Pizzas from '../../containers/Pizzas/Pizzas';
import Burgers from '../../containers/Burgers/Burgers';

const Menu = props => {
  const [showPizzas, setShowPizzas] = useState(true);
  // const [showBurgers, setShowBurgers] = useState(false);

  const handleShowMenuItems = () => {
    setShowPizzas(!showPizzas);
    
  }

  return (
    <div id='menu' className={classes.Menu}>
      <div className={classes.Heading}>
        <h3>Menu</h3>
      </div>
      <div className={classes.MenuContainer}>
        <div className={classes.MenuLinks}>
          <button onClick={handleShowMenuItems}>Pizza</button>
          <button onClick={handleShowMenuItems}>Burger</button>
        </div>
        <div className={classes.MenuItems}>
          {showPizzas ? <Pizzas /> : <Burgers />}
        </div>
      </div>
    </div>
  )
}

export default Menu;