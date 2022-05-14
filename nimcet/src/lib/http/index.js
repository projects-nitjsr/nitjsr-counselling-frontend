import axios from 'axios';


const http = (URL, METHOD = 'GET', PAYLOAD = {}, HEADERS = {}, CREDENTIALS = true) => {

    return axios({
        method: METHOD,
        url: URL,
        data: PAYLOAD,
        headers: HEADERS,
        withCredentials: CREDENTIALS
    });
}

export default http;