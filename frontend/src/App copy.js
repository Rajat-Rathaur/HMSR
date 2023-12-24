import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import HomeExterior1 from "./pages/user/HomeExterior1";
import RequestExterior from "./pages/RequestExterior";
import PaymentsExterior from "./pages/PaymentsExterior";
import AttendanceExterior from "./pages/AttendanceExterior";
import NotificationsExterior from "./pages/NotificationsExterior";
import ServicesExterior from "./pages/user/Services";
import EditDetailsExterior from "./pages/EditDetailsExterior";
import { useEffect } from "react";

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

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<HomeExterior1 />} />
      <Route path="/request" element={<RequestExterior />} />
      <Route path="/payments" element={<PaymentsExterior />} />
      <Route path="/attendance" element={<AttendanceExterior />} />
      <Route path="/notifications" element={<NotificationsExterior />} />
      <Route path="/services" element={<ServicesExterior />} />
      <Route path="/update" element={<EditDetailsExterior />} />
    </Routes>
  );
}
export default App;
