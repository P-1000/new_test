import { createSlice } from '@reduxjs/toolkit';

const sliceName = 'profile';

const initialState = {
  userProfile: {},
};

const profileSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
  },
});

export const { setUserProfile } = profileSlice.actions;
export default profileSlice.reducer;
