;(function () {

  // Пример 1

  function runDoc_1() {

    function Animal(name) {
      this._name = name; // _name приватное (защищенное) свойство
      this.speed = 0
    }

    Animal.prototype.run = function(speed) {
      this.speed += speed;
      document.write(this._name + ' бежит со скоростью ' + this.speed + '<br>');
    };

    Animal.prototype.stop = function() {
      this.speed = 0;
      document.write(this._name + ' остановился и его скорость = ' + this.speed + '<br>');
    };

    var beast = new Animal('Животное');

    alert('Начальная скорость = ' + beast.speed); // 0, свойство взято из прототипа
    beast.run(5); // Зверь бежит, скорость 5
    beast.run(5); // Зверь бежит, скорость 10
    beast.stop(); // Зверь стоит

  }


  // Задание 1

  function runTask_1() {

    function CoffeeMachine(power) {
      this._power = power;
      this._waterAmount = 0;
    }

    CoffeeMachine.prototype._getTimeToBoil = function() {
      return this._waterAmount * this.WATER_HEAT_CAPACITY * 80 / this._power;
    };

    CoffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200;

    CoffeeMachine.prototype.run = function() {
      setTimeout(function() {
        alert('Кофе готов!');
      }, this._getTimeToBoil());
    };

    CoffeeMachine.prototype.setWaterAmount = function(amount) {
      this._waterAmount = amount;
    };

    var coffeeMachine = new CoffeeMachine(10000);
    coffeeMachine.setWaterAmount(50);
    coffeeMachine.run();

  }


  // Задание 2

  function runTask_2() {

    function Hamster() {
      this.food = [];
    }

    Hamster.prototype.found = function(something) {
      this.food.push(something);
    };

    // Создаём двух хомяков и кормим первого
    var speedy = new Hamster();
    var lazy = new Hamster();

    speedy.found("яблоко");
    speedy.found("орех");
    lazy.found("морковь");

    alert( speedy.food.length ); // 2
    alert( lazy.food.length ); // 2 (!??)

  }

  window.run = runTask_2;
})();