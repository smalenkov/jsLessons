;(function () {

  // Пример 1

  function runDoc_1() {

    function Animal(name) {
      this.name = name,
      this.speed = 0
    }

    Animal.prototype.run = function(speed) {
      this.speed += speed;
      document.write(this.name + ' бежит со скоростью ' + this.speed + '<br>');
    }

    Animal.prototype.stop = function() {
      this.speed = 0;
      document.write(this.name + ' остановился и его скорость = ' + this.speed + '<br>');
    }

    var beast = new Animal('Животное');

    alert('Начальная скорость = ' + beast.speed); // 0, свойство взято из прототипа
    beast.run(5); // Зверь бежит, скорость 5
    beast.run(5); // Зверь бежит, скорость 10
    beast.stop(); // Зверь стоит

  }

  window.run = runDoc_1;
})();