import { createSlice } from '@reduxjs/toolkit';
import Client from '../../utils/HTTPClient';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    resultsFound: 0,
    currentQuery: '',
    currentPage: 1,
    images: [],
    status: '',
  },
  reducers: {
    getImagesSuccess: (state, action) => {
      const { images, totalResults, query, page } = action.payload;
      if (page === 1) {
        state.currentQuery = query;
        state.images = [];
        state.resultsFound = totalResults;
        state.currentPage = 1;
      }
      state.currentPage += 1;
      state.images.push(...images);
    },
    getImagesFail: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { getImagesSuccess, getImagesFail } = appSlice.actions;
export default appSlice.reducer;

export const fetchImages = (query, page) => async (dispatch) => {
  let images;
  let totalResults;
  try {
    const data = await Client.pixabayRequest(query, page);
    if (data.error) throw Error(data.message);
    images = data.hits;
    totalResults = data.totalHits;
  } catch (err) {
    dispatch(getImagesFail(err.message));
    return;
  }

  dispatch(getImagesSuccess({ images, totalResults, query, page }));
};
