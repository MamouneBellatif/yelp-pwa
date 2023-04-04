//create a new axios instance with the baseURL of the proxyurl + cloudflare worker url in comments.js
//
// Compare this snippet from services/WorkerService.js:
import axios from 'axios';

const proxyUrl = "https://purple-art-1f04.bellatif6169.workers.dev/";
//const proxyurl = "";
const baseUrl = 'https://api-livre.bellatif6169.workers.dev';

//fetch instead of axio

const WorkerServicePost = axios.create({

    baseURL:  proxyUrl + baseUrl,
    headers: {
        'Content-Type': 'application/json',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Cross-Origin-Embedder-Policy': 'require-corp; report-to="default";',
        'Cross-Origin-Opener-Policy': 'same-site; report-to="default";',
        'Cross-Origin-Resource-Policy': 'same-site',
        'X-Content-Type-Options': 'nosniff',
        
    },


});

/*
add headers  security headers  "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Cross-Origin-Embedder-Policy": 'require-corp; report-to="default";',
      "Cross-Origin-Opener-Policy": 'same-site; report-to="default";',
      "Cross-Origin-Resource-Policy": "same-site",
*/




export default WorkerServicePost;
