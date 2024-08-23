import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  holidays: [],
};

const slice = createSlice({
  name: 'holiday',
  initialState,
  reducers: {
    setHolidays(state, action) {
      state.holidays = action.payload;
    },
  },
});

export const { setHolidays } = slice.actions;
export default slice.reducer;
