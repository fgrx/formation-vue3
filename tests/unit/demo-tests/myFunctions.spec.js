import myFunctions from "./myFunctions.js";

describe(">>>>> function.js", () => {
  it("should return a multiplication", () => {
    expect(myFunctions.multiplication(4, 3)).toBe(12);
  });

  it("should throw an error", () => {
    expect(() => {
      myFunctions.multiplication(4, "a");
    }).toThrowError();
  });

  it("should contain name and age", () => {
    const person = {
      name: "Grignoux",
      firstName: "Fabien",
      age: 40,
    };

    expect(myFunctions.displayPersonInfos(person)).toContain(person.name);
    expect(myFunctions.displayPersonInfos(person)).toContain(person.firstName);
    expect(myFunctions.displayPersonInfos(person)).toContain(person.age);
  });
});
