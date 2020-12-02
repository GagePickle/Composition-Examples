const Runner = (speed) => ({
  run() {
    return `I can run at an ${this.speed} speed`;
  },
});

const Eater = (favFood) => ({
  eat() {
    return `I like to eat ${this.favFood}`;
  },
});

const Speaker = (sound) => ({
  speak() {
    return `${this.sound}`;
  },
});

const Greeter = (name) => ({
  greet() {
    return `Hello, my name is ${this.name}`;
  },
});

const Person = ({ name, age, gender, favFood, speed }) => ({
  name,
  age,
  gender,
  favFood,
  speed,
  ...Runner(speed),
  ...Eater(favFood),
  ...Greeter(name),
});

const Animal = ({ species, gender, favFood, sound, speed }) => ({
  species,
  gender,
  favFood,
  sound,
  speed,
  ...Runner(speed),
  ...Eater(favFood),
  ...Speaker(sound),
});

const jeff = Person({
  name: "Jeff",
  age: 22,
  gender: "Male",
  favFood: "Pizza",
  speed: "Average",
});

console.log(jeff.greet());

console.log(jeff.run());

console.log(jeff.eat());

const fido = Animal({
  species: "Dog",
  gender: "Male",
  favFood: "Kibble",
  sound: "Bark",
  speed: "Fast",
});

console.log(fido.run());

console.log(fido.speak());

console.log(fido.eat());
