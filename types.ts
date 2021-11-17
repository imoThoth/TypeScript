const todaysDate = new Date(); //automatically assigns the type Date to today

//todaysDate is now able to cal call the date method and properties

interface Animal{
    age: number;
    fur: boolean;
    tale: boolean;
    name: string;
}

//const dog = new Animal

let newDog: Animal = {age: 12, fur: true, tale: false, name: "doggo"};
console.log(`This dogs name is ${newDog.name}`)

let newDog1: Animal = {} as Animal;
console.log(newDog1.name = "Harribo")

const person = {
    age: 20,
    name: "Lingard",
    
}

class Furniture{

}

const table = new Furniture;



