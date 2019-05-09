import { airplanes, meetsRangeReq, meetsCrewReq } from './airplanes';

console.log(airplanes);
console.log(meetsRangeReq);
console.log(meetsCrewReq);
// Render the airplane list on the page:
const renderList = () => {
  console.log('Yeah!');
};

// Add Airplane Function:
const addAirplane = (name, fuelCapacity, maxSpeed, minSpeed, crew) => airplanes.push({
  name,
  fuelCapacity,
  maxSpeed,
  minSpeed,
  crew,
  get printCrew() {
    return this.crew;
  },
  get range() {
    return maxSpeed - minSpeed;
  },
});// , renderList();
