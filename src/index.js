import startUp from './initial';
import menuPage from './menu';
import contactPage from './contacts';
import aboutPage from './about';
import './style.css'

(() => {
    const buttons = document.querySelectorAll('nav > button');
    menuPage();
    // startUp();

    buttons[0].addEventListener('click', () => {
        startUp();
    })
    buttons[1].addEventListener('click', () => {
        menuPage();
    })
    buttons[2].addEventListener('click', () => {
        contactPage();
    })
    buttons[3].addEventListener('click', () => {
        aboutPage();
    })
})();
