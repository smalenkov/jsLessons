;(function() {

  // Пример 1

  function runDoc_1() {
    function func() {
      alert('Привет');
    }

    setTimeout(func, 1000);
    alert("hell");
  }


  // Пример 2

  function runDoc_2() {
    function func() {
      var timerId = setTimeout(function () {
        alert(3)
      }, 1000);
      alert(timerId); // число - идентификатор таймера

      clearTimeout(timerId);
      alert(timerId); // всё ещё число, оно не обнуляется после отмены
    }
    func();
  }

  // Пример 2

  function runDoc_3() {
    for (var i=0; i<10; i++) {
      setTimeout(function(){
        alert(i);
      }, i*1000)
    }
  }

  window.run = runDoc_3;
})();