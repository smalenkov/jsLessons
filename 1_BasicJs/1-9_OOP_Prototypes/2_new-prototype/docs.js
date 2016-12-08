;(function () {

  // Пример 1

  function runDoc_1() {

    var animal = {
      eats: true
    };

    function Rabbit(name) {
      this.name = name;
    }

    var rabbit = new Rabbit("Кроль"); //  rabbit.__proto__ == animal

    var rabbit2 = new rabbit.constructor("Крольчиха");

    Rabbit.prototype = animal;

    document.write((Rabbit.prototype.constructor == animal) + '<br>');
    document.write(rabbit2.name + '<br>');

  }


  // Задача 1

  function runTask_1() {

    var options = {
      width: 100
      //height: 230
    };

    function Menu(options) {
      var opt = Object.create(options);
      this.width = opt.width || 300;
      this.height = opt.height || 600;
    }

    var menu = new Menu(options);

    alert(menu.width);
    alert(menu.height);

  }


  // Задача 2

  function runTask_2() {

    function Rabbit(name) {
      this.name = name;
    }

    Rabbit.prototype.sayHi = function() {
      alert(this.name);
    };

    var rabbit = new Rabbit("Rabbit");

    rabbit.sayHi();
    Rabbit.prototype.sayHi();
    rabbit.__proto__.sayHi();
    Object.getPrototypeOf(rabbit).sayHi();

  }


  // Задача 3

  function runTask_3() {

    function Obj(user) {
      this.name = user.name;
      this.lastName = user.lastName;
    }

    var personOne = {
      name: 'Василий',
      lastName: 'Пупкин'
    };

    var personTwo = {
      name: 'Семен',
      lastName: 'Петров'
    };

    var obj = new Obj(personOne);

    var obj2 = new obj.constructor(personTwo);
    document.write(obj2.name + '<br>' + obj2.lastName)

  }

  window.run = runTask_3;
})();