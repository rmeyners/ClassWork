function Apple (type) {
    this.type = type;
    this.color = "red";
    this.getInfo = getAppleInfo;
}
 

function getAppleInfo() {
    return this.color + ' ' + this.type + ' apple';
}

var apple = new Apple('macintosh');
apple.color = "reddish";
console.log(apple.getInfo());