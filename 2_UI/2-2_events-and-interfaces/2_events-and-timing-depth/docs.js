;(function () {

  // Пример 1

  function runDoc_1() {

    document.write('Пиписька!');
    var elem = document.getElementById('push');
    var pastText = document.getElementById('past-text');

    function sayClick() {
      pastText.innerHTML = "Click"
    }

    function sayMouseOver() {
      pastText.innerHTML = "MouseOver"
    }

    function sayMouseOut() {
      pastText.innerHTML = "MouseOut"
    }

    elem.addEventListener('click', sayClick);
    elem.addEventListener('mouseover', sayMouseOver);
    elem.addEventListener('mouseout', sayMouseOut);

  }

  window.run = runDoc_1;
})();