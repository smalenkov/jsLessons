;(function() {

  // Пример 1

  function runDoc_1() {
    var user = '{ "name": "Вася", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

    user = JSON.parse(user);

    alert(user.friends[3]); // 1
    alert(user.name); // 1
  }

  window.run = runDoc_1;
})();
