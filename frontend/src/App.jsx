import { Flex } from "@chakra-ui/react";
import { Footer, Header } from "./components";
import { Outlet, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAccessToken,
  clearError,
  clearMessage,
} from "./app/reducers/userSlice.js";
import { useEffect } from "react";
import {
  fetchAllBlogsPulically,
  loadProfile,
} from "./app/actions/userAction.js";

// Google Analytics
import config from "./config/index.js";
import ReactGA from "react-ga";
const TRACKING_ID = config.GOOGLE_TRACKING_ID;
ReactGA.initialize(TRACKING_ID);

const App = () => {
  const { message, error, accessToken } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // For tracking the each url of website
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    dispatch(fetchAllBlogsPulically());
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadProfile());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
    }
  }, [dispatch, error, message]);

  // Redirection on page loading
  useEffect(() => {
    const checkAccessToken = async () => {
      if (!accessToken) {
        if (window.location.pathname !== "/login") {
          navigate(window.location.pathname);
        }
        return;
      }

      try {
        dispatch(loadProfile());
      } catch (error) {
        if (error.response?.status === 401) {
          dispatch(clearAccessToken());
        }
      }
    };

    checkAccessToken();
  }, [accessToken, dispatch, navigate]);
  return (
    <>
      {/* <ColorModeSwitcher /> */}
      <Flex minH="100vh" flexWrap="wrap" flexDir={"column"}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        <Toaster position="top-right" reverseOrder={false} />
      </Flex>
    </>
  );
};

export default App;
