const axios = require('axios');

const getApi = async () => {
    try {
      const data = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
      return data;
    } catch (err) {
        console.log(err);
    }
}

module.exports = getApi;