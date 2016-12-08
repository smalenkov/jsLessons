;(function () {

  // Пример 1

  function runDoc_1() {

    var animal = {
      eats: true
    };

    function Rabbit(name) {
      this.name = name;
      this.__proto__ = animal;
    }

    var rabbit = new Rabbit("Кроль");

    alert(rabbit.eats); // true, из прототипа

  }

  window.run = runDoc_1;
})();