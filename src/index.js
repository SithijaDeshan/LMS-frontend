import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Login from "./Pages/Login";
import AdminPanal from "./Pages/admin_panal";
import AdminPanalUser from "./Pages/admin_panal_user";
import AdminPaneBooklending from "./Pages/admin_panel_booklending";
import BookDescription from "./Pages/BookDescription";
import Members from "./Pages/Members";
import BookSelect from "./Pages/BookSelect";
import MemberDetailsUpdate from "./Pages/MemberDetailsUpdate";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "login",
        element: <Login/>,
    },
    {
        path: "admin_panel",
        element: <AdminPanal/>,
    },
    {
        path: "admin_panel_user",
        element: <AdminPanalUser/>,
    },
    {
        path: "admin_panel_booklending",
        element: <AdminPaneBooklending/>,
    },
    {
        path: "BookDescription",
        element: <BookDescription/>,
    },
    {
        path: "Members",
        element: <Members/>,
    },
    {
        path: "BookSelect",
        element: <BookSelect/>,
    },
    {
        path: "MemberDetailsUpdate",
        element: <MemberDetailsUpdate/>,
    },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
