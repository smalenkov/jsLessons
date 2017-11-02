function resolveAfter(x, timer) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, timer);
  });
}

async function addOne(x) {
  let one = resolveAfter(10, 2000);
  let two = resolveAfter(50, 3000);

  return x + await one + await two;
}

async function addTwo(x) {
  let one = await resolveAfter(10, 2000);
  let two = await resolveAfter(50, 3000);

  return x + one + two;
}

let container = document.getElementById('data');

addOne(50).then(resp => {
  container.innerText = resp;
});

addTwo(100).then(resp => {
  container.innerText = resp;
});