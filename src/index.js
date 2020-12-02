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
