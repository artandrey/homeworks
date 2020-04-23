'use strict';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
let body = document.querySelector('body');

let input = document.querySelector('.switch__input');


const setLight = function () {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
}

const setDark = function () {
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
}
const theme = localStorage.getItem('theme');
console.log(theme)
if (theme === 'light') input.checked = true;
else if (theme === 'dark') input.checked = false;
else input.checked = true;

if (input.checked) setLight()
else setDark()



  input.addEventListener('change', () => {
    if (input.checked) {
        setLight()
        localStorage.setItem('theme', 'ligth');
        console.log('ligth')
    }
    else {
        setDark()
        localStorage.setItem('theme', 'dark');
        console.log('dark')
    }
    console.log(input.checked)
  });

