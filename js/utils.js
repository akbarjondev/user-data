// functions
var $_ = function(selector, node = document) {
	return document.querySelector(selector);
}
var $$_ = function(selector, node = document) {
	return document.querySelectorAll(selector);
}

// create new element
var createElement = function(newElName, elClass, elValue) {
	var elNewEl = document.createElement(newElName);
	elNewEl.setAttribute('class', elClass);
	elNewEl.textContent = elValue;

	return elNewEl;
}


// findUser

let findUser = (data, userId) => {
	return data.find(user => user.id === userId);
}

// date
let getYear = () => String((new Date).getFullYear());
let getMonth = (one = 0) => String(((new Date).getMonth() + one)).padStart(2, '0');
let getDay = () => String((new Date).getDate()).padStart(2, '0');
