;(function () {

  // Пример 1

  function runDoc_1() {

    function Machine() {
      var enabled = false;

      this.enable = function() {
        enabled = true;
      };

      this.disable = function() {
        enabled = false;
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
      }

    }

    var coffeeMachine = new CoffeeMachine(10000);

    coffeeMachine.enable();
    coffeeMachine.setWaterAmount(120);
    coffeeMachine.disable();

    document.write(coffeeMachine.getWaterAmount());

  }

  window.run = runDoc_1;
})();