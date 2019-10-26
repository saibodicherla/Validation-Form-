import http from "./http";

export default async function() {
	let CountryEndPoint = "https://restcountries.eu/rest/v2/all";

	let data = await http.get(CountryEndPoint);

	// console.log("data back :D", data);
	return data;
}
