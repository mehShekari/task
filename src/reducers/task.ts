import { createSlice } from "@reduxjs/toolkit";
import { fetchTasksList } from "./thunks/task";

type initialStateType = {
  data: []
  status: 'idle' | "success" | "error",
  error: object | null
}

const initialState: initialStateType =
{
  data: [],
  status: "idle",
  error: null
};

const taskSlice = createSlice({
  name: "task-slice",
  initialState,
  reducers:
  {
    addToTask: (state, action) => {},
    editTask: (state, action) => {},
    deleteTask: (state, action) => {}
  },

  extraReducers(builder) {
    builder
      .addCase(fetchTasksList.fulfilled, (state, action) =>
      {
        console.log(action);
      })
  },
})

export const {
  addToTask,
  editTask ,
  deleteTask
} = taskSlice.actions;
export default taskSlice.reducer;