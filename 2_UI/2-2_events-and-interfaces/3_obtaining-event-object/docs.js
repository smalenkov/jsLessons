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
      var ballTop = e.clientY - (coordGarden.top + garden.clientTop) - ballHeight/2;
      var ballLeft = e.clientX - (coordGarden.left + garden.clientLeft) - ballWidth/2;
      console.log(ballTop + ' ' + garden.offsetHeight);

      if (ballTop < 0) {
        ballTop = 0;
      }

      if (ballTop > garden.offsetHeight) {
        ballTop = garden.offsetHeight + ballHeight;
      }

      if (ballLeft < 0) {
        ballLeft = 0;
      }

      ball.style.top = ballTop + 'px';
      ball.style.left = ballLeft + 'px';

    }

    garden.addEventListener('click', moveBall);

  }

  window.run = runTask_1;
})();