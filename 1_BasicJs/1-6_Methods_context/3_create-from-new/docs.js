function runDoc_1() {
  function Animal(name) {
    this.name = name;
    this.canWalk = true;
  }

  var animal = new Animal("ёжик");
  alert(animal.name);
}

function runDoc_2() {
  function User(firstName, lastName) {
    // вспомогательная переменная
    var phrase = "Привет";

    //  вспомогательная вложенная функция
    function getFullName() {
      return firstName + " " + lastName;
    }

    this.sayHi = function() {
      alert(phrase + ", " + getFullName()); // использование
    };
  }

  var vasya = new User("Вася", "Петров");
  vasya.sayHi(); // Привет, Вася Петров
}


// Задание 1

function runTask_1() {
  function Calculator() {
    this.read = function() {
      this.a = +prompt("Введите a");
      this.b = +prompt("Введите b");
    };
    this.sum = function() {
      return this.a + this.b;
    };
    this.mul = function() {
      return this.a * this.b;
    };
  }
  var calculator = new Calculator();
  calculator.read();

  alert("Сумма=" + calculator.sum());
  alert("Произведение=" + calculator.mul());
}


// Задание 2

/*
Напишите функцию-конструктор Accumulator(startingValue). Объекты, которые она создает, должны хранить текущую сумму и прибавлять к ней то, что вводит посетитель.

Более формально, объект должен:

Хранить текущее значение в своём свойстве value. Начальное значение свойства value ставится конструктором равным startingValue.
Метод read() вызывает prompt, принимает число и прибавляет его к свойству value.
Таким образом, свойство value является текущей суммой всего, что ввел посетитель при вызовах метода read(), с учетом начального значения startingValue.
*/

function runTask_3() {
  function Accumulator(startingValue) {
    this.startingValue = startingValue;
    this.value = this.startingValue;
    this.read = function() {
      this.value += +prompt("Ведите число");
    };
  }
  var accumulator = new Accumulator(8); // начальное значение 1
  accumulator.read(); // прибавит ввод prompt к текущему значению
  accumulator.read(); // прибавит ввод prompt к текущему значению
  alert( accumulator.value ); // выведет текущее значение
}


// Задание 3

function runTask_4() {
  function Calculator() {

    var methods = {
      "-": function(a, b) {
        return a - b;
      },
      "+": function(a, b) {
        return a + b;
      }
    };

    this.calculate = function(str) {
      var strArr = str.split(" ");
      var a = +strArr[0];
      var operator = strArr[1];
      var b = +strArr[2];

      if (!methods[operator] || isNaN(a) || isNaN(b)) {
        return NaN;
      }

      return methods[operator](a, b);
    };

    this.addMethod = function(oper, func) {
      methods[oper] = func;
    };
  }

  var powerCalc = new Calculator;

  powerCalc.addMethod("*", function(a, b) {
    return a * b;
  });
  powerCalc.addMethod("/", function(a, b) {
    return a / b;
  });
  powerCalc.addMethod("**", function(a, b) {
    return Math.pow(a, b);
  });

  var vir = prompt('Введите выражение');
  var result = powerCalc.calculate(vir);
  alert( result );
}
