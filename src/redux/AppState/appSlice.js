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
    setIsPortrait: (state, action) => {
      console.log('isportrait', action.payload);
      state.isPortrait = action.payload;
    },
  },
});

export const selectIsPortrait = (state) => state.app.isPortrait;

export const { getImagesSuccess, getImagesFail, setIsPortrait } = appSlice.actions;
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
