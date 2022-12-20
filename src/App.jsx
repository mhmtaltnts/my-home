
import LayoutOne from "./layouts/LayoutOne"
import {Home, ErrorPage, Contact} from "./pages"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ColorContext from './context/ColorContext';
import theme from './theme';
import { useContext } from "react";

const router = createBrowserRouter([
  {    
    element: <LayoutOne />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);


function App() {
  const {colorMode} = useContext(ColorContext)

  return (
    <>
      <ThemeProvider theme={colorMode === "light"? theme.light : theme.dark}>
          <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
