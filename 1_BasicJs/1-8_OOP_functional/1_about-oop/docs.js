;(function () {

  // Пример 1

  function runDoc_1() {

    function User(name) {

      this.sayHi = function() {
        alert( "Привет, я " + name );
      };

    }

    var vasya = new User("Игорь"); // создали пользователя
    var petr = new User("Петр"); // создали пользователя
    var anton = new User("Антон"); // создали пользователя
    vasya.sayHi(); // пользователь умеет говорить "Привет"
    petr.sayHi();
    anton.sayHi();

  }

  window.run = runDoc_1;
})();