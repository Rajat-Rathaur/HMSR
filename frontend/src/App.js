import { useEffect, useLayoutEffect } from "react";
import { Snackbar, Alert } from '@mui/material';
import { useSnackbar } from "./hooks/useSnackbar";
import { useRecoilState } from "recoil";
import { loggedInState } from "./recoil/state";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/user/Home";
import Services from "./pages/user/Services";
import Payments from "./pages/user/Payments";
import Attendance from "./pages/user/Attendance";
import Feeds from "./pages/user/Feeds";

import Notifications from "./pages/user/Notifications";
import EditDetailsExterior from "./pages/EditDetailsExterior";

import NavBar from "./components/NavBar";

import TopNavBar from "./components/TopNavBar";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/homeexterior":
        title = "";
        metaDescription = "";
        break;
      case "/feedbacks":
        title = "";
        metaDescription = "";
        break;
      case "/payments":
        title = "";
        metaDescription = "";
        break;
      case "/attendance":
        title = "";
        metaDescription = "";
        break;
      case "/notifications":
        title = "";
        metaDescription = "";
        break;
      case "/services":
        title = "";
        metaDescription = "";
        break;
      case "/update":
        title = "";
        metaDescription = "";
        break;

      default:
        title = "";
        metaDescription = "";

    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  const [loggedIn, setLoggedIn] = useRecoilState(loggedInState)

  useLayoutEffect(() => {
    if (!sessionStorage.getItem('token')) {
      navigate('/')
      sessionStorage.clear();
    }
    else
      setLoggedIn(true);

  }, [sessionStorage.getItem('token')])

  const { isSnackbarOpen, snackbarMessage, snackbarType, handleSnackbarClose } = useSnackbar();

  return (
    <>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarType}
          sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>

      <div className="flex relative">
        {loggedIn && <NavBar />}
        <div className="w-full relative min-h-screen">
          {loggedIn && <TopNavBar />}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/updateDetails" element={<EditDetailsExterior />} />
            <Route path="/services" element={<Services />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/feeds" element={<Feeds />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
        </div>
      </div >
    </>
  );
}

export default App;
