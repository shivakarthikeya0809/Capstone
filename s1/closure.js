function createcounter() {
    let count=0;
    return function(){
        count++;
        return count;
    }
}
const counter=createcounter();
console.log(counter());
console.log(counter());
console.log(counter());
