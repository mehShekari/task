import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from "@mui/material/styles"

import store from './_app/store.ts'; 
import router from './routes/index.tsx';

import GlobalStylesComoponet from "./stylesheet/globalStyles.tsx"
import theme from './stylesheet/customTheme.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}  />
        <GlobalStylesComoponet />
      </ThemeProvider> 
    </Provider>
  </React.StrictMode>,
)
