class Apple {

	constructor(type) {
		this.type = type;
	}

	getColor() {
		return color;
	}

	getInfo() {
        return this.getColor() + ' ' + this.type + ' apple';
    };
}

var apple = new Apple('macintosh');
console.log(apple.getInfo());