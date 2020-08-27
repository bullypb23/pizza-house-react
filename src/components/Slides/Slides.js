import React from 'react';
import { Fade } from 'react-slideshow-image';
import classes from './Slides.module.scss';
import pizza from '../../assets/images/bg_1.png';
import burger from '../../assets/images/burger2.png';
import 'react-slideshow-image/dist/styles.css';
import { FaCircle } from 'react-icons/fa';

const Slides = () => {

  return (
    <div>
      <div className={classes.Container}>
        <Fade 
          indicators={(i) => <div className="indicator"><FaCircle /></div>} 
          arrows={false} 
          pauseOnHover={false}>
          <div className={classes.EachSlide}>
            <div className={classes.Banner}>
              <img src={pizza} alt="Pizza"/>
            </div>
            <div className={classes.Heading}>
              <h3>Delicious</h3>
              <h1>Italian pizza</h1>
              <p>Choose from menu and order best food in Munich!</p>
              <div className={classes.ButtonContainer}>
                <a href='#menu'>View Menu</a>
              </div>
            </div>
          </div>
          <div className={classes.EachSlide}>
            <div className={classes.Heading2}>
              <h3>Tasty</h3>
              <h1>Homemade burger</h1>
              <p>Choose from menu and order best food in Munich!</p>
              <div className={classes.ButtonContainer}>
                <a href='#menu'>View Menu</a>
              </div>
            </div>
            <div className={classes.Banner}>
              <img src={burger} alt="Pizza"/>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Slides;