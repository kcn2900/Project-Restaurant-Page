import startUp from './initial';
import contactPage from './contacts';
import aboutPage from './about';
import './style.css'

(() => {
    const buttons = document.querySelectorAll('nav > button');
    aboutPage();
    // startUp();

    buttons[0].addEventListener('click', () => {
        startUp();
    })
    buttons[2].addEventListener('click', () => {
        contactPage();
    })
    buttons[3].addEventListener('click', () => {
        aboutPage();
    })
})();
