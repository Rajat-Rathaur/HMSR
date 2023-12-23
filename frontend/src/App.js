import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import HomeExterior1 from "./pages/user/home";
import RequestExterior from "./pages/RequestExterior";
import PaymentsExterior from "./pages/PaymentsExterior";
import AttendanceExterior from "./pages/AttendanceExterior";
import NotificationsExterior from "./pages/NotificationsExterior";
import ServicesExterior from "./pages/ServicesExterior";
import EditDetailsExterior from "./pages/EditDetailsExterior";
import { useEffect, useState } from "react";

import { Snackbar, Alert } from '@mui/material';
import NavBar from "./components/NavBar";

function App() {
  // const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  // useEffect(() => {
  //   if (action !== "POP") {
  //     window.scrollTo(0, 0);
  //   }
  // }, [action, pathname]);

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
      case "/request":
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
  useEffect(() => {
    if (sessionStorage.getItem('token'))
      setLoggedIn(true)
    else
      setLoggedIn(false);

    if (pathname === '/')
      sessionStorage.clear();
    console.log("object");
  }, [sessionStorage.getItem('token'), pathname])

  return (

    <>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={5000}
      // onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarType} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
      <div className="flex">
        <div className="w-[320px] ">
          {loggedIn &&
            <NavBar />
          }
        </div>
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Login openSnackbar={handleSnackbarOpen} />} />
            <Route path="/home" element={<HomeExterior1 />} />
          </Routes>
        </div>
      </div>
    </>
    // <Route path="/notifications" element={<NotificationsExterior />} />
    // <Route path="/payments" element={<PaymentsExterior />} />
    // <Route path="/services" element={<ServicesExterior />} />
    // <Route path="/request" element={<RequestExterior />} />
    // <Route path="/update" element={<EditDetailsExterior />} />
    // <Route path="/attendance" element={<AttendanceExterior />} />
  );
}
export default App;
