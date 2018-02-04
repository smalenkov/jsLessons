var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
        console.log(`${propertyKey} скрыт от перебора.`);
        console.log(target[propertyKey]());
    };
}
function redefine(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.value = value;
    };
}
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
__decorate([
    redefine(() => { console.log('This method was redefined'); }),
    enumerable(false)
], Greeter.prototype, "greet", null);
let obj = new Greeter('Mister');
window.obj = obj;
for (let prop in obj) {
    console.log(prop);
}
