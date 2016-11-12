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

  window.run = runTask_1;
})();