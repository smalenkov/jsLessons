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
  }

  window.run = runDoc_3;
})();
