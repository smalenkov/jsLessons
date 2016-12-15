;(function () {

  // Пример 1

  function runDoc_1() {

    function Rabbit() {}

    // создаём объект
    var rabbit = new Rabbit();

    // проверяем -- этот объект создан Rabbit?
    alert(rabbit instanceof Rabbit); // true, верно

  }


  // Задание 2

  function runTask_1() {

    function A() {}

    function B() {}

    A.prototype = B.prototype = {};

    var a = new A();

    alert(a instanceof B); // true

  }


  // Задание 3

  function runTask_2() {

    function Animal() {}

    function Rabbit() {}
    Rabbit.prototype = Object.create(Animal.prototype);

    var rabbit = new Rabbit();

    alert(rabbit instanceof Rabbit); // true
    alert(rabbit instanceof Animal); // true
    alert(rabbit instanceof Object); // true

  }

  window.run = runTask_2;
})();