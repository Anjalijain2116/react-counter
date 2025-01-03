// filepath: /d:/react-assignments/appic/react-counter-app/src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice.tsx';
import userReducer from './userSlice.tsx';


const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;