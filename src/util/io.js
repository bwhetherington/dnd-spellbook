function readText(url, then) {
	const req = new XMLHttpRequest();
	request.open("GET", url, true);
	request.send();
	request.onreadystatechange = function() {
		if (this.readyState === 4 && this.status == 200) {
			then(this.requestText);
		}
	}
}

readText("https://dl.dropboxusercontent.com/s/dqkdoxo4ficbezi/spellData2.json", (text) => {
	const obj = JSON.parse(text);
	console.log(obj);
});
