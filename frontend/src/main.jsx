import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./app/store/store.js";
import theme from "./theme/index.js";
import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import {
  ProtectedRoute as AuthLayout,
  PublicViewBlog,
} from "./components/index.js";
import {
  DeleteProfile,
  ForgotPassword,
  Login,
  Profile,
  ResetPassword,
  Signup,
  UpdateProfile,
  BlogsList,
  CreateBlog,
  HomePage,
  BlogsPage,
  NotFoundPage,
  VerifyOTP,
  ToolsPage,
} from "./page/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "blog/:slug",
        element: <PublicViewBlog />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
      {
        path: "blogs",
        element: <BlogsPage />,
      },
      {
        path: "tools",
        element: <ToolsPage />,
      },
      {
        path: "login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "verify-otp",
        element: (
          <AuthLayout authentication={false}>
            <VerifyOTP />
          </AuthLayout>
        ),
      },
      {
        path: "forgot-password",
        element: (
          <AuthLayout authentication={false}>
            <ForgotPassword />
          </AuthLayout>
        ),
      },
      {
        path: "reset-password/:resetToken",
        element: (
          <AuthLayout authentication={false}>
            <ResetPassword />
          </AuthLayout>
        ),
      },
      {
        path: "profile",
        element: (
          <AuthLayout authentication={true}>
            <Profile />
          </AuthLayout>
        ),
        children: [
          {
            path: "update",
            element: (
              <AuthLayout authentication={true}>
                <UpdateProfile />
              </AuthLayout>
            ),
          },
          {
            path: "delete",
            element: (
              <AuthLayout authentication={true}>
                <DeleteProfile />
              </AuthLayout>
            ),
          },
          {
            path: "blogs/list",
            element: (
              <AuthLayout authentication={true}>
                <BlogsList />
              </AuthLayout>
            ),
          },
          {
            path: "blogs/create",
            element: (
              <AuthLayout authentication={true}>
                <CreateBlog />
              </AuthLayout>
            ),
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ReduxProvider store={store}>
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <RouterProvider router={router} />
    </ChakraProvider>
  </ReduxProvider>
);
