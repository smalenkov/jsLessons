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
      return new Array(parts+1).join(this);
    };

    var repeater = 'Ля-ля-фа'.repeat(3);
    document.write(repeater);

  }


  // Пример 4 (each)

  function runDoc_4() {

    Object.prototype.each = function(f) {
      for (var prop in this) {
        value = this[prop];
        if (this.hasOwnProperty(prop)) {
          f.call(value, prop);
        }
      }
    };

    var user = {
      name: "Василий",
      age: 32
    };

    user.each(function(prop) {
      //document.write(one);
      //document.write(two);
      document.write(prop + ': ' + this + '<br>');
    })

  }

  window.run = runDoc_4;
})();