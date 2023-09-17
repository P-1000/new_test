import { createSlice } from '@reduxjs/toolkit';

const sliceName = 'grades';

const initialState = {
  grades: [],
};

const gradeSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setGrades: (state, action) => {
      state.grades = action.payload;
    },
  },
});

export const { setGrades } = gradeSlice.actions;
export default gradeSlice.reducer;
