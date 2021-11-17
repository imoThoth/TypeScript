class Vehicles{

    //color: string;
    constructor(public color: string){
        this.color = color;
    }

    protected honk(): void{
        console.log("HONK HONK")
    }
};

class Car extends Vehicles{

    constructor(public wheels: number, color: string){
        super(color);
    }

    private drive(): void{
        console.log("SPEEDY SPEEDY GONzOOOOOOOOOOOOOOOOOOOOOOO")
    }

    public startDrive(): void{
        console.log(this.drive());
    }
};

const car = new Car(4,'blue');
car.startDrive();

const toyota = new  Vehicles('orange');

