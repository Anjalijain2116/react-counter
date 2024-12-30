// filepath: /d:/react-assignments/appic/react-counter-app/src/store/counterThunks.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setCount } from './counterSlice';

export const fetchInitialCount = createAsyncThunk(
  'counter/fetchInitialCount',
  async (_, { dispatch }) => {
    const response = await fetch('/api/initialCount');
    const data = await response.json();
    dispatch(setCount(data.count));
  }
);