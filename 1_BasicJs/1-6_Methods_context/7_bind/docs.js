;(function() {

  function runDoc_1() {
    var user = {
      firstName: "Вася",
      sayHi: function() {
          alert(this.firstName);
      }
    };

    setTimeout(function () {
      user.sayHi(); }, 1000); // undefined (не Вася!)
  }

  function runDoc_2() {

    function bind(func, context) {
      return function() { // (*)
        return func.apply(context, arguments);
      };
    }

    var user = {
      name: "Петр",
      lastName: "Семенов"
    };

    function alertFio(otch) {
      alert(this.name + " " + this.lastName + " " + otch);
    }

    bind(alertFio, user)("Васильевич");
  }

  function bind(func, context) {
    return function() {
      return func.apply(context, arguments);
    };
  }

  function runDoc_3() {


    var user = {
      firstName: "Вася",
      sayHi: function() {
        alert(this.firstName);
      }
    };

    setTimeout(bind(user.sayHi, user), 1000);

  }

  function runDoc_4() {

    var user = {
      firstName: "Вася",
      sayHi: function(who) { // здесь у sayHi есть один аргумент
        alert(this.firstName + ": Привет, " + who);
      }
    };

    // var sayHi = bind(user.sayHi, user);
    var sayHi = user.sayHi.bind(user); // встроенный bind

    // контекст Вася, а аргумент передаётся "как есть"
    sayHi("Петя"); // Вася: Привет, Петя
    sayHi("Маша"); // Вася: Привет, Маша
  }

  window.run = runDoc_4;
})();
