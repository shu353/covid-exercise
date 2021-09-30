var axios = require("axios").default;

var options = {
  method: "GET",
  url: "https://covid-19-data.p.rapidapi.com/country/code",
  params: { code: "cr" },
  headers: {
    "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
    "x-rapidapi-key": process.env.APIKEY,
  },
};

const getDetails = async (req, res) => {
  const apiResponse = await axios.get(options);
  return res.status(200).json(apiResponse.data);
};

module.exports = {
  getDetails,
};
