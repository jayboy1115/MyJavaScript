const counter = {
	count: 0,
	step: 1,
	increment: function() {
	this.count += this.step;
    },
	decrement: function() {
	this.count = this.step
   }
}
console.log(counter.increment());