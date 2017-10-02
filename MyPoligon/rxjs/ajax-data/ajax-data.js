const api = {
  fetchUser: () => {
    let request = fetch('users.json')
      .then(response => response.json());
    return Rx.Observable.from(request)
      .zip(Rx.Observable.interval(1200), x => x);
  },
  ajaxUser: () => {
    let request = Rx.Observable
      .ajax('users.json')
      .map(e => e.response); // happens asynchronously;
    return request;
  }
};

var subject = new Rx.Subject();

subject.subscribe({
  next: x => console.log('Data: ' + x)
});

// let data = Rx.Observable.fromPromise(fetch('users.json'));
let dataArr = [1, 2, 34, 6666];
let data = Rx.Observable.from(dataArr)
  .zip(Rx.Observable.interval(1200), x => x);

data.subscribe(subject);

// data.subscribe(data => console.log(data), error => console.error(error));
// api.fetchUser().subscribe(data => console.log(data), error => console.error(error));