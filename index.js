// Code your solution in this file!
const returnFirstTwoDrivers = function (driver) {
  return driver.slice(0,2);
};

const returnLastTwoDrivers =  function (driver) {
  return driver.slice(driver.length - 2);
};

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
  ];

const createFareMultiplier = function(integer) {
  return function(fare) {
    return fare * integer;
  };
};
// for example, this higher order function takes an argument of 4
// const fareQuadrupler = createFareMultiplier(4);
// fareQuarupler(12) => 48

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const fetchSpecifiedDrivers = function(arrayOfDrivers, whichDrivers) {
    return whichDrivers(arrayOfDrivers);
};
