const Runner = (speed) => ({
  run() {
    return `I can run ${this.speed}`;
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

const Person = ({ name, age, gender, favFood, sound, speed }) => ({
  name,
  age,
  gender,
  favFood,
  sound,
  speed,
  ...Runner(speed),
  ...Eater(favFood),
  ...Speaker(sound),
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
