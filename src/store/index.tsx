// filepath: /d:/react-assignments/appic/react-counter-app/src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice.tsx';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;