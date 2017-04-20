;(function () {

  // Пример 1
  function runDoc_1(name) {

    return new Promise((resolve, reject) => {
      if (name === "Петр" || name === "Даша" || name === "Саша") {
        resolve("Отлично");
      } else {
        reject(new Error(name))
      }
    });

  }

  window.run = runDoc_1;
})();