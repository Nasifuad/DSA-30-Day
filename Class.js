class animals {
  constructor(name, sound) {
    this.sound = sound;
    this.name = name;
  }
  greet() {
    console.log(this);

    console.log("You Mentioned", this.name, "It makes sound like", this.sound);
  }
}
const dog = new animals("Dog", "ghew ghew");
dog.greet();
