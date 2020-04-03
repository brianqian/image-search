import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    isPortrait: true,
    screenWidth: 0,
    screenHeight: 0
  },
  reducers: {
    rotateScreen = (state) => {
      state.isPortrait = !state.isPortrait
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = appSlice.actions;

export default appSlice.reducer;
