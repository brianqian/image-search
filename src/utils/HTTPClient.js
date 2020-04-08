import { PIXABAY_KEY } from 'react-native-dotenv';
const API_URL = 'https://pixabay.com/api/';

const request = async (endpoint) => {
  try {
    const resp = await fetch(endpoint);
    if (resp.status >= 300) {
      throw Error(JSON.stringify(resp));
    }
    const data = await resp.json();
    return data;
  } catch (err) {
    const resp = JSON.parse(err);
    console.error('fetch error', resp, resp.status, resp.message);
    return { error: { status: resp.status, message: resp.message } };
  }
};

const pixabayRequest = async (query, page = 1) => {
  let formattedQuery = encodeURIComponent(query);
  if (!formattedQuery) {
    return { error: { status: 400, message: 'Please enter something in the search!' } };
  }
  const url = `${API_URL}?key=${PIXABAY_KEY}&q=${formattedQuery}&page=${page}`;
  const data = await request(url);
  return data;
};

const Client = {
  request,
  pixabayRequest,
};

export default Client;
