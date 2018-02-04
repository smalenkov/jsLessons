import { BehaviorSubject } from "@node/rxjs/BehaviorSubject";
export class initData {
    constructor() {
        this._name = new BehaviorSubject('');
        this._age = new BehaviorSubject(null);
        this._company = new BehaviorSubject('');
        this._email = new BehaviorSubject('');
        this._name.subscribe({
            next: function (name) {
                console.log(`Имя пользователя: ${name}`);
            }
        });
        this.init();
    }
    init() {
        console.log('initData class by init');
    }
    set name(value) {
        this._name = value;
    }
    get name() {
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
