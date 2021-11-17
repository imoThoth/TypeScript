/**
 * Type Annotations -: Describing the type to the compiler
 * - When to use
 * -: Declaring variable on onle line then initializing later
 * -: when creating a variable for a type that cannot be infered
 * -: when a function returns any, and the value is needed to be precise
 * Type Inference -: Compiler guessing the type
 * 
 */

 //Simple Creation of variables in typescripts using types

 let apple:number = 5;
 let speed: string = 'fast';
 let hasName:boolean = true;
 
 let nothingMuch:null = null;
 let nothing: undefined;
 
 //built in objects
 let now:Date = new Date();
 
 //Array
 let colors: string[] = ['red', 'green', 'purple'];
 let bets: number[] = [123.5, 897.2, 908.1];
 let choices: boolean[] = [true, false, false, true];
 
 //Classes
 class Car {
 
 }
 
 let car : Car = new Car;
 
 let pointType:{x:number; y:number} = {
     x: 20,
     y:30
 };
 
 let point:object = {
     x: 10,
     y: 20,
 };
 
 //Function
 const logNumber: (i: number) => void = (i:number) => {
 console.log(i)
 };
 
 //When to use annotations
 //1) Function returning 'any' type
 const json = '{"x":10, "y": 20}';
 const coOrds : {x:number; y:number} = JSON.parse(json);
 console.log(coOrds);

 //2) When declaring variable on one line and initializing later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for(let i =0; i < words.length; i++){
    if(words[i] === 'green'){
        foundWord = true;
    }
}

//3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, -12];
let numberAboveZero: boolean | number = false;

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 0){
        numberAboveZero = numbers[i];
    }else{
        numberAboveZero = false;
    }
}