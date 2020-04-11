'use strict'

let body = document.querySelector('.body');

let p = document.createElement('p');
p.textContent = 'hello';
body.prepend(p);
p.style.fontSize = '92px';
p.style.color = 'white';
body.style.backgroundColor = '#222222';
p.style.textAlign = 'center';

p.addEventListener('click', () => { p.style.color = 'green';});