import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Profile from "./pages/Profile/Profile";
import PostDetails from "./pages/PostDetails/PostDetails";
import NotFound from "./pages/NotFound/NotFound";
import Notifications from "./pages/Notifications/Notifications";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import { Bounce, ToastContainer } from "react-toastify";
import AuthProvider from "./Context/Auth.context";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import AuthRoute from "./components/AuthRoute/AuthRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes>
          <Home />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/signin",
      element: (
        <AuthRoute>
          <SignIn />
        </AuthRoute>
      ),
    },
    {
      path: "/signup",
      element: (
        <AuthRoute>
          <SignUp />
        </AuthRoute>
      ),
    },
    {
      path: "/profile/:id",
      element: (
        <ProtectedRoutes>
          {" "}
          <Profile />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/post/:id",
      element: (
        <ProtectedRoutes>
          {" "}
          <PostDetails />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/notifications",
      element: (
        <ProtectedRoutes>
          <Notifications />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/saved",
      element: (
        <ProtectedRoutes>
          <ComingSoon pageType="saved" />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/events",
      element: (
        <ProtectedRoutes>
          <ComingSoon pageType="events" />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/trending",
      element: (
        <ProtectedRoutes>
          <ComingSoon pageType="trending" />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/settings",
      element: (
        <ProtectedRoutes>
          <ComingSoon pageType="settings" />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/messages",
      element: (
        <ProtectedRoutes>
          <ComingSoon pageType="messages" />
        </ProtectedRoutes>
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </AuthProvider>
    </>
  );
}

export default App;
