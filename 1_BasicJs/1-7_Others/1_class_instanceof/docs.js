;(function() {

  // Пример 1

  function runDoc_1() {
    alert( typeof 1 );         // 'number'
    alert( typeof true );      // 'boolean'
    alert( typeof "Текст" );   // 'string'
    alert( typeof undefined ); // 'undefined'
    alert( typeof null );      // 'object' (ошибка в языке)
    alert( typeof alert );     // 'function'
  }

  // Пример 1
  // все объекты, включая массивы и даты для typeof – на одно лицо, они имеют один тип 'object':

  function runDoc_2() {
    alert( typeof {} );         // 'object'
    alert( typeof [] );         // 'object'
    alert( typeof new Date );   // 'object'
  }

  // Пример 3

  function runDoc_3() {
    var toString = {}.toString;

    var arr = [1, 2, 3, 4];
    alert(toString.call(arr));

    var date = new Date;
    alert(toString.call(date));

    var obj = {name: "Petr"};
    alert(toString.call(obj));
    alert(obj.toString()); // То же, что и выше

    alert( {}.toString.call(123) ); // [object Number]
    alert( {}.toString.call("строка") ); // [object String]
  }

  // Пример 4

  function runDoc_4() {
    function getClass(obj) {
      return {}.toString.call(obj).slice(8, -1);
    }

    alert( getClass(new Date) ); // Date
    alert( getClass([1, 2, 3]) ); // Array
  }

  // Пример 5
  // Проверка на массив

  function runDoc_5() {
    alert( Array.isArray([1,2,3]) ); // true
    alert( Array.isArray("not array")); // false
  }

  // Пример 6
  // Оператор instanceof позволяет проверить, создан ли объект данной функцией, причём работает для любых функций – как встроенных, так и наших.

  function runDoc_6() {
    function User() {}
    var user = new User();
    alert( user instanceof User ); // true
  }

  // Пример 7
  // Утиная типизация
  // Смысл утиной типизации – в проверке необходимых методов и свойств.
  // Например, мы можем проверить, что объект – массив, не вызывая Array.isArray, а просто уточнив наличие важного для нас метода, например splice:

  function runDoc_7() {
    var something = [1, 2, 3];

    if (something.splice) {
      alert( 'Это утка! То есть, массив!' );
    }

    var x = new Date();

    if (x.getTime) {
      alert( 'Дата!' );
      alert( x.getTime() ); // работаем с датой
    }
  }

  // Пример 8
  // Полиморфная функция

  function runDoc_8() {
    function sayHi(who) {

      if (Array.isArray(who)) {
        who.forEach(sayHi);
      } else {
        alert( 'Привет, ' + who );
      }
    }

    // Вызов с примитивным аргументом
    sayHi("Вася"); // Привет, Вася

    // Вызов с массивом
    sayHi(["Саша", "Петя"]); // Привет, Саша... Петя

    // Вызов с вложенными массивами - тоже работает!
    sayHi(["Саша", "Петя", ["Маша", "Юля"]]); // Привет Саша..Петя..Маша..Юля
  }

  // Задание 1

  function runTask_1() {
    function formatDate(date) {
      var options = {
        year: '2-digit',
        month: 'numeric',
        day: 'numeric'
      };

      function returnDate() {
        return date.toLocaleString('ru', options);
      }

      if (typeof date == 'number') {
        date = new Date(date*1000);
        return returnDate();
      } else {
        if(Array.isArray(date)) {
          date = new Date(date[0], date[1], date[2]);
          return returnDate();
        } else {
          date = new Date(date);
          return returnDate();
        }
      }
    }

    alert( formatDate('2011-10-02') ); // 02.10.11
    alert( formatDate(1234567890) ); // 14.02.09
    alert( formatDate([2014, 0, 1]) ); // 01.01.14
    alert( formatDate(new Date(2014, 0, 1)) ); // 01.01.14
  }

  window.run = runTask_1;
})();
