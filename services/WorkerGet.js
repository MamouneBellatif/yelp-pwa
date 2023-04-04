//create a new axios instance with the baseURL of the proxyurl + cloudflare worker url in comments.js
//
// Compare this snippet from services/WorkerService.js:
import axios from 'axios';

const proxyurl = "https://purple-art-1f04.bellatif6169.workers.dev/";
//const proxyurl = "";
const baseUrl = 'https://api-livre.bellatif6169.workers.dev';

//fetch instead of axios

const WorkerServiceGet = axios.create({

    baseURL:  baseUrl,
    
    headers: {
        'Content-Type': '*/*'
    },
});

export default WorkerServiceGet;