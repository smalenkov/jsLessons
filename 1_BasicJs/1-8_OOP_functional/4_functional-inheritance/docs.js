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
      var timerId;

      this.setWaterAmount = function(amount) {
        waterAmount = amount;
      };

      this.getWaterAmount = function() {
        return waterAmount;
      };

      function onReady() {
        alert('Кофе готов!');
      }

      var parentDisable = this.disable;

      this.disable = function() {
        parentDisable();
        clearTimeout(timerId);
      };

      this.run = function () {
        if (!this._enabled) {
          throw new Error('Сначала включии ее :)');
        }

        timerId = setTimeout(onReady, 1000);
      };

    }

    var coffeeMachine = new CoffeeMachine(10000);
    //coffeeMachine.run();

    var coffeeMachine2 = new CoffeeMachine(10000);
    coffeeMachine2.enable();
    coffeeMachine2.run();
    coffeeMachine2.disable(); // остановит работу, ничего не выведет

  }


  // Задание 2

  function runTask_2() {

    function Machine(power) {
      this._power = power;
      this._enabled = false; // Внутреннее свойство и перед ним ставится «_»

      this.enable = function () {
        this._enabled = true;
      };

      this.disable = function () {
        this._enabled = false;
      };
    }

    function Fridge(power) {
      Machine.apply(this, arguments);

      var food = [];

      var maxProducts = function () {
        return power / 100;
      };

      this.addFood = function(item) {
        if (!this._enabled) {
          throw new Error('Холодильник не включен')
        }
        if ((food.length + arguments.length) <= maxProducts()) {
          [].push.apply(food, arguments);
        } else {
          throw new Error('Столько продуктов не влезет')
        }
      };

      this.getFood = function() {
        return food.slice();
      };
    }

    var fridge = new Fridge(600);
    fridge.enable();
    fridge.addFood('Колбаска', 'Майонез');
    fridge.addFood('Сырок');
    fridge.addFood('Сливки', 'Сосиски', 'Молоко');
    var inFridle = fridge.getFood();

    console.log(inFridle);

    // добавление элементов не влияет на еду в холодильнике
    inFridle.push("вилка", "ложка");

    alert( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье

  }

  window.run = runTask_2;
})();