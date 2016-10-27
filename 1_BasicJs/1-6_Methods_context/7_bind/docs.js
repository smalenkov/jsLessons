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


  // Карринг

  function runDoc_5() {

    function mul(a, b, c) {
      return a * b + c;
    }

    // double умножает только на два
    var double = mul.bind(null, 2, 3); // контекст фиксируем null, он не используется

    alert(double(3)); // = mul(2, 3, 3) = 9
    alert(double(4)); // = mul(2, 3, 4) = 10
    alert(double(5)); // = mul(2, 3, 5) = 11
  }


  function runTask_1() {

    function f() {
      alert(this);
    }

    var user = {
      g: f.bind("Hello")
    };

    var p = f.bind("hello");

    p();
    user.g();
  }

  function runTask_2() {

    function f() {
      alert(this.name);
    }

    f = f.bind({name: "Вася"}).bind({name: "Петя"});

    // f = bind(f, {name: "Вася"} );
    // f = bind(f, {name: "Петя"} );

    f(); // Вася
  }

  function runTask_3() {

    function sayHi() {
      alert(this.name);
    }
    sayHi.test = 5;
    alert(sayHi.test); // 5

    var bound = sayHi.bind({
      name: "Вася"
    });

    alert(bound.test); // Ничего не выведет т.к. у функция обертка самостоятельный объект (у нее нет свойств)
  }

  // Задача 4

  function runTask_4() {

    "use strict";

    function ask(question, answer, ok, fail) {
      var result = prompt(question, '');
      if (result.toLowerCase() == answer.toLowerCase()) ok();
      else fail();
    }

    var user = {
      login: 'Василий',
      password: '12345',

      loginOk: function() {
        alert(this.login + ' вошёл в сайт');
      },

      loginFail: function() {
        alert(this.login + ': ошибка входа');
      },

      checkPassword: function() {
        ask("Ваш пароль?", this.password, this.loginOk.bind(this), this.loginFail.bind(this));
      }
    };

    user.checkPassword();
  }


  // Задача 5

  function runTask_5() {

    "use strict";

    function ask(question, answer, ok, fail) {
      var result = prompt(question, '');
      if (result.toLowerCase() == answer.toLowerCase()) ok();
      else fail();
    }

    var user = {
      login: 'Василий',
      password: '12345',

      // метод для вызова из ask
      loginDone: function(result) {
        alert(this.login + (result ? ' вошёл в сайт' : ' ошибка входа'));
      },

      checkPassword: function() {
        ask("Ваш пароль?", this.password, this.loginDone.bind(this, true), this.loginDone.bind(this, false));
      }
    };

    var vasya = user;
    user = null;
    vasya.checkPassword();
  }

  window.run = runTask_5;
})();
