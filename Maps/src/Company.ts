import faker from 'faker';
import { Mappable } from './CustomMaps';

export class Company implements Mappable{
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number,
        long: number
    };

    constructor(){
        this.companyName = faker.company.companyName();
        this.catchPhrase =faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            long: parseFloat(faker.address.longitude())
        };
    };

    markerContent(): string{
        return `
        <div> 
        <h1> CompanyName:${this.companyName} </h1>
        <h2> Slogan:${this.catchPhrase}</h2>
        </div>
            `
    }

}
