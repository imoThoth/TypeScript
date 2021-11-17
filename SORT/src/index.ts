import {Sorter} from './Sorter';
import { NumberCollections } from './NumbersCollection';
import { CharactersCollections } from './CharactersCollections';

const numbers = new NumberCollections([20, 30, 45, 10, -90, -12, -45]);
console.log(`Before sort: ${numbers.data}`);
const sorter = new Sorter(numbers);
sorter.sort();
console.log(`After sort: ${numbers.data}`);

const letters = new CharactersCollections("xabc");
console.log(`Before sort: ${letters}`);
const charSorter = new Sorter(letters);
charSorter.sort();
console.log(`After sort: ${letters.data}`);

const dog = new CharactersCollections("dog");
console.log(dog.swap(3,2));