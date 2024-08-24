import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// pages
import ChatPage from "./pages/ChatPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";

// Dependencies
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// context
import { UserProvider } from "./context/UserContext.tsx";
import { WebSocketProvider } from "./context/WebSocketContext.tsx";

const routes = [
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/chat",
    element: <ChatPage />,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <WebSocketProvider>
        <RouterProvider router={router} />
      </WebSocketProvider>
    </UserProvider>
  </StrictMode>
);
