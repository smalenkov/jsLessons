;(function () {

  let counter = 0;
  let promises = [];

  class User {
    constructor(delay) {
      this.init(delay)
    }

    init(delay) {
      const self = this;
      this._userName = "noName";
      this._promiseState = undefined;

      function _setName() {
        self._userName = "Tommy " + counter + " delay: " + delay;
        counter++;
        console.log("Set new user name");

        return self._userName;
      }

      this._promiseState = new Promise((resolve, reject) => {
        window.setTimeout(function () {
          resolve(_setName)
        }, delay)
      });

      promises.push(this._promiseState);
    }

    // Получить первое присвоенное имя пользователя
    getUserAsync() {
      const self = this;
      Promise.race(promises)
        .then(func => func())
        .then(function (uName) {
            let elem = document.getElementById("text-container");
            elem.innerText = uName;
            promises = [];
          });
    }
  }

  window.User = User;
})();