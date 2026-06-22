let weight = 72;
let height = 1.75;

let bmi = weight / (height * height);

let category;

if (bmi < 18.5) 
    {
    category = "Underweight";
}
else if (bmi >= 18.5 && bmi <= 24.9)
     {
    category = "Normal";
}
else if (bmi >= 25 && bmi <= 29.9) 
    {
    category = "Overweight";
}
else 
    {
    category = "Obese";
}

console.log("BMI:", bmi.toFixed(2));
console.log("Category:", category);