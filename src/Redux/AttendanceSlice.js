// AttendanceSlice.js
import { createSlice } from '@reduxjs/toolkit';

const sliceName = 'attendance';

const initialState = {
  initialAttendance: {},
};

const attendanceSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setInitialAttendance: (state, action) => {
      state.initialAttendance = action.payload;
    },
  },
});

export const { setInitialAttendance } = attendanceSlice.actions;
export default attendanceSlice.reducer; // Export the reducer
