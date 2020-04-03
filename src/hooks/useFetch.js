import { useReducer, useState, useEffect } from 'react';
import Client from '../utils/HTTPClient';

const initialState = {
  data: [],
  isLoading: false,
  error: {
    status: '',
    message: '',
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.payload, isLoading: false };
    case 'FETCHING':
      return { ...state, isLoading: true };
    case 'ERROR':
      return { ...state, error: action.payload, isLoading: false };
    default:
      console.error('USE FETCH ERROR');
  }
};

const useFetch = () => {
  const [query, setQuery] = useState({ param: '', page: '' });
  const [state, dispatch] = useReducer(reducer, initialState);

  const { param, page } = query;
  let isMounted = true;

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCHING' });
      const data = await Client.pixabayRequest(query.param, query.page);
      if (data?.error) {
        dispatch({ type: 'ERROR', payload: data });
      } else if (isMounted) {
        dispatch({ type: 'SET_DATA', payload: data });
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [param, page]);

  const { data, error, isLoading } = state;
  return { data, error, isLoading, setQuery };
};

export default useFetch;
