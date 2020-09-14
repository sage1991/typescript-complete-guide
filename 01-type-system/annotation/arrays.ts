
const carMakers: string[] = [ "ford", "toyota", "chevy" ];

const dates = [ new Date(), new Date() ];

const carsByMake: string[][] = [
  [ "f150" ],
  [ "corolla" ],
  [ "camaro" ]
];


// help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
// carMakers.push(123);

// Help with map, forEach, reduce ...
const uppercaseCarMakers = carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// flexible types
const importantDates: ( Date | string )[] = [];
importantDates.push("2020-08-07");
importantDates.push(new Date());