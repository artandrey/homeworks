'use strict';
import './styles.css';



import jsonData from './menu.json'
let elementInfo = document.querySelector('#item-template').innerHTML;

let template = Handlebars.compile(elementInfo);
let ul = document.querySelector('.js-menu');
// let markup = template(jsonData[0]);

let markup = '';


const createTemplate = function(){
    for (const el of jsonData) {
        markup = template(el)
        ul.innerHTML += markup;
    }
}

createTemplate();



const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
let body = document.querySelector('body');

let input = document.querySelector('.switch__input');


const setLight = function () {
  body.classList.add(Theme.LIGHT);
  body.classList.remove(Theme.DARK);
};

const setDark = function () {
  body.classList.remove(Theme.LIGHT);
  body.classList.add(Theme.DARK);
};
const theme = localStorage.getItem('theme');
console.log(theme);
if (theme === 'light') input.checked = false
else if (theme === 'dark') input.checked = true
else input.checked = false

if (input.checked) setDark();
else setLight();



input.addEventListener('change', () => {
  if (input.checked) {
      setDark();
      localStorage.setItem('theme', 'dark');
  }
  else {
      setLight();
      localStorage.setItem('theme', 'light');
  }
  console.log(input.checked);
});


