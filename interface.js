var oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary: function () {
        return "Name: " + this.name + ", Year: " + this.year + ", Broken: " + this.broken;
    }
};
var printVehicles = function (vehicle) {
    console.log("Name: " + vehicle.name);
    console.log("Year: " + vehicle.year);
    console.log("Boolean: " + vehicle.broken);
};
var vehicleInterfaces = function (vehicle) {
    console.log("Name: " + vehicle.name);
    console.log("Year: " + vehicle.year);
    console.log("Boolean: " + vehicle.broken);
};
var printReportables = function (item) {
    console.log((item.summary));
};
var drinkss = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary: function () {
        return "My drink has a sugar content of " + this.sugar;
    }
};
console.log("Vehicle Civic: " + vehicleInterfaces(oldCivic));
console.log("Print Reportable: " + printReportables(oldCivic));
console.log("Print Reportable: " + printReportables(drinkss));
