/**
 * Reads text from the specified URL and handles it.
 * @param url The URL to read from
 * @param then A callback to handle the data when it is read
 */
export const readText = (url, then) => {
	const req = new XMLHttpRequest();
	req.open("GET", url, true);
	req.send();
	req.onreadystatechange = () => {
		if (req.readyState === 4 && req.status == 200) {
			then(req.requestText);
		}
	}
}
