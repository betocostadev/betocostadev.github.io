import {airplanes, meetsRangeReq, meetsCrewReq} from './airplanes.js';

console.log(airplanes);
console.log(meetsRangeReq);
console.log(meetsCrewReq);
// Render the airplane list on the page:
const renderList = () => {
    console.log('Yeah!');
}

// Add Airplane Function:
const addAirplane = (name, fuelCapacity, maxSpeed, minSpeed, crew) => {
    return airplanes.push({
        name: name,
        fuelCapacity: fuelCapacity,
        maxSpeed: maxSpeed,
        minSpeed: minSpeed,
        crew: crew,
        get printCrew() {
            return this.crew;
        },
        get range() {
            return maxSpeed - minSpeed;
        }
    }), renderList();
};

