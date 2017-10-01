;(function () {

  class User {
    constructor(delay) {
      this.init(delay)
    }

    init(delay) {
      const self = this;
      this.userName = "noName";

      function _setName() {
        self.userName = "Tommy";
      }

      let usPromise = new Promise((resolve, reject) => {
        window.setTimeout(function () {
          resolve(_setName)
        }, delay)
      });

      usPromise.then(func => func())

    }

    // Асинхронно получить имя пользователя
    getUserAsync() {
      const self = this;
      return new Promise((resolve, reject) => {
        if (self.userName && self.userName !== "noName") {
          resolve(self.userName);
        } else {
          reject("Error!!!");
        }
      });

    }
  }

  window.user = User;
})();