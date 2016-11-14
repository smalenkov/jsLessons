;(function () {

  // Пример 1

  function runDoc_1() {

    function User(name) {

      this.sayHi = function() {
        alert( "Привет, я " + name );
      };

    }

    var vasya = new User("Вася"); // создали пользователя
    vasya.sayHi(); // пользователь умеет говорить "Привет"

  }

  window.run = runDoc_1;
})();