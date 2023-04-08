import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./views/error/ErrorPage";
import SignUp from "./views/auth/SignUp";
import DefaultLayout from "./components/Layouts/DefaultLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/sigup" />,
  },
  {
    path: "/sigup",
    element: (
      <DefaultLayout>
        <SignUp />
      </DefaultLayout>
    ),
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
