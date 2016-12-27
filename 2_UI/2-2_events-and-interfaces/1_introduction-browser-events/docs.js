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
      this.value = 'Запустилось';
      alert('Hi!');
    }

    elem.onclick = sayHi;

  }


  // addEventListener and removeEventListener

  function runDoc_3() {

    var elem = document.getElementById('rabbits-button');
    elem.addEventListener("click", sayHi);
    elem.addEventListener("mouseover", sayThinks);

    function sayHi() {
      alert('Hiiii!');
    }

    function sayThinks() {
      this.value = "Запустилось!";
      alert('Think you!');
    }

  }

  window.run = runDoc_3;
})();