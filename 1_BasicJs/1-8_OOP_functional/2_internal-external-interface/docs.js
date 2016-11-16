;(function () {

  // Пример 1

  function runDoc_1() {

    function Auto(mark, horsePower) {
      this.mark = mark; // лошадиные силы
      this.horsePower = horsePower; // лошадиные силы
      this.speed = 0; // лошадиные силы

      document.write( 'Создана машина марки ' +  this.mark + '  мощностью: ' + this.horsePower + ' л.с.' );
    }

    // создать авто
    var auto = new Auto('BMW', 116);

    auto.speed = 140;
    document.write(' Скорость авто ' + auto.speed);

  }

  window.run = runDoc_1;
})();