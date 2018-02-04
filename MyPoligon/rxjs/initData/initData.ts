import { BehaviorSubject } from "@node/rxjs/BehaviorSubject";

export class initData {
  private _name: BehaviorSubject<string> = <BehaviorSubject<string>>new BehaviorSubject('');
  private _age: BehaviorSubject<number> = <BehaviorSubject<number>>new BehaviorSubject(null);
  private _company: BehaviorSubject<string> = <BehaviorSubject<string>>new BehaviorSubject('');
  private _email: BehaviorSubject<string> = <BehaviorSubject<string>>new BehaviorSubject('');

  constructor() {
    this._name.subscribe({
        next: function(name: string) {
          console.log(`Имя пользователя: ${name}`);
        }
      }
    );

    this.init();
  }

  init() {
    console.log('initData class by init')
  }

  set name(value: any) {
    this._name = value;
  }

  get name(): any {
    return this._name;
  }
}

// const api = {
//   fetchUser: () => {
//     let request = fetch('users.json')
//       .then(response => response.json());
//     return Rx.Observable.from(request)
//       .zip(Rx.Observable.interval(1200), x => x);
//   },
//   ajaxUser: () => {
//     let request = Rx.Observable
//       .ajax('users.json')
//       .map(e => e.response); // happens asynchronously;
//     return request;
//   }
// };
//
// let subject = new Rx.Subject();
//
// subject.subscribe({
//   next: x => console.log('Data: ' + x)
// });
//
// let dataArr = [1, 2, 34, 6666];
// let data = Rx.Observable.from(dataArr)
//   .zip(Rx.Observable.interval(1200), x => x);
//
// data.subscribe(subject);