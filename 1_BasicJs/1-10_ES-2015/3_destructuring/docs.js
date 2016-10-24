// Деструктуризация

function runExample_1() {
  let [name, lastName] = ['Vladimir', 'Smalenkov'];
  alert(name);
  alert(lastName);
}

function runExample_2() {
  let [, ,three , , five] = "Превратим эту строку в массив и запишем в переменные".split(" ");
  alert(three);
  alert(five);
}


function runExample_3() {
  // Если мы хотим получить и последующие значения массива, но не уверены в их числе – можно добавить ещё один параметр, который получит «всё остальное», при помощи оператора "..." («spread», троеточие):
  let [, ,three , , five, ...other] = "Превратим эту строку в массив и запишем в переменные".split(" ");
  alert(three);
  alert(five);

  for (let i = 0; i < other.length; i++) {
    document.write(other[i] + '<br>');
  }
}

function runExample_4() {
  // значения по умолчанию
  let [firstName="Гость", lastName="Анонимный"] = [];

  alert(firstName); // Гость
  alert(lastName);  // Анонимный
}

function runExample_5() {
  // Деструктуризация объекта
  let opt = {
    name: 'Vladimir',
    lastName: 'Smalenkov',
    age: 28
  }

  let {name, lastName, age} = opt;

  alert(name); // Гость
  alert(age);  // Анонимный

  // Если хочется присвоить свойство объекта в переменную с другим именем, например, чтобы свойство options.width пошло в переменную w, то можно указать соответствие через двоеточие, вот так:

  let {name: n, lastName: ln, age: a} = opt;
  document.write(ln + '<br>' + age);
}

function runExample_6() {
  // Деструктуризация объекта
  let opt = {
    name: 'Vladimir',
    lastName: 'Smalenkov',
    age: 28
  }

  let {name, lastName, age} = opt;

  alert(name); // Гость
  alert(age);  // Анонимный

  // Если хочется присвоить свойство объекта в переменную с другим именем, например, чтобы свойство options.width пошло в переменную w, то можно указать соответствие через двоеточие, вот так:
}
