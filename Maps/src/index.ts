import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMaps";

const user = new User();
const company = new Company();

const newMap = document.getElementById("gMaps") as Element
const customMap = new CustomMap(newMap);

customMap.addMarker(user);
customMap.addMarker(company);