;(function () {

  // Пример 1

  function runDoc_1() {

    for (var i = 1; i <= 3; i++) {
      alert("Кролик номер " + i);
    }

  }

  function runDoc_2 {

    var elem = document.getElementById('rabbits-button');
    elem.onclick = function() {
      alert('Hello rabbit!')
    };

  }

  window.run = runDoc_2;
})();