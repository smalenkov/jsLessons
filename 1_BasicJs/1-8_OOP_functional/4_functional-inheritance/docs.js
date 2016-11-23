;(function () {

  // Пример 1

  function runDoc_1() {

    function Machine() {
      this._enabled = false; // Внутреннее свойство и перед ним ставится «_»

      this.enable = function() {
        this._enabled = true;
      };

      this.disable = function() {
        this._enabled = false;
      };
    }

    function CoffeeMachine(power) {
      Machine.call(this); // отнаследовать

      var waterAmount = 0;

      this.setWaterAmount = function(amount) {
        waterAmount = amount;
      };

      this.getWaterAmount = function() {
        return waterAmount;
      };

      this.enable();

      alert(this._enabled);

    }

    var coffeeMachine = new CoffeeMachine(10000);

    coffeeMachine.enable();
    coffeeMachine.setWaterAmount(120);
    coffeeMachine.disable();

    document.write(coffeeMachine.getWaterAmount());

  }

  window.run = runDoc_1;
})();