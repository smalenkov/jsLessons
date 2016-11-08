;(function() {

  // Пример 1

  function runDoc_1() {
    var numbers = "[0, 1, 2, 3]";

    numbers = JSON.parse(numbers);

    alert( numbers[1] ); // 1
  }

  window.run = runDoc_1;
})();
