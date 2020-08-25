import peperoni from '../assets/images/pepperoni.png';
import capricciosa from '../assets/images/capricciosa.png';
import vegetariana from '../assets/images/vegetariana.png';
import hawaiian from '../assets/images/hawaiian.png';
import mexicana from '../assets/images/mexicana.png';
import quattro from '../assets/images/quattro.png';
import margarita from '../assets/images/margarita.png';
import funghi from '../assets/images/funghi.png';
import burger from '../assets/images/burger.png';

export const imageSrc = (name) => {

  let src;
  switch(name) {
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
    case 'Beef burger':
      src = burger;
      break;
    case 'Cheeseburger':
      src = burger;
      break;
    case 'Bacon burger':
      src = burger;
      break;
    default:
      src = peperoni
  }

  return src;
}