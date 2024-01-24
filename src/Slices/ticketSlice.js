import { createSlice } from '@reduxjs/toolkit';

const initialState = { ticket: null };

const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    name: 'john',
  },
});

export const { name } = ticketSlice.actions;

export default ticketSlice.reducer;
