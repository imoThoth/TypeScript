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
