import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// routes
import Home from "./routes/Home.tsx";
import Shop from "./routes/Shop.tsx";
import About from "./routes/About.tsx";
import Contact from "./routes/Contact.tsx";
import ErrorPage from "./routes/ErrorPage.tsx";
import Register from "./routes/Register.tsx";
import Login from "./routes/Login.tsx";

// components
import Search from "./components/Search.tsx";

// react-router -- config
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/signin",
        element: <Login/>
      },
      // search params
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider router={router} />
  </>
);
