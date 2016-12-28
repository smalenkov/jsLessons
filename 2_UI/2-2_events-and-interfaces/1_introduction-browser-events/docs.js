;(function () {

  // Пример 1

  function runDoc_1() {

    for (var i = 1; i <= 3; i++) {
      alert("Кролик номер " + i);
    }

  }

  // events throught property

  function runDoc_2() {

    var elem = document.getElementById('rabbits-button');
    elem.onclick = function() {
      alert('Hello!')
    };

    function sayHi() {
      this.value = 'Запустилось'; // get event element from this
      alert('Hi!');
    }

    elem.onclick = sayHi;

  }


  // addEventListener and removeEventListener

  function runDoc_3() {

    var elem = document.getElementById('rabbits-button');
    elem.addEventListener('click', sayHi);
    elem.addEventListener('mouseover', sayThinks);

    var recbox = document.getElementById('recbox');
    recbox.addEventListener('click', widthAnimate);
    recbox.addEventListener('transitionend', setColor);

    function widthAnimate() {
      this.classList.add('widthplus');
    }

    function setColor() {
      this.classList.add('newcolor');
    }

    function sayHi() {
      alert('Hiiii!');
    }

    function sayThinks() {
      this.value = "Запустилось!";
      alert('Think you!');
    }

  }

  // Задание 1

  function runTask_1() {

    var tButton = document.getElementById('hidetextbutton');
    tButton.addEventListener('click', hideText);
    
    var hButton = document.getElementById('hidebutton');
    hButton.addEventListener('click', hideButton);

    var menuTitle = document.getElementById('menu-title');
    menuTitle.addEventListener('click', toggleMenu);

    var closeButton = document.getElementsByClassName('close-button');
    for (var i=0; i<closeButton.length; i++) {
      closeButton[i].addEventListener('click', closeMessage);
    }

    function hideText() {
      var text = document.getElementById('text');
      text.classList.add('hide');
    }

    function hideButton() {
      this.classList.add('hide');
    }

    function toggleMenu() {
      var menu = document.getElementById('menu');
      if(!menu.classList.contains('hide')) {
        menu.classList.add('hide')
      } else {
        menu.classList.remove('hide')
      }
    }

    function closeMessage() {
      var animalBox = this.parentNode;
      animalBox.classList.add('hide');
    }

    var count = 3;
    var widthOneCount = 200;

    var nextBtn = document.getElementById('button-right');
    var prevBtn = document.getElementById('button-left');
    var contentBox = document.getElementById('slider-container__content-box');
    var images = document.getElementsByClassName('slider-container__img-box');

    prevBtn.addEventListener('click', stepPrev);
    nextBtn.addEventListener('click', stepNext);

    var position = 0;

    function stepPrev() {
      position = Math.min(position + widthOneCount * count, 0);
      contentBox.style.marginLeft = position + 'px';
    }

    function stepNext() {
      position = Math.max(position - widthOneCount * count, -widthOneCount * (images.length - count));
      contentBox.style.marginLeft = position + 'px';
    }


  }

  window.run = runTask_1;
})();