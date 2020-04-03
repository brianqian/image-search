import { PIXABAY_KEY } from 'react-native-dotenv';
const API_URL = 'https://pixabay.com/api/';

const request = async (endpoint, method, body) => {
  const resp = await fetch(endpoint);
  if (resp.status >= 300) {
    console.error('fetch error', resp, resp.status, resp.message);
    return { error: { status: resp.status, message: resp.message } };
  }
  const data = await resp.json();
  return data;
};

const pixabayRequest = async (query, page = 1) => {
  if (!query) return;
  let formattedQuery = query.trim();
  if (!formattedQuery) {
    return { error: { status: 400, message: 'Please enter something in the search!' } };
  }

  const url = `${API_URL}?key=${PIXABAY_KEY}&q=${encodeURIComponent(query)}&page=${page}`;

  const data = await request(url);
  return data;
};

const Client = {
  request,
  pixabayRequest,
};

export default Client;

const test = (p1, p2, p3) => {
  console.log(p1, p2, p3);
};
const tester = ['one', undefined];
test(...tester);
