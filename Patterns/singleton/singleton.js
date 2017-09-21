let singleton_A = {
  log: function(text) {
    console.log(text);
  }
};

let Singleton_B;

(function () {
  let instance;
  let anticlone_proxy;

  Singleton_B = function() {
    if (instance) {
      return instance;
    }

    instance = {
        _counter: 0,
        log: function(text) {
          console.log(text + ++this._counter);
        }
      };

    anticlone_proxy = {
        log: function(text) {
          return instance.log(text);
        }
      };

    return anticlone_proxy;
  };
})();