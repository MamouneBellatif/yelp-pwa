import axios from 'axios';
const proxyurl = "https://purple-art-1f04.bellatif6169.workers.dev/";
const apiKey =
  'p2lseXmq5yarrSoE6PGD8hsXxBwmJV5U1dbV8FodsK26NFwKY3YcurmXSJi-3R9RhtiLpJRZbOi90665i5a_UZxA3RzsIu1gGnaYH24JzcSwoTrsp7_0Y_0xYYMhZHYx';
const baseUrl = 'https://api.yelp.com/v3/businesses';

const YelpService = axios.create({
  baseURL:  proxyurl + baseUrl,
  headers: {
    Authorization: `Bearer ${apiKey}`,
    },
});

//axios allo origin
YelpService.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
//axios expect json
YelpService.defaults.headers.common['Accept'] = 'application/json';


// resolve cors issue
// const YelpService = axios.create({ baseURL: baseUrl });
// YelpService.interceptors.request.use(
//   async (config) => {
//     config.headers.Authorization = `Bearer ${apiKey}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );


export default YelpService;
