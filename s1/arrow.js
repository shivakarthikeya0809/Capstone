const square=(n)=>n*n;
console.log(square(5));

const isEven=(n)=>n%2===0;
console.log(isEven(10));

const fullname=(firstname,lastname)=>`${firstname} ${lastname}`;
console.log(fullname("shiva","kumar"));

const findmax=(arr)=>Math.max(...arr);
console.log(findmax([1,5,3,9,2]));

const createPo=(vendor,amount)=>({
    id:'PO-${Date.now()}',
    vendor,
    amount,
    status:"draft"
});
console.log(createPo("shiva",1000));