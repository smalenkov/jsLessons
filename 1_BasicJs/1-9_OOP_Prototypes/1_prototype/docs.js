;(function () {

  // Пример 1

  function runDoc_1() {

    var animal = {
      eats: true
    };

    var wolf = {
      kind: 'predator',
      color: 'gray',
      __proto__: animal
    };

    document.write('<h1>' + wolf.eats + '</h1>');

    document.write('<h4>Свойства и методы только объекта wolf</h4>');
    for (var key in wolf) {
      if (wolf.hasOwnProperty(key)) // проверяет принадлежность свойства объекту
      document.write(key + ': ' + wolf[key] + '<br>')
    }

    document.write('<h4>Свойства и методы объекта wolf + отнаследованные</h4>');
    for (var key in wolf) {
      document.write(key + ': ' + wolf[key] + '<br>')
    }
  }

   // Задание 1

  function runTask_1() {

    var animal = {
      eat: function() {
        this.full = true;
      }
    };

    var rabbit = {
      __proto__: animal
    };

    rabbit.eat(); // установит для rabbit
    document.write(rabbit.full);

  }

  function runTask_2() {

    var head = {
      glasses: 1
    };

    var table = {
      pen: 3,
      __proto__: head
    };

    var bed = {
      sheet: 1,
      pillow: 2,
      __proto__: table
    };

    var pockets = {
      money: 2000,
      __proto__: bed
    };

    document.write(pockets.pen + "<br>");
    document.write(bed.glasses + "<br>");
    document.write(table.money);

  }

  window.run = runTask_2;
})();