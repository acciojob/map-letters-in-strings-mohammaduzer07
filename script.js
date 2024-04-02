//your JS code here. If required.
function mapLetters(word) {
	let objMap = {};
	for(let i = 0; i < word.length; i++){
		let char = word[i];
		if(objMap.hasOwnProperty(char)){
			objMap[char].push(i);
		} else {
			objMap[char] = i;
		}
	}
	return objMap;
}

console.log(mapLetters("dodo"))
console.log(mapLetters("froggy"))
console.log(mapLetters("grapes"))
