import {
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/user/Home";
import Services from "./pages/user/Services";
import Complaints from "./pages/user/Complaints";
import PaymentsExterior from "./pages/user/Payments";
import AttendanceExterior from "./pages/AttendanceExterior";
import NotificationsExterior from "./pages/NotificationsExterior";
import EditDetailsExterior from "./pages/EditDetailsExterior";
import { useEffect, useLayoutEffect, useState } from "react";

import { Snackbar, Alert } from '@mui/material';
import NavBar from "./components/NavBar";

import TopNavBar from "./components/TopNavBar";
import { useSnackbar } from "./hooks/useSnackbar";

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
      case "/complaints":
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

  const [loggedIn, setLoggedIn] = useState(false)
  useLayoutEffect(() => {
    if (sessionStorage.getItem('token'))
      setLoggedIn(true)
    else
      setLoggedIn(false);

    if (pathname === '/')
      sessionStorage.clear();


  }, [sessionStorage.getItem('token'), pathname])

  useEffect(() => {
    if (!sessionStorage.getItem('token'))
      navigate('/')

  }, [sessionStorage.getItem('token')])


  const { isSnackbarOpen, snackbarMessage, snackbarType, handleSnackbarClose } = useSnackbar();

  return (
    <>

      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarType} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>

      <div className="flex relative">
        {loggedIn && <NavBar />}
        <div className="w-full relative">
          {loggedIn && <TopNavBar />}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/updateDetails" element={<EditDetailsExterior />} />
            <Route path="/services" element={<Services />} />
            <Route path="/complaints" element={<Complaints />} />
            <Route path="/notifications" element={<NotificationsExterior />} />
            <Route path="/payments" element={<PaymentsExterior />} />
            <Route path="/attendance" element={<AttendanceExterior />} />
          </Routes>
        </div>
      </div >
    </>
  );
}

export default App;
