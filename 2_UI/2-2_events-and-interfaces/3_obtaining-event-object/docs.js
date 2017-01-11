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
    var ballWidth = ball.offsetWidth;
    var ballHeight = ball.offsetHeight;

    function moveBall(e) {
      var coordGarden = garden.getBoundingClientRect();
      ball.style.top = e.clientY - (coordGarden.top + garden.clientTop) - ballHeight/2 + 'px';
      ball.style.left = e.clientX - (coordGarden.left + garden.clientLeft) - ballWidth/2 + 'px';
    }

    garden.addEventListener('click', moveBall);

  }

  window.run = runTask_1;
})();