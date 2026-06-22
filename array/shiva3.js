/*async function test() {
  try {
    Promise.reject("Failed");
  } catch (e) {
    console.log("Caught");
  }
}

test();*/

/*const p = new Promise((resolve, reject) => {
  resolve("First");
  resolve("Second");
  reject("Error");
});

p.then(console.log).catch(console.log);*/

/*async function test() {
  return Promise.resolve("Hello");
}

console.log(test());*/

/*async function run() {
  console.time("time");

  const [a, b] = await Promise.all([
    wait(1000, "A"),
    wait(1000, "B")
  ]);

  console.log(a, b);

  console.timeEnd("time");
}*/


/*const wait = (ms, value) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(value), ms)
  );

async function run() {
  console.time("time");

  const a = await wait(1000, "A");
  const b = await wait(1000, "B");

  console.log(a, b);

  console.timeEnd("time");
}

run();*/

/*Promise.resolve(1)
  .then((x) => {
    console.log(x);
    return x + 1;
  })
  .then((x) => {
    throw new Error("Failed");
  })
  .catch((err) => {
    console.log(err.message);
    return 100;
  })
  .then((x) => {
    console.log(x);
  });*/

  /*for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 100);
}*/




/*for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 100);
}*/


