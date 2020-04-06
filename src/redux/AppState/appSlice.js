import { createSlice } from '@reduxjs/toolkit';
import Client from '../../utils/HTTPClient';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    isPortrait: true,
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

export const selectIsPortrait = (state) => state.app.isPortrait;
export const selectImages = (state) => state.app.images;
export const selectPage = (state) => state.app.currentPage;
export const selectQuery = (state) => state.app.currentQuery;
export const selectResultCount = (state) => state.app.resultsFound;

export const { getImagesSuccess, getImagesFail } = appSlice.actions;
export default appSlice.reducer;

export const fetchImages = (query, page) => async (dispatch) => {
  let images;
  let totalResults;
  try {
    const data = await Client.pixabayRequest(query, page);
    if (data.error) {
      throw Error(JSON.stringify(data.error));
    }
    images = data.hits;
    totalResults = data.totalHits;
  } catch (e) {
    const { message } = JSON.parse(e);
    dispatch(getImagesFail(message));
  }

  dispatch(getImagesSuccess({ images, totalResults, query, page }));
};
