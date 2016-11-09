;(function() {

  // Пример 1

  function runDoc_1() {
    function func() {
      alert( 'Привет' );
    }

    setTimeout(func, 1000);
    alert("hell");
  }


  window.run = runDoc_1;
})();