function runTask_1() {
  var arr = ["a", "b"];

  arr.push(function() {
    alert(this);
  })

  arr[2](); // "a","b",function
}

function runTask_1_1() {
  var arr = ["a", "b"];

  arr.push(function(x) {
    alert(this[0]);
    alert(x);
  })

  arr[2]('Hello');
}


// Задание 2

function runTask_2() {
  var obj = {
  go: function() { alert(this); }
};

  (obj.go)();
}


// Задание 3

function runTask_3() {
  "use strict"
  var obj, method;

  obj = {
    go: function() {
      alert(this);
    }
  };

  obj.go(); // (1) object

  (obj.go)(); // (2) object

  (method = obj.go)(); // (3) undefined

  (obj.go || obj.stop)(); // (4) undefined
}


// Задание 4

function runTask_4() {
  var user = {
  firstName: "Василий",

  export: this
};

alert(user.export.firstName);
}


// Задание 5

function runTask_5() {
  var name = "";

  var user = {
    name: "Василий",

    export: function() {
      return this;
    }

  };

  alert(user.export().name);
}


// Задание 6

function runTask_6() {
  var name = "";

  var user = {
    name: "Василий",

    export: function() {
    return {
      value: this
    };
  }

  };

  alert(user.export().value == user);
}


// Задание 6

function runTask_6() {
  var calculator = {
    read: function() {
      this.ch1 = +prompt("Введите значение 1");
      this.ch2 = +prompt("Введите значение 2");
    },
    sum: function() {
      return this.ch1 + this.ch2;
    },
    mul: function() {
      return this.ch1 * this.ch2;
    }
  };

  calculator.read();
  alert(calculator.sum());
  alert(calculator.mul());
}

// Задание 7

function runTask_7() {
  var ladder = {
    step: 0,
    up: function() { // вверх по лестнице
      this.step++;
      return this;
    },
    down: function() { // вниз по лестнице
      this.step--;
      return this;
    },
    showStep: function() { // вывести текущую ступеньку
      alert(this.step);
    }
  };

  ladder.up().up().down().up().up().down().showStep(); // 1
}
