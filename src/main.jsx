import { createRoot } from "react-dom/client";
import { GlobalStyles } from "./main.styled";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./view/Home/Home";
import { Contact } from "./view/Contact/Contact";
import { Info } from "./view/Info/Info";
import { PriceList } from "./view/PriceList/PriceList";
import { Reviews } from "./view/Reviews/Reviews";
import { Map } from "./view/Map/Map";
import { Alert } from "./view/Alert/Alert";

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
        path: "/info",
        element: <Info />,
      },
      {
        path: "/pricelist",
        element: <PriceList />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/map",
        element: <Map />,
      },
      {
        path: "/alert",
        element: <Alert />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyles />
    <RouterProvider router={router} />
  </>
);
