import { createAsyncThunk } from "@reduxjs/toolkit";

import callApi from "../../utils/callApi";

export const fetchTasksList = createAsyncThunk(
  "tasks/list",
  async (args, {}) =>
  {
    const response = await callApi({ url: "/products", method: "get" });
    return response
  }
)