'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');
     

/* console.log(hearts);
hearts.forEach(item => {
    console.log(item);
}); */
//box.style.backgroundColor = 'blue';
//box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for
for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
}

// forEach
hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div'); // создание элемента
// const text = document.createTextNode('I am was been here');
div.classList.add('black'); // добавление стилей в єлемент
wrapper.append(div); // добавляет элемент в конец 
// wrapper.appendChild(div); - устаревший метод
wrapper.prepend(div); // добавляет эемент в начало
hearts[0].before(div); // размещение перед определенным элементом
hearts[1].after(div); // размещение после указанного элемента
// wrapper.insertBefore(div, hearts[1]); - устаревший метод
circles[1].remove(); // удаление выбранного элемента
// wrapper.removeChild(hearts[1]); - устаревший метод
hearts[0].replaceWith(circles[1]); // замена одного элемента другим
// wrapper.replaceChild(circles[0], hearts[1]); - устаревший метод

div.innerHTML = '<h1>Hello Pablo!</h1>'; // добавление HTML кода в элемент
box.textContent = 'Hello Pumba'; // добавление текста в элемент

div.insertAdjacentHTML('beforebegin', '<h2>Puding</h2>'); // добавление участка HTML кода перед элементом
oneHeart.insertAdjacentHTML('afterbegin', '<h2>Пукач</h2>'); // добавление участка кода в начало элемента
wrapper.insertAdjacentHTML('beforebegin', '<h2>Пукач</h2>'); // добавление участка кода в конец элемента
wrapper.insertAdjacentHTML('afterend', '<h2>Ну ты и пукич</h2>'); // добавление участка кода после элемента