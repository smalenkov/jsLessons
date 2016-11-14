;(function() {

  // Задание 1

  function runTask_1() {
    function toArr(arr) {

      var arrFunc = [];

      for (var i=0; i<arr.length; i++) {

        arrFunc.push((function (arg) {
          return function () {
            return arr[arg];
          }
        })(i));

      }
      return arrFunc;
    }

    //document.write(toArr([5,4,6,7]));
    document.write(toArr([5,4,6,7])[1]());
  }


  // Задание 2

  function runTask_2() {
    function toArr(arr) {

      var arrFunc = [];

      for (var i=0; i<arr.length; i++) {
        arg = arr[i]; // так работать не будет
        // у каждой функции в массиве должен быть свой контекст с переменной, хранящей значение элемента массива в замыкании
        // у каждой вызываемой функции должно быть свое замыкание
        arrFunc.push(function () {
          return arg;
        }); // выведет только последний элемент из входящего массива

      }
      return arrFunc;
    }

    document.write(toArr([5,4,6,7]));
    document.write(toArr([5,4,6,7])[1]());
  }


  // Задание 3

  function runTask_3() {
    var currentCount = 1;

    function makeCounter() {
      return function() {
        return currentCount++;
      };
    }

    var counter = makeCounter();
    var counter2 = makeCounter();

    alert( counter() ); // ?
    alert( counter() ); // ?

    alert( counter2() ); // ?
    alert( counter2() ); // ?
  }

  // Задание 4

  function runTask_4() {

    //  1. Все переменные и параметры функций являются свойствами объекта переменных LexicalEnvironment. Каждый запуск функции создает новый такой объект. На верхнем уровне им является «глобальный объект», в браузере – window.
    //  2. При создании функция получает системное свойство [[Scope]], которое ссылается на LexicalEnvironment, в котором она была создана.
    //  3. При вызове функции, куда бы её ни передали в коде – она будет искать переменные сначала у себя, а затем во внешних LexicalEnvironment с места своего «рождения».

    function makeCounter() {
      var currentCount = 1;

      return function() { // (**)
        return currentCount++;
      };
    }

    var counter = makeCounter(); // (*)

    // каждый вызов увеличивает счётчик и возвращает результат
    alert( counter() ); // 1
    alert( counter() ); // 2
    alert( counter() ); // 3

    // создать другой счётчик, он будет независим от первого т.к. при вызове makeCounter() создается новый объект переменных
    var counter2 = makeCounter();
    alert( counter2() ); // 1
  }


  // Задание 5

  function runTask_5() {
    say('Вася'); // Вася, undefined
    var phrase = 'Привет';


    function say(name) {
      alert( name + ", " + phrase );
    }
  }


  window.run = runTask_5;
})();