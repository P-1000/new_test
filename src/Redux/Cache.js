// utilsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const sliceName = 'utils';

const initialState = {
  someData: null,
  anotherData: [],
};

const utilsSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setSomeData: (state, action) => {
      state.someData = action.payload;
    },
    addAnotherData: (state, action) => {
      state.anotherData.push(action.payload);
    },
  },
});

export const { setSomeData, addAnotherData } = utilsSlice.actions;
export default utilsSlice.reducer;
