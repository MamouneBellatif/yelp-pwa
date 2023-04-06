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
        let getParams = `?term=${params.params.term}&location=${params.params.location}`;
        const response = await fetch(proxyurl + baseUrl + url + getParams,{
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
          },
        });
        return JSON.parse(await response.text());

    }

}
// YelpService.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// YelpService.defaults.headers.common['Accept'] = 'application/json';

export default YelpService;


// export default YelpService;
