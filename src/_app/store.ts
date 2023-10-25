import { configureStore } from "@reduxjs/toolkit"
import tasksSlice from "../reducers/task";

const store = configureStore({
  reducer:
  {
    tasksReducer: tasksSlice
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;