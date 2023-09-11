import { configureStore, combineReducers } from '@reduxjs/toolkit';
import attendanceReducer, { setInitialAttendance } from './AttendanceSlice';
import profileReducer, { setUserProfile } from './ProfileSlice';
import gradeReducer, { setGrades } from './GradeSlice';
import utilsReducer, { setSomeData, addAnotherData } from './Cache';

const rootReducer = combineReducers({
  attendance: attendanceReducer,
  profile: profileReducer,
  grades: gradeReducer,
  utils: utilsReducer, // Include the utils slice in the rootReducer
});

const store = configureStore({
  reducer: rootReducer,
});

// Check if attendance data is in localStorage and initialize the store with it
const storedAttendanceData = localStorage.getItem('attendance');
const storedUserProfile = localStorage.getItem('user');
const storedGradesData = localStorage.getItem('grades');

if (storedAttendanceData) {
  store.dispatch(setInitialAttendance(JSON.parse(storedAttendanceData)));
}

if (storedUserProfile) {
  store.dispatch(setUserProfile(JSON.parse(storedUserProfile)));
}

if (storedGradesData) {
  store.dispatch(setGrades(JSON.parse(storedGradesData)));
}

// Initialize the "utils" slice with default values
store.dispatch(setSomeData('Default Some Data'));
store.dispatch(addAnotherData('Default Another Data'));

export default store;
