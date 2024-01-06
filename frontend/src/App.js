import { useEffect } from "react";
import { Snackbar, Alert } from '@mui/material';
import { useSnackbar } from "./hooks/useSnackbar";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import useAuthenticate from "./hooks/useAuthenticate"

import Index from "./pages/Index";
import Login from "./pages/Login";
import DefaultPage from "./pages/DefaultPage";

import UserHome from "./pages/user/Home";
import Services from "./pages/user/Services";
import Payments from "./pages/user/Payments";
import Attendance from "./pages/user/Attendance";
import Feeds from "./pages/user/Feeds";
import EditDetails from "./pages/user/EditDetails";
import Notifications from "./pages/user/Notifications";


import AdminHome from "./pages/admin/Home";
import AddHostelite from "./pages/admin/AddHostelite";

import TopNavBar from "./components/TopNavBar";
import NavBar from "./components/NavBar";

function App() {
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case '/':
        break;
      case "/login":
        title = "Dask - Login";
        metaDescription = "Welcome to the Home page. Explore personalized content and features based on your role.";
        break;
      case "/home":
        title = "Dask - Home";
        metaDescription = "Welcome to the Home page. Explore personalized content and features based on your role.";
        break;
      case "/updateDetails":
        title = "Dask - Update Details";
        metaDescription = "Update your personal details and preferences. Keep your information up-to-date for a better user experience.";
        break;
      case "/services":
        title = "Dask - Services";
        metaDescription = "Discover and access a variety of services available to you. Explore the different service offerings tailored to your needs.";
        break;
      case "/payments":
        title = "Dask - Payments";
        metaDescription = "Manage your payments and financial transactions. Stay informed about your payment history and make secure transactions.";
        break;
      case "/attendance":
        title = "Dask - Attendance";
        metaDescription = "Keep track of your attendance records. View your attendance history and stay updated on your attendance status.";
        break;
      case "/feeds":
        title = "Dask - Feeds";
        metaDescription = "Stay connected with the latest updates and feeds. Explore a dynamic feed of information, news, and events.";
        break;
      case "/notifications":
        title = "Dask - Notifications";
        metaDescription = "Receive important notifications and updates. Stay informed about critical announcements and personalized messages.";
        break;
      default:
        title = "404 Page Not Found";
        metaDescription = "Default description for pages without specific titles.";
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

  const { isUser, isAdmin } = useAuthenticate();
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
        <Route path="/" element={<Index />} />
      </Routes>

      {(isUser || isAdmin) && <div className="flex relative h-full ">
        <NavBar />
        <div className="w-full relative min-h-screen tab:ml-[300px]">
          <TopNavBar />

          {isUser &&
            <Routes>
              <Route path="*" element={<DefaultPage />} />
              <Route path="/home" element={<UserHome />} />
              <Route path="/updateDetails" element={<EditDetails />} />
              <Route path="/services" element={<Services />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/feeds" element={<Feeds />} />
              <Route path="/notifications" element={<Notifications />} />
            </Routes>
          }

          {isAdmin &&
            <Routes>
              <Route path="*" element={<DefaultPage />} />
              <Route path="/home" element={<AdminHome />} />
              {/* <Route path="/hostelite" element={<Hostelite />} /> */}
              <Route path="/hosteliteEnrollment" element={<AddHostelite />} />
              {/* <Route path="/employee" element={<Employee />} /> */}
              {/* <Route path="/employeeEnrollment" element={<EmployeeEnrollment />} /> */}
              {/* <Route path="/finance" element={<Finance />} /> */}
              {/* <Route path="/rooms" element={<Rooms />} /> */}
              {/* <Route path="/request" element={<Request />} /> */}
              <Route path="/notification" element={<Notifications />} />
            </Routes>
          }
        </div>
      </div >
      }
    </>
  );
}

export default App;
