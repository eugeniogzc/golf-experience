import { initHomePage } from './pages/home.js';
import { initTorneosPage } from './pages/torneos.js';
import { initFormPage } from './pages/form.js';

const routes = {
  '/': initHomePage,
  '/torneos': initTorneosPage,
  '/nuevo': initFormPage
};

const appElement = document.getElementById('app');

const router = () => {
  const hash = window.location.hash.slice(1) || '/';
  const pageFunction = routes[hash];
  appElement.innerHTML = '';
  if (pageFunction) {
    pageFunction(appElement);
  } else {
    appElement.innerHTML = '<h2>Error 404: Página no encontrada</h2>';
  }
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
