import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./assets/Components/MainLayout";
import Home from "./assets/Components/Home";
import ListedBook from "./assets/Components/ListedBook";
import PageRead from "./assets/Components/PageRead";
import BookDetail from "./assets/Components/BookDetail";
import Eror from "./assets/Components/Eror";
import Review from "./assets/Components/Review";
import COntact from "./assets/Components/COntact";

localStorage.removeItem("book-read-collection");
localStorage.removeItem("book-wish-collection");

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Eror></Eror>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedBooks",
        element: <ListedBook></ListedBook>,
        loader: () => fetch("/fakedata.json"),
      },

      {
        path: "/book/:id",
        element: <BookDetail></BookDetail>,
        loader: () => fetch("/fakedata.json"),
      },
      {
        path: "/contact",
        element: <COntact></COntact>,
      },
      {
        path: "/review",
        element: <Review></Review>,
      },
    ],
  },
  {
    path: "/pageRead",
    element: <PageRead></PageRead>,
    loader: () => fetch("/fakedata.json"),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
