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


  function runDoc_3() {

    function bind(func, context) {
      return function() {
        return func.apply(context, arguments);
      };
    }

    var user = {
      firstName: "Вася",
      sayHi: function() {
        alert(this.firstName);
      }
    };

    setTimeout(bind(user.sayHi, user), 1000);
  }

  window.run = runDoc_3;
})();
