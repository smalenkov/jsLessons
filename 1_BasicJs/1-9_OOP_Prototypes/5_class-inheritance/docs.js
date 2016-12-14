;(function () {

  // Пример 1

  function runDoc_1() {

    /*
     * Class Animal
     */
    function Animal(name) {
      this.name = name;
      this.speed = 0;
    }

    Animal.prototype.run = function(speed) {
      this.speed += speed;
      alert(this.name + ' бежит, скорость ' + this.speed);
    };

    Animal.prototype.stop = function() {
      this.speed = 0;
      alert(this.name + ' стоит');
    };

    /*
     * Class Bird inherit from Animal.prototype
     */
    function Bird(name) {
      this.name = name;
      this.speed = 0;
    }

    Bird.prototype = Object.create(Animal.prototype); // Наследуем от Animal

    Bird.prototype.fly = function() {
      this.speed++;
      alert(this.name + ' Взлетает');
    };

    var eagle = new Bird('Коршун');
    eagle.run(10);

  }

  window.run = runDoc_1;
})();