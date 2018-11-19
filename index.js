// Code your solution in this file!
const returnFirstTwoDrivers = function(arr){
  return arr.slice(0, 2);
}

 const returnLastTwoDrivers = function(arr) {
   return arr.slice(-2);
 }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(num) {
  return function(fare) {
    return fare * num;
  }
}

const fareDoubler = function(fare) {
  return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare) {
  return createFareMultiplier(3)(fare);
}

const fetchSpecifiedDrivers = function(arr, fn) {
  return fn(arr);
}
