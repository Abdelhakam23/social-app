import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Profile from "./pages/Profile/Profile";
import PostDetails from "./pages/PostDetails/PostDetails";
import NotFound from "./pages/NotFound/NotFound";
import { Bounce, ToastContainer } from "react-toastify";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
      element: <Profile />,
    },
    {
      path: "/post/:id",
      element: <PostDetails />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}/>

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
    </>
  );
}

export default App;
