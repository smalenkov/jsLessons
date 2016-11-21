;(function () {

  // Пример 1

  function runDoc_1() {

    // mark, horsePower — приватные (локальные) свойства. Доступны только внутри
    function Auto(mark, horsePower) {
      var speed = 0; // скорость (приватное свойство, устанавливается через setSpeed)

      // Ускорение авто
      var MAX_SPEEDUP = 6;

      // Максимальная скорость
      var MAX_SPEED = 240;

      var thisObj = this;
      // приватные методы (вложенные функции)
      // рассчет времени разгона (формула выдуманная)
      var getSpeedTime = function() {
        return speed / MAX_SPEEDUP * horsePower;
      };

      this.setSpeed = function (amount) {
        if (amount > MAX_SPEED) {
          throw new Error('Максимальная скорость авто ' + MAX_SPEED)
        }
        if (amount < 0) {
          throw new Error('Скорость должна быть положительной')
        }
        speed = amount;
      };

      this.getSpeed = function () {
        return speed;
      };

      // приватные методы (вложенные функции)
      // по достижению нужной скорости
      var onReady = function onReady() {
        alert('Ой-ой притормози, чувачок! Твоя скорость уже ' + speed);
      };

      // таймер
      var timerId;

      // go — публичный метод (доступен из вне)
      this.go = function() {
        timerId = setTimeout(onReady, getSpeedTime()); // Получаем ID таймера для возможности остановки
      };

      // Функция остановки
      this.stop = function() {
        clearTimeout(timerId);
      };

      document.write( 'Создана машина марки ' +  mark + '  мощностью: ' + horsePower + ' л.с.' );
    }

    // создать авто
    var auto = new Auto('BMW', 116);

    var speed = prompt("Какая скорость?");
    auto.setSpeed(speed);
    document.write(' Скорость авто ' + auto.getSpeed());

    auto.go();
    //auto.stop();

  }

  // Задание 1

  function runTask_1() {

    function User() {

      var firstName;
      var surname;

      this.setFirstName = function(amount) {
        firstName = amount;
      };

      this.setSurname = function(amount) {
        surname = amount;
      };

      this.getFullName = function() {
        return firstName + ' ' + surname;
      };

    }

    var user = new User();
    user.setFirstName('Михаил');
    user.setSurname('Петров');

    var fullname = user.getFullName();
    document.write(fullname);

  }


  // Задание 2

  function runTask_2() {

    function CoffeeMachine(power, capacity) {
      //...
      this.setWaterAmount = function(amount) {
        if (amount < 0) {
          throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
          throw new Error("Нельзя залить воды больше, чем " + capacity);
        }

        waterAmount = amount;
      };

      this.getWaterAmount = function() {
        return waterAmount;
      };

      this.getPower = function() {
        return power;
      }

    }

    var machine = new CoffeeMachine(120, 60);
    var power = machine.getPower();

    document.write(power);

  }


  // Задание 3

  function runTask_3() {

    function CoffeeMachine(power, capacity) {
      var waterAmount = 0;

      var WATER_HEAT_CAPACITY = 4200;

      function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
      }

      this.setWaterAmount = function(amount) {
        if (amount < 0) {
          throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
          throw new Error("Нельзя залить больше, чем " + capacity);
        }

        waterAmount = amount;
      };

      function onReady() {
        alert( 'Кофе готов!' );
      }

      this.addWater = function(amount) {
        waterAmount += amount;
        this.setWaterAmount(waterAmount);
      };

      this.run = function() {
        setTimeout(onReady, getTimeToBoil());
      };

    }

    var coffeeMachine = new CoffeeMachine(100000, 400);
    coffeeMachine.addWater(200);
    coffeeMachine.addWater(100);
    coffeeMachine.addWater(200); // Нельзя залить больше, чем 400
    coffeeMachine.run();

  }

  window.run = runTask_3;
})();