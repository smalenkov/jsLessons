;(function() {
  function runDoc_1() {
    function showFullName() {
      alert(this.firstName + " " + this.lastName);
    }

    function showFullNameApply(one, two) {
      alert(this[one] + " " + this[two]);
    }
    var user = {
      firstName: `Владимир`,
      lastName: `Смаленков`
    };
    var user2 = {
      firstName: `Петр`,
      lastName: `Петров`
    };
    showFullName.call(user2);

    // apply получает массив вместо списка (как в call)
    showFullNameApply.apply(user2, ['lastName', 'firstName']);
  }


  // Задача 1

  function runTask_1() {
    function sum(arr) {
      return arr.reduce(function(a, b) {
        return a + b;
      }, 10);
    }

    function sumArg() {
      var args = [].slice.call(arguments);
      return args.reduce(function(a, b) {
        return a + b;
      });
    }

  // alert( sum([1, 2, 3]) ); // 16 (=11+2+3)
  alert(sumArg(1, 2, 3)); // 16 (=11+2+3)
  }


  // Задача 2

  function runTask_2() {
    function applyAll() {
      var argsAll = [].slice.call(arguments);
      var func = argsAll[0];
      var args = argsAll.slice(1);
      return func.apply(obj, args);
    }

    function applyAllshort(func) {
      return func.apply(this, [].slice.call(arguments, 1));
    }

    function generate() {
      var max = Math.max.apply([], arguments);
      return this.text + ' ' + max;
    }

    var obj = {
      text: 'Максимальное число'
    };

      // Применить Math.max к аргументам 2, -2, 3
      alert(applyAllshort(Math.max, 2, -2, 3)); // 3

      // Применить Math.min к аргументам 2, -2, 3
      alert(applyAll(Math.min, 2, -2, 3)); // -2

      alert(applyAll(generate, 2, -2, 3, 7, 78, 3)); // -2
  }

  window.run = runTask_2;
})();
