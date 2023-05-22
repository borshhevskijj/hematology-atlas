import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements
} from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HematopoiesisType from './HematopoiesisComponent/HematopoiesisType';
import reportWebVitals from './reportWebVitals';
import SearchPage from './searchComponent/SearchPage';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "search/",
    element: <SearchPage />,
  },
  {
    path: "hematopoiesis/:type",
    element: <HematopoiesisType/>,
  },
]);



root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
