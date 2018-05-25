/**
 * Reads text from the specified URL and handles it.
 * @param url The URL to read from
 * @param then A callback to handle the data when it is read
 */
export function readText(url, then) {
	const req = new XMLHttpRequest();
	request.open("GET", url, true);
	request.send();
	request.onreadystatechange = function () {
		if (this.readyState === 4 && this.status == 200) {
			then(this.requestText);
		}
	}
}
