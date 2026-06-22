const p1 = new Promise((resolve) =>
    setTimeout(() => resolve("A"),1000)
);

const p2 = new Promise((resolve) =>
    setTimeout(() => resolve("B"),1000)
);

Promise.all([p1,p2])
.then((result)=>{
    console.log(result);
});