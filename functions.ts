const add = (a:number, b:number) : number => {
    return a + b;
};

const subtract = (a:number, b:number) => {
    a - b;
}

console.log(`Add: ${add(20,30)}`);
console.log(`Subtract: ${subtract(30,20)}`)

function divide(a:number, b:number): number {
    return a / b;
}

const multiply = function(a:number, b:number): number {
    return a * b;
}

const logger =(message: string) : void => {
    console.log(message)
}

const throwError = (message: string) : never => {
    throw new Error(message)
}

const forecast = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = (forecast: {date: Date, weather: string}) : void => {
    console.log(forecast.date);
    console.log(forecast.weather);
};

const weatherDestructured = ({weather, date}: {date: Date, weather: string}) : void => {
    console.log(weather);
    console.log(date);
}