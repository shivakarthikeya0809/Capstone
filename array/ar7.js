let numbers=[23,45,12,67,34,89,5,43,78,56];
let found=false;
for(let i=1; i<numbers.length; i++)
    {
        if(numbers[i]>100)
        {
            found=true;
        }
    }
console.log(found);