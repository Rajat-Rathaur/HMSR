import { useEffect, useState } from "react";
import NavButton from "../mui/NavButton";

import { useSnackbar } from "../hooks/useSnackbar";
import { useLocation, useNavigate } from 'react-router-dom';
import PortalPopup from "./PortalPopup";
import Popup from "./popups/Popup";
import SideDrawer from "../mui/SideDrawer";
import { Button } from '@mui/material';
import {
  ExitToApp, DateRange, Person, Person4, Payment,
  AddBusiness, Home, Verified, Feedback, Notifications,
  ManageAccounts, Bed, PersonAdd
} from '@mui/icons-material'

const NavBar = () => {
  const { handleSnackbarOpen } = useSnackbar();

  const location = useLocation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState('');
  const [logoutPopup, setLogoutPopup] = useState(false);

  const openLogoutPopup = () => {
    setLogoutPopup(true);
  }

  const role = sessionStorage.getItem('role');

  const closeLogoutPopup = () => {
    setLogoutPopup(false);
  }
  const onLogout = () => {
    sessionStorage.clear();
    navigate('/login');
    handleSnackbarOpen('Logged Out Successfully', 'success')
  }

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);

  // useEffect(() => {
  //   const scrollAnimElements = document.querySelectorAll(
  //     "[data-animate-on-scroll]"
  //   );
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       for (const entry of entries) {
  //         if (entry.isIntersecting || entry.intersectionRatio > 0) {
  //           const targetElement = entry.target;
  //           targetElement.classList.add(styles.animate);
  //           observer.unobserve(targetElement);
  //         }
  //       }
  //     },
  //     {
  //       threshold: 0.15,
  //     }
  //   );

  //   for (let i = 0; i < scrollAnimElements.length; i++) {
  //     observer.observe(scrollAnimElements[i]);
  //   }

  //   return () => {
  //     for (let i = 0; i < scrollAnimElements.length; i++) {
  //       observer.unobserve(scrollAnimElements[i]);
  //     }
  //   };
  // }, []);

  const userTabs = [
    {
      icon: <Home />,
      name: "Home",
      active: currentPage === '/home',
      location: "/home"
    },
    {
      icon: <AddBusiness />,
      name: "Services",
      active: currentPage === '/services',
      location: "/services"
    },
    {
      icon: <Payment />,
      name: "Payments",
      active: currentPage === '/payments',
      location: "/payments"
    },
    {
      icon: <DateRange />,
      name: "Attendance",
      active: currentPage === '/attendance',
      location: "/attendance"
    },
    {
      icon: <Feedback />,
      name: "Feedback",
      active: currentPage.startsWith('/feeds'),
      location: "/feeds?tab=Complaint"
    },
    {
      icon: <Notifications />,
      name: "Notification",
      active: currentPage === '/notifications',
      location: "/notifications"
    }
  ];

  return (
    <>
      <SideDrawer tabs={userTabs} header={true} logout={true} onLogout={onLogout} />

      <nav className=" hidden tab:flex tab:w-[300px] bg-slate-100 fixed h-screen overflow-y-auto">
        <div className="flex flex-col w-full space-y-5">
          <div className="flex flex-row w-full justify-center pb-5 border-b-2 p-5">
            <img
              className=" w-14 h-14"
              alt=""
              src="/ellipse-1.svg"
            // data-animate-on-scroll
            />
            <div className=" hidden tab:flex flex-col justify-center tab:px-1 xl:px-4 w-full ">
              <h3 className="flex w-full text-gray-850 font-medium text-lg">Anna George</h3>
              <p className="flex text-slate-400 font-medium text-sm ">
                HN-512
              </p>
            </div>
            <span className="hidden xl:flex items-center">
              <Verified className="text-green-700" />
            </span>
          </div>

          {role === 'user' && userTabs.map((tab, index) => (
            <NavButton key={index} icon={tab.icon} name={tab.name} active={tab.active} location={tab.location} />
          ))}

          {role === 'admin' &&
            <>
              <NavButton icon={<Home />} name={'Home'} active={currentPage.startsWith('/home')} location={'/home'} />
              <p className="lb-p mx-4 ">Hostelite</p>
              <NavButton icon={<Person />} name={'Hostelite'} active={currentPage === ('/hostelite')} location={'/hostelite'} />
              <NavButton icon={<PersonAdd />} name={'Hostelite Enrollment'} active={currentPage.startsWith('/hosteliteEnrollment')} location={'/hosteliteEnrollment'} />
              <p className="lb-p mx-4 ">Employee</p>
              <NavButton icon={<Person4 />} name={'Employee'} active={currentPage === ('/employee')} location={'/employee'} />
              <NavButton icon={<PersonAdd />} name={'Employee Enrollment'} active={currentPage.startsWith('/employeeEnrollment')} location={'/employeeEnrollment'} />
              <p className="lb-p mx-4 ">Branch</p>
              <NavButton icon={<Bed />} name={'Rooms'} active={currentPage.startsWith('/rooms')} location={'/rooms'} />
              <NavButton icon={<Payment />} name={'Finance'} active={currentPage.startsWith('/finance')} location={'/finance'} />
              <NavButton icon={<Feedback />} name={'Request'} active={currentPage.startsWith('/request')} location={'/request'} />
              <NavButton icon={<Notifications />} name={'Notifications'} active={currentPage.startsWith('/notifications')} location={'/notifications'} />
            </>
          }

          <hr className="bg-gray-300 h-[2px] " />

          <div className="px-5">
            <NavButton icon={<ManageAccounts />} name={'User Settings'} active={currentPage.startsWith('/updateDetails')} location={'/updateDetails?tab=Update+Details'} />
            <div className="hidden tab:flex items-center justify-center">
              <Button
                color="error"
                fullWidth
                size="large"
                sx={{ paddingY: '12px', backgroundColor: '#fee2e2' }}
                end={<ExitToApp sx={{ marginLeft: '8px' }} />}
                onClick={openLogoutPopup}
              >Logout</Button>
            </div>
          </div>
        </div>
      </nav>
      <>
        {logoutPopup &&
          <PortalPopup overlayColor="rgba(0, 0, 0, 0.7)" placement="Centered" onOutsideClick={closeLogoutPopup} >
            <Popup heading='Do you want to Logout ?' subText='You will be logged out of the session.' icon={'/icons/edit.svg'} onClose={closeLogoutPopup} onConfirm={onLogout} />
          </PortalPopup>}
      </>
    </>

  );
};

export default NavBar;
