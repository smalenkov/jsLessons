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
      var getSpeedTime = function() {
        return this.speed / MAX_SPEEDUP * horsePower;
      }.bind(this);

      // приватные методы (вложенные функции)
      // по достижению нужной скорости
      var onReady = function onReady() {
        alert('Ой-ой притормози, чувачок! Твоя скорость уже ' + this.speed);
      }.bind(this);


      // go — публичный метод (доступен из вне)
      this.go = function() {
        setTimeout(onReady, getSpeedTime())
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