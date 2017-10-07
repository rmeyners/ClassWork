var Promise = require("promise");

var haveMoney = false;
var getNewPhone = new Promise(function(resolve, reject) {
	if(haveMoney) {
		var phone = {
			brand: "Apple",
			color: "black"
		};
		resolve(phone);
	} else {
		var reason = new Error("no money");
		reject(reason);
	}
});

getNewPhone.then(function(phone) {
	console.log(phone);
}).catch(function(error) {
	console.log(error.message);
});
