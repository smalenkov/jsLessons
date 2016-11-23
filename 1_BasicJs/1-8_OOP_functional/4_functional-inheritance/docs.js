;(function () {

  // Пример 1

  function runDoc_1() {

    function Machine(power) {
      this._power = power;
      this._enabled = false; // Внутреннее свойство и перед ним ставится «_»

      this.enable = function() {
        this._enabled = true;
      };

      this.disable = function() {
        this._enabled = false;
      };
    }

    function CoffeeMachine(power) {
      Machine.apply(this, arguments); // отнаследовать

      var waterAmount = 0;

      this.setWaterAmount = function(amount) {
        waterAmount = amount;
      };

      this.getWaterAmount = function() {
        return waterAmount;
      };

      this.run = function () {
        document.write(this._power);
        document.write('<br> Поехали!');
      };

      var parentEnable = this.enable;

      this.enable = function() {
        parentEnable();
        this.run();
      };

    }

    var coffeeMachine = new CoffeeMachine(10000);
    coffeeMachine.run();

    coffeeMachine.enable();
    coffeeMachine.setWaterAmount(120);
    coffeeMachine.disable();

    document.write('<br>' + coffeeMachine.getWaterAmount());

  }


  // Задание 1

  function runTask_1() {

    function Machine(power) {
      this._power = power;
      this._enabled = false; // Внутреннее свойство и перед ним ставится «_»

      this.enable = function() {
        this._enabled = true;
      };

      this.disable = function() {
        this._enabled = false;
      };
    }

    function CoffeeMachine(power) {
      Machine.apply(this, arguments); // отнаследовать

      var waterAmount = 0;

      this.setWaterAmount = function(amount) {
        waterAmount = amount;
      };

      this.getWaterAmount = function() {
        return waterAmount;
      };

      function onReady() {
        alert('Кофе готов!');
      }

      this.run = function () {
        if (!this._enabled) {
          throw new Error('Сначала включии ее :)');
        }

        setTimeout(onReady, 1000);
      };


    }

    var coffeeMachine = new CoffeeMachine(10000);
    //coffeeMachine.run();

    var coffeeMachine2 = new CoffeeMachine(10000);
    coffeeMachine2.enable();
    coffeeMachine2.run(); // ...Кофе готов!

  }

  window.run = runTask_1;
})();