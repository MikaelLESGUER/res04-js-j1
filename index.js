// MODULE 1
const character= "legolas";
// character = "Gimly";
console.log(character);

let name= "legolas";
name = "Gimly";
console.log(name);


let x = 345521;
let y = -6753; 
let z = 4.23021; 
console.log(x,y,z)

let truth = true; 
let lie = false; 
console.log(truth, lie)

// MODULE 2

// excercice 1

let i = [0,1,2,3,4,5,6,7,8,9,10];

console.log(i);

let v = [25,24,23,22,21,20];

console.log(v);

let a = 0;

while(a < 20)
{
    a = a + 1; 
    if(a%2 === 0) 
{
    console.log(a); // alors affiche pair
    };
}

// excercice 2

let b = 0;

while(b < 10)
{
    b = b + 1; 
    if(b%2 === 0) 
{
    console.log(b, "nombre pair"); // alors affiche pair
    } else {
        console.log(b, 'nombre impair')
    }
}

// excercice 3

let c = 0;

while(c < 100)
{
    // c = c + 1; 
    if(c <= 50) 
{
    c = c + 2;
     if(c%2 === 0) 
    {
    console.log(c, "nombre pair"); // alors affiche pair
    } else {
        console.log(c, 'nombre impair')
        }
    } else {
        c = c + 3;
        if(c%2 === 0) 
    {
    console.log(c, "nombre pair"); // alors affiche pair
    } else {
        console.log(c, 'nombre impair')
        }
    }
    console.log(c)
}