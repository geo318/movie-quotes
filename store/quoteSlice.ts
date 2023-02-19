import { createSlice } from '@reduxjs/toolkit';
import { FeedData } from 'types';

const initialQuoteState = {
  quote: {} as FeedData,
};

const quoteSlice = createSlice({
  name: 'quote',
  initialState: initialQuoteState,
  reducers: {
    setQuote(state, action: { payload: FeedData }) {
      state.quote = action.payload;
    },
  },
});

export const quoteActions = quoteSlice.actions;

export default quoteSlice.reducer;
