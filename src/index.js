import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookingPage from "./Reservations/BookingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>You went far,but you went the wrong way</h1>,
    children: [
      {
        path: "Menu",
        element: <div>Menu</div>,
      },
      {
        path: "Login",
        element: <div>Login</div>,
      },
    ],
  },
  {
    path: "reservations",
    element: <BookingPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
