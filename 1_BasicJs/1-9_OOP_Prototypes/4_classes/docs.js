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
      this.waterAmount = 0;

      this.WATER_HEAT_CAPACITY = 4200;

      this.getTimeToBoil = function() {
        return this.waterAmount * this.WATER_HEAT_CAPACITY * 80 / this._power;
      };
    }

    CoffeeMachine.prototype.run = function() {
      setTimeout(function() {
        alert('Кофе готов!');
      }, this.getTimeToBoil());
    };

    CoffeeMachine.prototype.setWaterAmount = function(amount) {
      this.waterAmount = amount;
    };

    var coffeeMachine = new CoffeeMachine(10000);
    coffeeMachine.setWaterAmount(50);
    coffeeMachine.run();

  }

  window.run = runTask_1;
})();