export const randomID = (length = 16) => {
	const rnd = () => Math.random().toString(36).substring(2);
	let id = "";
	while (id.length < length)
		id += rnd();
	return id.substring(0, length);
};