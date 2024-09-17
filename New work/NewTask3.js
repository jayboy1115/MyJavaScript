const counter = {
  count: 0,
  step: 1,
  increment: function() {
    this.count += this.step;
    return this.count;
  },
  decrement: function() {
    this.count -= this.step;
    return this.count;
  }
}

console.log(counter.increment());
