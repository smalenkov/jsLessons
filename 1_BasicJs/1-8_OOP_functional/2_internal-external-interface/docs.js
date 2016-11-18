;(function () {

  // Пример 1

  function runDoc_1() {

    // mark, horsePower — приватные (локальные) свойства. Доступны только внутри
    function Auto(mark, horsePower) {
      this.speed = 0; // скорость

      // Ускорение авто
      var MAX_SPEEDUP = 6;

      // Максимальная скорость
      var MAX_SPEED = 240;

      // приватные методы (вложенные функции)
      // рассчет времени разгона (формула выдуманная)
      function getSpeedTime() {
        console.log(this.speed / MAX_SPEEDUP * horsePower);
        return this.speed / MAX_SPEEDUP * horsePower;
      }

      // приватные методы (вложенные функции)
      // по достижению нужной скорости
      var thisObj = this;

      function onReady() {
        alert('Ой-ой притормози, чувачок! Твоя скорость уже ' + this.speed);
      }


      // go — публичный метод (доступен из вне)
      this.go = function() {
        setTimeout(onReady.bind(this), getSpeedTime.call(this))
      };

      document.write( 'Создана машина марки ' +  mark + '  мощностью: ' + horsePower + ' л.с.' );
    }

    // создать авто
    var auto = new Auto('BMW', 116);

    auto.speed = prompt("Какая скорость?");
    document.write(' Скорость авто ' + auto.speed);

    auto.go();

  }

  window.run = runDoc_1;
})();