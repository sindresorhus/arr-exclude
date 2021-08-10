export default function arrayExclude(array, exclusions) {
	if (!Array.isArray(array)) {
		throw new TypeError(`Expected an array, got \`${typeof array}\``);
	}

	return array.filter(item => !exclusions.includes(item));
}
