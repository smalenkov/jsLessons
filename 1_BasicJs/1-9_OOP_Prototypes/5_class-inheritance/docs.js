;(function () {

  // Пример 1

  function runDoc_1() {

    /*
     * Create class Animal
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
     * Create class Bird
     * Bird inherit from Animal.prototype
     */
    function Bird(name, maxElevation) {
      Animal.apply(this, arguments);
      this.maxElevation = maxElevation;
    }

    Bird.prototype = Object.create(Animal.prototype); // inherit from Animal

    Bird.prototype.fly = function() {
      this.speed++;
      document.write(this.name + ' Взлетает <br> Максимальная высота: ' + this.maxElevation);
    };

    Bird.prototype.run = function() {
      Animal.prototype.run.apply(this, arguments);
      //alert(this.name + ' не умеет бегать :(')
    };

    // Create objects
    var eagle = new Bird('Коршун', 800);
    eagle.run(10);
    eagle.fly();

    var fox = new Animal('Плутовка');
    fox.run(18);
    fox.fly();

  }


  // Задача 1

  function runTask_1() {

    function Animal(name) {
      this.name = name;
    }

    Animal.prototype.walk = function() {
      alert( "ходит " + this.name );
    };

    function Rabbit(name) {
      this.name = name;
    }

    Rabbit.prototype = Object.create(Animal.prototype);

    Rabbit.prototype.walk = function() {
      alert( "прыгает! и ходит: " + this.name );
    };

    var rabbit = new Rabbit('Кроль');
    rabbit.walk();

    var wolf = new Animal('Серый');
    wolf.walk();

  }


  // Задача 2

  function runTask_2() {

    function Animal(name) {
      this.name = name;

      //this.walk = function() {
      //  alert( "ходит " + this.name );
      //};

    }

    Animal.prototype.walk = function() {
        alert("ходит " + this.name);
      };

    function Rabbit(name) {
      Animal.apply(this, arguments);
    }
    Rabbit.prototype = Object.create(Animal.prototype);

    Rabbit.prototype.walk = function() {
      alert( "прыгает " + this.name );
    };

    var rabbit = new Rabbit("Кроль");
    rabbit.walk();

  }


  // Задача 3

  function runTask_3() {

    function Clock(options) {

      this._template = options.template;
      this._timer = undefined;

    }

    Clock.prototype._render = function() {
      var date = new Date();

      var hours = date.getHours();
      if (hours < 10) hours = '0' + hours;

      var min = date.getMinutes();
      if (min < 10) min = '0' + min;

      var sec = date.getSeconds();
      if (sec < 10) sec = '0' + sec;

      var output = this._template.replace('h', hours).replace('m', min).replace('s', sec);

      console.log(output);
    };

    Clock.prototype.stop = function() {
      clearInterval(this._timer);
    };

    Clock.prototype.start = function() {
      this._render();
      var cont = this;
      this._timer = setInterval(function() {
        cont._render();
      }, 1000);
    };

    var clock = new Clock({
      template: 'h:m:s'
    });
    clock.start();

  }

  window.run = runTask_3;
})();