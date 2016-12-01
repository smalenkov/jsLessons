;(function () {

  // Пример 1

  function runDoc_1() {

    var animal = {
      eats: true
    };
    var wolf = {
      kind: 'predator',
      __proto__: animal
    };

    document.write('<h1>' + wolf.eats + '</h1>');

    for (var key in wolf) {
      if (wolf.hasOwnProperty(key)) // проверяет принадлежность свойства объекту
      document.write(key + ': ' + wolf[key] + '<br>')
    }
  }

  window.run = runDoc_1;
})();