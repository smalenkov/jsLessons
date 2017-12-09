function enumerable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value;
    console.log(`${propertyKey} скрыт от перебора.`);
    console.log(target[propertyKey]());
  };
}

function redefine(value: any) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.value = value;
  };
}

class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  @redefine( () => {console.log('This method was redefined')} )
  @enumerable(false)
  greet() {
    return "Hello, " + this.greeting;
  }
}

let obj = new Greeter('Mister');
(<any>window).obj = obj;

for (let prop in obj) {
  console.log(prop)
}