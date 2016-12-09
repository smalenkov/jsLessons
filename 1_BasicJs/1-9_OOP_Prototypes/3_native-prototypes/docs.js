;(function () {

  // Пример 1

  function runDoc_1() {

    var obj = {};

    document.write(obj);
    document.write(obj.__proto__.toString);

  }


  // Пример 2

  function runDoc_2() {

    function showList() {
      alert( [].join.call(arguments, " - ") );
    }

    showList("Вася", "Паша", "Маша"); // Вася - Паша - Маша

  }


  // Пример 3 (repeater)

  function runDoc_3() {

    String.prototype.repeat = function(parts) {
      return 'Повторитель ' + this;
    };

    var repeater = 'Ля-ля-фа'.repeat();
    document.write(repeater);

  }

  window.run = runDoc_3;
})();