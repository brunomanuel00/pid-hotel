import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import User from "../pages/user/User";
import Admin from "../pages/admin/Admin";
import CreateUser from "../pages/admin/CreateUser";
import CreateRoom from "../pages/admin/CreateRoom";
import TableRoom from "../pages/admin/TableRooms";
import TableUser from "../pages/admin/TableUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: 'create-user',
        element: <CreateUser />
      },
       {
        path: 'create-room',
        element: <CreateRoom />
      },
      {
        path: 'users',
        element: <TableUser />
      },
      {
        path: 'rooms',
        element: <TableRoom />
      }
    ]
  },
]);

export default router