/* ------------------------------------------------
   Decorating Constructors With New Functionality
------------------------------------------------ */
function decoratorOne() {
  function Vehicle(vehicleType) {
    this.vehicleType = vehicleType || "car";
    this.model = "default";
    this.license = "00000-000";
  }

  let testInstance = new Vehicle("car");
  console.log(testInstance);
  
  let truck = new Vehicle("truck");

  truck.setModel = function(modelName) {
    this.model = modelName;
  };

  truck.setColor = function(color) {
    this.color = color;
  };

  truck.setModel("CAT");
  truck.setColor("blue");
  console.log(truck);

  let secondInstance = new Vehicle( "car");
  console.log(secondInstance);
}


/* ------------------------------------------------
   Decorating Objects With Multiple Decorators
------------------------------------------------ */
function decoratorTwo() {
  function MacBook() {
    this.cost = function () {
      return 997;
    };
    this.screenSize = function () {
      return 11.6;
    };
  }

// Decorator 1
  function memory(macbook) {
    let v = macbook.cost();
    macbook.cost = function () {
      return v + 75;
    };
  }

// Decorator 2
  function engraving(macbook) {
    let v = macbook.cost();
    macbook.cost = function () {
      return v + 200;
    };
  }

// Decorator 3
  function insurance(macbook) {
    let v = macbook.cost();
    macbook.cost = function () {
      return v + 250;
    };
  }

  let mb = new MacBook();
  memory(mb);
  engraving(mb);
  insurance(mb);

  console.log(mb.cost());
  console.log(mb.screenSize());
}
function napalm() {

  return {
    MacBook: function () {
      this.cost = function () {
        return 997;
      };
      this.screenSize = function () {
        return 11.6;
      };
    },

    memory: function (macbook) {
      let v = macbook.cost();
      macbook.cost = function () {
        return v + 75;
      };
    },

    engraving: function (macbook) {
      let v = macbook.cost();
      macbook.cost = function () {
        return v + 200;
      };
    },

    insurance: function (macbook) {
      let v = macbook.cost();
      macbook.cost = function () {
        return v + 250;
      };
    },

    fire: function () {
      let mb = new this.MacBook();
      this.memory(mb);
      this.engraving(mb);
      this.insurance(mb);

      console.log(mb.cost());
      console.log(mb.screenSize());
    }
  }
}


/* -------------------------------
   Pseudo-classical Decorators
------------------------------- */
let reminder = new Interface("List", ["summary", "placeOrder"]);

let properties = {
  name: "Remember to buy the milk",
  date: "05/06/2016",
  actions: {
    summary: function () {
      return "Remember to buy the milk, we are almost out!";
    },
    placeOrder: function () {
      return "Ordering milk from your local grocery store";
    }
  }
};

// Now create a constructor implementing the above properties and methods
function Todo(config) {

  // State the methods we expect to be supported
  // as well as the Interface instance being checked
  // against

  Interface.ensureImplements(config.actions, reminder);

  this.name = config.name;
  this.methods = config.actions;

}

// Create a new instance of our Todo constructor
let todoItem = new Todo(properties);

// Finally test to make sure these function correctly
console.log(todoItem.methods.summary());
console.log(todoItem.methods.placeOrder());


/* -------------------------------------------------------
   Add handlers for run decorations examples functions
------------------------------------------------------ */
let decOneEl = document.getElementById('decOne');
let decTwoEl = document.getElementById('decTwo');
let fireEl = document.getElementById('fire');
decOneEl.addEventListener('click', () => decoratorOne());
decTwoEl.addEventListener('click', () => decoratorTwo());
fireEl.addEventListener('click', () => napalm().fire());