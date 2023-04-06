import axios from 'axios';
const proxyurl = "https://purple-art-1f04.bellatif6169.workers.dev/";
const apiKey =
  'p2lseXmq5yarrSoE6PGD8hsXxBwmJV5U1dbV8FodsK26NFwKY3YcurmXSJi-3R9RhtiLpJRZbOi90665i5a_UZxA3RzsIu1gGnaYH24JzcSwoTrsp7_0Y_0xYYMhZHYx';
const baseUrl = 'https://api.yelp.com/v3/businesses';

// const YelpService = axios.create({
//   baseURL:  proxyurl + baseUrl,
//   headers: {
//     Authorization: `Bearer ${apiKey}`,
//     withCredentials: true,
//     cache: 'no-cache',
//     },
// });

//translating the axios instance to fetch
const YelpService = {
      get: async (url, params) => {

        const response = await fetch(proxyurl + baseUrl , {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${apiKey}`,
            accept: 'application/json',
            'Content-Type': 'application/json',
            accessControlAllowOrigin: '*',
            'Access-Control-Allow-Credentials': true,
            withCredentials: true,
          },
        });
        return response.json();

    }

}
// YelpService.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// YelpService.defaults.headers.common['Accept'] = 'application/json';

export default YelpService;


// export default YelpService;
