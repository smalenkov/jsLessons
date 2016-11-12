;(function() {


  function runTask_1() {
    function toArr(arr) {

      var arrFunc = [];

      for (var i=0; i<arr.length; i++) {

        var func = (function (arg) {
          return function () {
            return arr[arg];
          }
        })(i);

        arrFunc.push(func);

      }
      return arrFunc;
      // alert(arrFunc);
    }

    //document.write(toArr([5,4,6,7]));
    document.write(toArr([5,4,6,7])[1]());
  }

  window.run = runTask_1;
})();