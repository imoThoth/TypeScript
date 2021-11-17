const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsBycolors: string[][] = [];

const carsByMakes = [
    ['f10'],
    ['corolla'],
    ['camary']
];

//Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

//prevent wrong values from being entered
const carErr = carMakers.push(300);

//Help with 'map'
carMakers.map((car:string): string => {
    return car.toUpperCase();
});

//Typed Arrays - Represent collection of records with some arbitrary order
const importantDates: (Date | string)[] = [];