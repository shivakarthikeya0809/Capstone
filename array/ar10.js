let numbers=[23,45,12,67,34,89,5,43,78,56];
let positive=true;
for(let i=1; i<numbers.length; i++)
    {
        if(numbers[i]<0)
        {
            positive=false;
        }
    }
console.log(positive);