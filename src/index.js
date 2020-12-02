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
