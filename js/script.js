"use strict";


//Делегирование событий и ClassList
const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

/* console.log(btns[0].classList.length);

console.log(btns[0].classList.item(0));  //первый класс у первой кнопки

console.log(btns[1].classList.add('red', 'white'));

console.log(btns[0].classList.remove('blue'));

console.log(btns[0].classList.toggle('blue'));  //переключатель

if (btns[1].classList.contains('red')) {
    console.log('red');
} */

/* btns[0].addEventListener('click', () => {
    if (!btns[1].classList.contains('red')) {
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');
    }
}); */


wrapper.addEventListener('click', (e) =>{
    //console.dir(e.target);
    // if (e.target && e.target.contains('blue'))   // Если есть цель и цель == цель с классом blue
    // if (e.target && e.target.matches('button.red)// Если есть цель и цели есть тег button с классом red
    if (e.target && e.target.tagName == "BUTTON") { // Если есть цель и цель == цель с тэгом button
        console.log('Hello');
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);

