import axios from "axios";
import wrapper from "axios-cache-plugin";

let http = wrapper(axios, {
	maxCacheSize: 15, // how many files to cache
	excludeHeaders: true // should headers be ignored in cache key, helpful for ignoring tracking headers
});

http.__addFilter(/restcountries\.eu\/rest/);

export default http;
