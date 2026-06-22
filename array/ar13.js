let numbers=[23,45,12,67,34,89,5,43,78,56];
let count=0;
for(let i=0; i<numbers.length; i++)
    {
        if(numbers[i]>100)
        {
            count++;
        }
    }
console.log(count)