let numbers=[23,45,12,67,34,89,5,43,78,56];
let smallest=numbers[0];
for(let i=1; i<numbers.length; i++)
    {
        if(numbers[i]<smallest)
        {
            smallest=numbers[i];
        }
    }
console.log(smallest);