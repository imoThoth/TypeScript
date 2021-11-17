interface Vehicle{
    name: string,
    year: number,
    broken: boolean,
    summary(): string
}

interface Reportable{
    summary(): string
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string{
        return `Name: ${this.name}, Year: ${this.year}, Broken: ${this.broken}`;
    }
};

const printVehicles = (vehicle: {name: string; year: number; broken: boolean}) => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Boolean: ${vehicle.broken}`);
};

const vehicleInterfaces = (vehicle: Vehicle) => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Boolean: ${vehicle.broken}`);
};

const printReportables = (item: Reportable) : void => {
    console.log((item.summary))
};

const drinkss = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string{
        return `My drink has a sugar content of ${this.sugar}`
    }
}

console.log(`Vehicle Civic: ${vehicleInterfaces(oldCivic)}`);
console.log(`Print Reportable: ${printReportables(oldCivic)}`);
console.log(`Print Reportable: ${printReportables(drinkss)}`);
