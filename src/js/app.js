import Character from "./Character";
import getHealthStatus from "./getHealthStatus";

const character = new Character("Маг", 90);

console.log(getHealthStatus(character));
