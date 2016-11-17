;(function () {

  // Пример 1

  function runDoc_1() {

    // mark, horsePower — приватные (локальные) свойства. Доступны только внутри
    function Auto(mark, horsePower) {
      this.speed = 0; // скорость

      var MAX_SPEED = 240;

      // приватные методы (вложенные функции)
      // рассчет времени разгона
      function getSpeedTime() {
        return 2400;
      }

      // приватные методы (вложенные функции)
      // по достижению нужной скорости
      function onReady() {
        alert('Ой-ой притормози, чувачок');
      }

      // go — публичный метод (доступен из вне)
      this.go = function() {
        setTimeout(onReady, getSpeedTime())
      };

      document.write( 'Создана машина марки ' +  mark + '  мощностью: ' + horsePower + ' л.с.' );
    }

    // создать авто
    var auto = new Auto('BMW', 116);

    auto.speed = 140;
    document.write(' Скорость авто ' + auto.speed);
    auto.speed = 140;

    auto.go();

  }

  window.run = runDoc_1;
})();