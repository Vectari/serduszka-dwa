import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./view/Home/Home";
import { Contact } from "./view/Contact/Contact";
import { Info } from "./view/Info/Info";
import { PriceList } from "./view/PriceList/PriceList";
import { Reviews } from "./view/Reviews/Reviews";
import { Map } from "./view/Map/Map";
import { Alert } from "./view/Alert/Alert";
import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import { Footer } from "./components/Footer/Footer";
import { AlertComponent } from "./components/AlertComponent/AlertComponent";

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  line-height: 1.6;
  font-family: "Roboto", sans-serif;
  background-color: ${theme.background};
  color: ${theme.text_on_background};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;

  /* Desktop */
  @media (min-width: 1024px) {
    font-size: 18px;
    max-width: 1200px;
    margin: 0 auto;
  }

  /* Tablet */
  @media (max-width: 1023px) {
    font-size: 16px;
    padding: 0 20px;
  }

  /* Mobile */
  @media (max-width: 767px) {
    font-size: 14px;
    padding: 0 10px;
  }
}`;

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <AlertComponent />
        <NavBar />
        <Outlet />
        <Footer />
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
