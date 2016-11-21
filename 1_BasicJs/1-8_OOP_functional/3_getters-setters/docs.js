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

  window.run = runDoc_1;
})();