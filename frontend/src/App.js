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

import {
  RecoilRoot, useRecoilState,
} from 'recoil';
import { hosteliteState } from "./recoil/state";
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


  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarType, setSnackbarType] = useState('');

  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false);
  };

  const handleSnackbarOpen = (message, type = 'info') => {
    setSnackbarMessage(message)
    setIsSnackbarOpen(true);
    setSnackbarType(type)
  }


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

      <RecoilRoot>
        <div className="flex relative">
          {loggedIn && <div className="lg:w-[280px] xl:w-[320px] ">
            <NavBar />
          </div>
          }
          <div className="w-full relative">
            <TopNavBar />
            <Routes>
              <Route path="/" element={<Login openSnackbar={handleSnackbarOpen} />} />
              <Route path="/home" element={<Home />} />
              <Route path="/updateDetails" element={<EditDetailsExterior />} />
              <Route path="/services" element={<Services openSnackbar={handleSnackbarOpen} />} />
              <Route path="/complaints" element={<Complaints />} />
              <Route path="/notifications" element={<NotificationsExterior />} />
              <Route path="/payments" element={<PaymentsExterior />} />
              <Route path="/attendance" element={<AttendanceExterior />} />
            </Routes>
          </div>
        </div >
      </RecoilRoot>

    </>
  );
}
export default App;
