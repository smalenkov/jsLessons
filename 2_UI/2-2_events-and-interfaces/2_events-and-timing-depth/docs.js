;(function () {

  // Пример 1

  function runDoc_1() {

    document.write('Пиписька!');
    var elem = document.getElementById('push');
    var pastText = document.getElementById('past-text');

    function sayClick() {
      pastText.innerHTML += "Click "
    }

    function sayMouseOver() {
      pastText.innerHTML += "MouseOver "
    }

    function sayMouseOut() {
      pastText.innerHTML += "MouseOut "
    }

    function sayMouseDown() {
      pastText.innerHTML += "MouseDown "
    }

    function sayMouseUp() {
      pastText.innerHTML += "MouseUp "
    }

    elem.addEventListener('click', sayClick);
    elem.addEventListener('mousedown', sayMouseDown);
    elem.addEventListener('mouseup', sayMouseUp);

    elem.addEventListener('mouseover', sayMouseOver);
    elem.addEventListener('mouseout', sayMouseOut);

  }

  window.run = runDoc_1;
})();