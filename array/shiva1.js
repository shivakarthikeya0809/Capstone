let balance = 100;

async function deduct(amount) {
  const current = balance;

  await new Promise((r) => setTimeout(r, 100));

  balance = current - amount;
}

async function run() {
  await Promise.all([
    deduct(30),
    deduct(50)
  ]);

  console.log(balance);
}

run();