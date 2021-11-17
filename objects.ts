const profile = {
    name: 'alex',
    age: 20,
    coOrds: {
        lat: 0,
        long: 20
    },
    setAge(age: number): void{
        this.age = age;
    }
};

const {age}:{age:number} = profile;
const {
    coOrds:{lat, long}
} : {coOrds: {lat:number; long: number}} = profile;