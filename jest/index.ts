// import fetch from "node-fetch";
const axios = require('axios');

const run = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    
    const resp = await axios(url);
    console.log(resp.data);

    return resp.data;
};

export default run;