var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
        console.log(propertyKey + " \u0441\u043A\u0440\u044B\u0442 \u043E\u0442 \u043F\u0435\u0440\u0435\u0431\u043E\u0440\u0430.");
        console.log(target[propertyKey]());
    };
}
function redefine(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.value = value;
    };
}
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    __decorate([
        redefine(function () { console.log('This method was redefined'); }),
        enumerable(false)
    ], Greeter.prototype, "greet", null);
    return Greeter;
}());
var obj = new Greeter('Mister');
window.obj = obj;
for (var prop in obj) {
    console.log(prop);
}
