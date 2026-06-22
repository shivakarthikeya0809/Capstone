const p1 = new Promise((resolve) =>
    setTimeout(() => resolve("A"),1000)
);

const p2 = new Promise((resolve) =>
    setTimeout(() => resolve("B"),500)
);

Promise.race([p1,p2])
.then((result)=>{
    console.log(result);
});