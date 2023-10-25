import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from "react-redux";
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from '@mui/material/CssBaseline';

import store from './_app/store.ts'; 
import router from './routes/index.tsx';

import GlobalStylesComoponet from "./stylesheet/globalStyles.tsx"
import theme from './stylesheet/customTheme.tsx';

import { fetchTasksList } from './reducers/thunks/task.ts';

// fetch task only for once
store.dispatch(fetchTasksList());

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Fragment>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router}  />
        <GlobalStylesComoponet />
      </ThemeProvider> 
    </Provider>
  </React.Fragment>
)
  
