import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Profile from "./pages/Profile/Profile";
import PostDetails from "./pages/PostDetails/PostDetails";
import NotFound from "./pages/NotFound/NotFound";
import { Bounce, ToastContainer } from "react-toastify";
import AuthProvider from "./Context/Auth.context";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";

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
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
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
