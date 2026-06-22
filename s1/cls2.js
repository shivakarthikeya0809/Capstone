
const createIdGenerator = (prefix) => {
    let count = 0;

    return () => {
        count++;
        return `${prefix}-${String(count).padStart(3, "0")}`;
    };
};

const poIdGen = createIdGenerator("PO");

console.log(poIdGen()); 
console.log(poIdGen()); 
console.log(poIdGen()); 


