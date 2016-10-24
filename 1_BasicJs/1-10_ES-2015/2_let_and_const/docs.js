function runExample_1() {
  var apples = 5;

  if (true) {
    var apples = 10;

    alert(apples); // 10 (внутри блока)
  }

  alert(apples); // 10 (снаружи блока то же самое)
}

function runExample_2() {
  var apples = 5;

  if (true) {
    let apples = 10;

    alert(apples); // 10 (внутри блока)
  }

  alert(apples); // 10 (снаружи блока то же самое)
}

function runExample_3() {
  alert(apples);
  var apples = 5;

  alert(potatos); // Хуй! :)
  let potatos = 3; // let видна только после обьявления
}

function runExample_4() {
  function makeArmy() {

    let shooters = [];

    for (let i = 0; i < 10; i++) {
      shooters.push(function() {
        alert(i); // выводит свой номер
      });
    }

    return shooters;
  }

  var army = makeArmy();

  army[5](); // 5
}

function runExample_5() {
}
