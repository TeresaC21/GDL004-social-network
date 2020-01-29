import {
  components, vista,
} from './view/components.js';
import { currentUser } from './model/store.js';

console.log(vista);
console.log(vista.initEnter);

export const controller = {
  welcomeRoute: () => {
    vista.initEnter();
  },
  regiRoute: () => {
    vista.initRegi();
  },
  homeRoute: () => {
    vista.initPost();
  },
};


export const changeView = (route) => {
  // console.log(router)
  const container = document.querySelector('#container');
  container.innerHTML = '';
  switch (route) {
    case '':
    case '#':
    case '#/':
    case '#/welcome': {
      container.appendChild(components.welcome());
      controller.welcomeRoute();
      break;
    }
    case '#/register': {
      container.appendChild(components.register());
      controller.regiRoute();
      break;
    }
    case '#/home': {
      // container.appendChild(components.home());
      // controller.homeRoute();
      const user = currentUser();
      container.appendChild(components.home(user));
      controller.homeRoute();
      break
    }
    default:
      break;
  }
  console.log(route);
  return null;
};

