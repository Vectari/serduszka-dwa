import { createRoot } from "react-dom/client";
import { StyledBody } from "./main.styled";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./view/Home/Home";
import { Contact } from "./view/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Outlet />
      </>
    ),
    children: [
      {
        index: true,
        element: (
          <>
            <Home />
          </>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        // path: "/signup",
        // element: <SignUp />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StyledBody>
    <RouterProvider router={router} />
  </StyledBody>
);
