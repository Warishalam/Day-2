const axios = require('axios');

async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log('API Response:', response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();
