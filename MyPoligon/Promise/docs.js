;(function () {

  // Пример 1

  function runTest_1() {

    var i = 1;

    var promise = new Promise((resolve, reject) => {
        if (i) {
          resolve();
        } else {
          reject();
        }
      });

    function yes() {
      alert('yes');
    }

    function no() {
      alert('no');
    }

    promise.then(yes, no);

  }

  function runTest_2() {

    'use strict';

    fetch('data.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        //alert(data.users[1].name);
        var datausers = data.users;
        document.write(datausers[0].name);
      })
      .catch( alert );

  }

  window.run = runTest_2;
})();