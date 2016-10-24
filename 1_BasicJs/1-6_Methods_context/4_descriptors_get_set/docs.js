function runDoc_1() {
  "use strict";

  var user = {};

  Object.defineProperty(user, "name", {
    value: "Вася",
    writable: false, // запретить присвоение "user.name="
    configurable: false // запретить удаление "delete user.name"
  });

  alert(user.name);
  // Теперь попытаемся изменить это свойство.

  // в strict mode присвоение "user.name=" вызовет ошибку
  user.name = "Петя";

}

//Дескриптор позволяет задать свойство, которое на самом деле работает как функция. Для этого в нём нужно указать эту функцию в get.

function runDoc_2() {
  var user = {
    firstName: "Вася",
    surname: "Петров"
  };

  Object.defineProperty(user, "fullName", {
    get: function() {
      return this.firstName + ' ' + this.surname;
    }
  });

  alert(user.fullName); // Вася Петров
}

// Также можно указать функцию, которая используется для записи значения, при помощи дескриптора set.

function runDoc_3() {
  var user = {
    firstName: "Вася",
    surname: "Петров"
  };

  Object.defineProperty(user, "fullName", {

    get: function() {
      return this.firstName + ' ' + this.surname;
    },

    set: function(value) {
      var split = value.split(' ');
      this.firstName = split[0];
      this.surname = split[1];
    }
  });

  user.fullName = "Петя Иванов";
  alert(user.firstName); // Петя
  alert(user.surname); // Иванов
}

function runDoc_4() {
  var user = {
    firstName: "Вася",
    surname: "Петров",
    fatherName: "Иоанович",

    get fullName() {
      return this.firstName + ' ' + this.surname;
    },

    get fullName2() {
      return this.firstName + ' ' + this.surname + ' ' + this.fatherName;
    },

    set fullName(value) {
      var split = value.split(' ');
      this.firstName = split[0];
      this.surname = split[1];
    }
  };

  Object.defineProperty(user, "fullName2", {

    set: function(value) {
      var split = value.split(' ');
      this.firstName = split[0];
      this.surname = split[1];
      this.fatherName = split[2];

    }
  });

  alert(user.fullName); // Вася Петров (из геттера)
  alert(user.fullName2); // Вася Петров Иоанович (из геттера)

  user.fullName = "Петя Иванов";
  user.fullName2 = "Петя Иванов Васильевич";
  alert(user.firstName); // Петя  (поставил сеттер)
  alert(user.surname); // Иванов (поставил сеттер)
  alert(user.fatherName); // Иванов (поставил сеттер)

  keysArr = Object.keys(user);
  alert(keysArr);
}


// Задание 1

function runTask_1() {

  function User(fullName) {
    this.fullName = fullName;

    Object.defineProperties(this, {
      firstName: {
        get: function() {
          var split = this.fullName.split(" ");
          return split[0];
        },
        set: function(value) {
          this.fullName = value + " " + this.lastName;
        }
      },
      lastName: {
        get: function() {
          var split = this.fullName.split(" ");
          return split[1];
        },
        set: function(value) {
          this.fullName = this.firstName + " " + value;
        }
      }
    });
  }

  var vasya = new User("Василий Попкин");
  // чтение firstName/lastName
  alert(vasya.firstName); // Василий
  alert(vasya.lastName); // Попкин

  // запись в lastName
  vasya.lastName = 'Сидоров';

  alert(vasya.fullName); // Василий Сидоров

}
