import { createSlice } from "@reduxjs/toolkit";


type initialStateType = {
  data: []
}

const initialState: initialStateType =
{
  data: []
};

const taskSlice = createSlice({
  name: "task-slice",
  initialState,
  reducers:
  {
    getAllTasks: (state, action) => {},
    addToTask: (state, action) => {},
    editTask: (state, action) => {},
    deleteTask: (state, action) => {}
  }
})

export const { 
  getAllTasks,
  addToTask,
  editTask ,
  deleteTask
} = taskSlice.actions;
export default taskSlice.reducer;