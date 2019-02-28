$("#selectOne").on("change", function(e) {
	var s = e.target.value;
	if (s !== '') alert('"' + s + '"' + ' is ' + functionOne(s) + '.');
});
$("#selectTwo").on("change", function(e) {
	var s = e.target.value;
	if (s !== '') alert('"' + s + '"' + ' is ' + functionTwo(s) + '.');
});
var functionOne = function(s) {
	var queue = [],
		hash = {
			"(": ")",
			"{": "}",
			"[": "]"
		},
		isOpen = {
			"(": true,
			"{": true,
			"[": true,
			")": false,
			"}": false,
			"]": false
		};
	s = s.split('');
	for (var i = 0, length = s.length; i < length; i++) {
		if (isOpen[s[i]]) queue.push(hash[s[i]]);
		else if (s[i] !== queue.pop()) return false;
	}
	if (queue.length !== 0) return false;
	return true;
}

function functionTwo(s) {
	var matches = s.match(/\d[\w\?]*?\d/g);
	if (!matches) return false;
	var result = false;
	for (var match of matches) {
		if (Number(match[0]) + Number(match[match.length - 1]) === 10) {
			if (match.split('').filter(char => char === '?').length === 3) result = true;
			else return false;
		}
	}
	return result;
}