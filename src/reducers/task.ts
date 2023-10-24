import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllTasks = createAsyncThunk(
  'product/fetchData', 
  async (service, { getState }) =>
  {
    return {}
  }
);

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
  }
})

export const {
  addToTask,
  editTask ,
  deleteTask
} = taskSlice.actions;
export default taskSlice.reducer;