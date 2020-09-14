interface Summarizable {
  summary: () => string;
}

interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary: () => string;
}

interface Beverage {
  name: string;
  color: string;
  carbonated: boolean;
  sugar: number;
  summary: () => string;
}


const oldCivic: Vehicle = {
  name: "civic",
  year: new Date("2020-01-01"),
  broken: true,
  summary(): string {
    return `
      name: ${this.name}
      year: ${this.year}
      broken: ${this.broken}
    `;
  }
};

const coke: Beverage = {
  name: "coke",
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My ${this.name} contains ${this.sugar} grams of sugar`;
  }
};


const printSummary = (item: Summarizable): void => console.log(item.summary());

printSummary(oldCivic);
printSummary(coke);