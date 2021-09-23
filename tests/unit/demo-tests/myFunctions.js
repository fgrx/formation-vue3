export default {
  multiplication(a, b) {
    if (isNaN(a) || isNaN(b))
      throw new Error("Doit recevoir uniquement des nombres");
    return a * b;
  },

  displayPersonInfos(person) {
    return `Je m'appelle ${person.firstName} ${person.name} et j'ai ${person.age}`;
  },
};
