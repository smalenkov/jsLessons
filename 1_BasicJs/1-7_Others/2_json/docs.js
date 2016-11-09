;(function() {

  // Пример 1

  function runDoc_1() {
    var user = '{ "name": "Вася", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

    user = JSON.parse(user);

    alert(user.friends[3]); // 1
    alert(user.name); // 1
  }

  // Пример 2

  function runDoc_2() {
    // дата в строке - в формате UTC
    var str = '{"title":"Конференция","date":"2014-11-30T12:00:00.000Z"}';

    var event = JSON.parse(str, function(key, value) {
      if (key == 'date') return new Date(value);
      return value;
    });

    alert( event.date.getFullYear() ); // теперь сработает!
  }

  // Пример 3

  function runDoc_3() {
    var room = {
      number: 23,
      occupy: function () {
        alert(this.number);
      }
    };

    var roomTwo = {
      number: 23,
      toJSON: function() {
        return(this.number);
      }
    };

    event = {
      title: "Конференция",
      date: new Date(Date.UTC(2014, 0, 1)),
      room: room,
      roomTwo: roomTwo
    };

    alert(JSON.stringify(event));
    alert(JSON.stringify(room));
    alert(JSON.stringify(roomTwo));
  }

  // Пример 4
  // Исключение свойств из сериализации

  function runDoc_4() {
    var user = {
      name: "Вася",
      age: 25,
      window: window
    };

    alert( JSON.stringify(user, ["name", "age"], 2) );

    var str = JSON.stringify(user, function(key, value) {
      if (key == 'window') return undefined;
      return value;
    });

    alert( str );
  }

  // Задание 1

  function runTask_1() {
    var leader = {
      name: "Иван Петров",
      age: 34
    };

    var str = JSON.stringify(leader, "", 2);
    alert(str);

    var leaderFromStr = JSON.parse(str);
    alert(leaderFromStr.name);
  }

  // Задание 2

  function runTask_2() {
    var leader = {
      name: "Василий Иванович"
    };

    var soldier = {
      name: "Петька"
    };

    // эти объекты ссылаются друг на друга!
    leader.soldier = soldier;
    soldier.leader = leader;

    var team = [leader, soldier];

    team.toJSON = function() {
      /* свой код, который может создавать копию объекта без круговых ссылок и передавать управление JSON.stringify */
      return "свой код, который может создавать копию объекта без круговых ссылок и передавать управление JSON.stringify"
    };

    var teamStr = JSON.stringify(team);
    alert(teamStr);
  }

  window.run = runTask_2;
})();