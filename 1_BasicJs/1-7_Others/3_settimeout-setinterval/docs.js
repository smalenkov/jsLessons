;(function () {

  // Пример 1

  function runDoc_1() {
    function func() {
      alert('Привет');
    }

    setTimeout(func, 1000);
    alert("hell");
  }


  // Пример 2

  function runDoc_2() {
    function func() {
      var timerId = setTimeout(function () {
        alert(3)
      }, 1000);
      alert(timerId); // число - идентификатор таймера

      clearTimeout(timerId);
      alert(timerId); // всё ещё число, оно не обнуляется после отмены
    }

    func();
  }

  // Пример 3

  function runDoc_3() {
    for (var i = 0; i < 10; i++) {
      setTimeout(function () {
        alert(i);
      }, i * 1000)
    }
  }


  // Пример 4

  function runDoc_4() {
    for (var i = 0; i < 2; i++) {
      var timer = setTimeout(function () {
        alert(i);
      }, i * 100);
      alert(timer);
      if (timer == 1) {
        clearTimeout(timer); // Обнулит первый таймер и не выведет результат для первой итерации цикла
      }
    }
  }


  // Пример 5

  function runDoc_5() {
    var timerId = setInterval(function () {
      document.write("Hello ")
    }, 1000);
    setTimeout(function () {
      clearInterval(timerId);
    }, 6000);
  }


  // Пример 6
  // Рекурсивный setTimeout

  function runDoc_6() {
    function go() {
      document.write('go ');
      //setTimeout(go, 1000);
    }

    var timerId = setTimeout(go, 3000)
  }


  // Задание 1

  function runTask_1() {
    function printNumberInterval() {
      var i = 1;
      var timerId = setTimeout(function go() {
        console.log(i);
        timerId = setTimeout(go, 100);
        if (i == 20) clearTimeout(timerId);
        i++;
      }, 100);
    }

    var goButton = document.getElementById("goButton");
    goButton.addEventListener("click", printNumberInterval);
    //printNumberInterval();
  }


  // Задание 3

  function runTask_3() {
    setTimeout(function () {
      alert(i);
    }, 100);

    var i;

    function hardWork() {
      // время выполнения этого кода >100 мс, сам код неважен
      for (i = 0; i < 1e8; i++) hardWork[i % 2] = i;
    }

    hardWork();
  }


  // Задание 4

  function runTask_4() {
    var i;
    var timer = setInterval(function () { // планируем setInterval каждые 10 мс
      i++;
    }, 300);

    setTimeout(function () { // через 50 мс - отмена setInterval
      clearInterval(timer);
      alert(i); // (*)
    }, 2000);

    // и запускаем тяжёлую функцию
    function f() {
      // точное время выполнения не играет роли
      // здесь оно заведомо больше 100 мс
      for (i = 0; i < 1e8; i++) f[i % 2] = i;
    }

    f();
  }


  // Задание 5

  function runTask_5() {

    function Runner() {
      this.steps = 0;

      this.step = function () {
        this.doSomethingHeavy();
        this.steps++;
      };

      function fib(n) {
        return n <= 1 ? n : fib(n - 1) + fib(n - 2);
      }

      this.doSomethingHeavy = function () {
        for (var i = 0; i < 25; i++) {
          this[i] = fib(i);
        }
      };

    }

    var runner1 = new Runner();
    var runner2 = new Runner();

    // первый?
    setInterval(function () {
      runner1.step();
    }, 10);

    // или второй?
    setTimeout(function go() {
      runner2.step();
      setTimeout(go, 10);
    }, 10);

    setTimeout(function () {
      alert(runner1.steps);
      alert(runner2.steps);
    }, 5000);
  }


  // Задание 6

  function runTask_6() {

    function delay(f, ms) {

      return function () {
        var savedArguments = arguments;

        function runF() {
          f.apply([], savedArguments)
        }

        setTimeout(runF, ms);
      }

    }

    function f(a, b) {
      alert(a + b);
    }

    var f1000 = delay(f, 1000);
    f1000(2, 2);

    var f2000 = delay(f, 2000);
    f2000(10, 3);

  }

  window.run = runTask_6;
})();