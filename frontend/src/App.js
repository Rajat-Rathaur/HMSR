import { useEffect } from "react";
import { Snackbar, Alert } from '@mui/material';
import { useSnackbar } from "./hooks/useSnackbar";
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
import EditDetails from "./pages/user/EditDetails";
import Notifications from "./pages/user/Notifications";

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

  const role = sessionStorage.getItem('role');

  useEffect(() => {
    if (!role) {
      sessionStorage.clear();
      navigate('/login')
    }
  }, [navigate, role])

  useEffect(() => {
    if (pathname === '/login')
      sessionStorage.clear();
  }, [pathname])

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

      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>

      {role &&
        <div className="flex relative">
          <NavBar />
          <div className="w-full relative min-h-screen">
            <TopNavBar />

            {role === 'Hostelite' &&
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/updateDetails" element={<EditDetails />} />
                <Route path="/services" element={<Services />} />
                <Route path="/payments" element={<Payments />} />
                <Route path="/attendance" element={<Attendance />} />
                <Route path="/feeds" element={<Feeds />} />
                <Route path="/notifications" element={<Notifications />} />
              </Routes>
            }


            {role === 'Admin' &&
              <Routes>
                <Route path="/home" element={<Home />} />
              </Routes>
            }
          </div>
        </div >
      }
    </>
  );
}

export default App;
