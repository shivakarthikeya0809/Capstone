let numbers=[23,45,12,67,34,89,5,43,78,56];
let largest=numbers[0];
for(let i=1; i<numbers.length; i++)
    {
        if(numbers[i]>largest)
        {
            largest=numbers[i];
        }
    }
console.log(largest);