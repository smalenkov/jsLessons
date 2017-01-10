;(function () {

  // Пример 1

  function runDoc_1() {

    document.write('Пиписька!');
    var elem = document.getElementById('push');
    var pastText = document.getElementById('past-text');

    var inputFormLastname = document.getElementById('input-lastname');
    var inputFormFathername = document.getElementById('input-fathername');
    var inputFormName = document.getElementById('input-name');

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

    function setFocusValue(text) {
      return function () {
        this.value = text;
      };
    }

    elem.addEventListener('click', sayClick);
    elem.addEventListener('mousedown', sayMouseDown);
    elem.addEventListener('mouseup', sayMouseUp);

    elem.addEventListener('mouseover', sayMouseOver);
    elem.addEventListener('mouseout', sayMouseOut);

    inputFormName.addEventListener('focus', setFocusValue('hello Name'));
    inputFormLastname.addEventListener('focus', setFocusValue('hello Lastname'));
    inputFormFathername.addEventListener('focus', setFocusValue('hello Fathername'));

  }

  window.run = runDoc_1;
})();