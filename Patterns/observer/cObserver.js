class Observable {

  constructor() {
    this.subscribers = [];
  }

  subscribe(observer) {
    this.subscribers.push(observer);
  }

  unsubscribe(observer) {
    for (let i = 0; i < this.subscribers.length; i++) {
      if (this.subscribers([i]) === observer) {
        this.subscribers.slice(i, 1);
        return;
      }
    }
  }

  publish(data) {
    for (let i = 0; i < this.subscribers.length; i++) {
      this.subscribers[i](data);
    }
  }
}

function cLog(data) {
  console.log(data);
}

function cLogPersonal(data) {
  console.log(data);
}

let observable = new Observable();
observable.subscribe(cLog);
observable.subscribe(cLogPersonal);

observable.publish('Hello-hello!');
observable.publish('Hello, Mr. Bobby!');

