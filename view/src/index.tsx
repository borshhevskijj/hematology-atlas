// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { createBrowserRouter, RouterProvider, createRoutesFromElements } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HematopoiesisType from "./HematopoiesisComponent/HematopoiesisType";
// import reportWebVitals from "./reportWebVitals";
// import SearchPage from "./searchComponent/SearchPage";

// import SearchComponent from "./searchComponent/SearchComponent";
// import HomePage from "./homePage/HomePage";

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// const router = createBrowserRouter([
//   { element: <HomePage /> },
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "search/:name",
//     element: <SearchPage />,
//   },
//   {
//     path: "hematopoiesis/:type",
//     element: <HematopoiesisType />,
//   },
// ]);

// root.render(
//   <React.StrictMode>
//     <App />
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
