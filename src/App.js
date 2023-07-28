import "./styles.css";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import NavBar from "./components/NavBar";
import Box from "@mui/material/Box";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <NavBar />
      <Box className={{ Box }}>
        <Outlet />
      </Box>
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/devices",
        element: <About />
      },
      {
        path: "/discover",
        element: <Users />
      }
    ]
  }
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
    </>
  );
}
