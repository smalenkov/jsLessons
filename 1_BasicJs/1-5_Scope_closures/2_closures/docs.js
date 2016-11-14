;(function() {


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

  function runTask_4() {

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

    // создать другой счётчик, он будет независим от первого
    var counter2 = makeCounter();
    alert( counter2() ); // 1
  }


  window.run = runTask_3;
})();