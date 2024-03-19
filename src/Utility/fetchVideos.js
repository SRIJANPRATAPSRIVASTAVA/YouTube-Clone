const axios = require('axios');
const BASE_URL = "https://youtube-v31.p.rapidapi.com";
// require('dotenv').config()
const API_KEY = '2a4212a3b4msh3b30bf2d029ec82p10d98fjsn715064200ba1'

const options = {
  method: 'GET',
  url: BASE_URL,
  params: {
    // relatedToVideoId: '7ghhRHRP6t4',
    // part: 'id,snippet',
    // type: 'video',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromApi = async (URL) => {
    console.log(API_KEY);
    const {data} = await axios.get(`${BASE_URL}/${URL}`, options);
    return data;
}