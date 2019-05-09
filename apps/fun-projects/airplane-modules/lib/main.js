'use strict';

var _airplanes = require('./airplanes.js');

console.log(_airplanes.airplanes);
console.log(_airplanes.meetsRangeReq);
console.log(_airplanes.meetsCrewReq);
// Render the airplane list on the page:
var renderList = function renderList() {
    console.log('Yeah!');
};

// Add Airplane Function:
var addAirplane = function addAirplane(name, fuelCapacity, maxSpeed, minSpeed, crew) {
    return _airplanes.airplanes.push({
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