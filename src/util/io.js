/**
 * Reads text from the specified URL and handles it.
 * @param url The URL to read from
 * @param then A callback to handle the data when it is read
 */
export const readText = (url, then) => {
	const req = new XMLHttpRequest();
	req.open("GET", url, true);
	req.send();
	req.onreadystatechange = function () {
		console.log(this);
		if (this.readyState === 4 && this.status == 200) {
			then(this.responseText);
		}
	}
}

export const getSavedUrl = () => {
	const storage = window.localStorage;
	return storage.getItem("savedUrl");
}
