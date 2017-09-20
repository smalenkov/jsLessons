;(function () {

  // Пример 1
  function runDoc_1(name) {
    const man = {
      name: "Sergey",
      age: 25,
      sex: "male",
      national: "Russian"
    };

    return new Promise((resolve, reject) => {
      if (name === man.name) {
        resolve(man);
      } else {
        reject(new Error(name))
      }
    })

  }

  window.run = runDoc_1;
})();