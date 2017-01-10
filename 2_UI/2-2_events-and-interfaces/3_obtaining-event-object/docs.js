;(function () {

  // Пример 1

  function runDoc_1() {

    var inputButton = document.getElementById('input-button');

    function startEvent(e) {
      alert(e.type);
      e.currentTarget.value = 'Дави еще!)';
    }

    inputButton.addEventListener('click', startEvent)

  }


  // Задачка 1

  function runTask_1() {

    var ball = document.getElementById('ball');
    var garden = document.getElementById('garden');

    function moveBall(e) {
      ball.style.top = e.clientY + 'px';
    }

    garden.addEventListener('click', moveBall);

  }

  window.run = runTask_1;
})();