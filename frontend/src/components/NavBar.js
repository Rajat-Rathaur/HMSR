import { useMemo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PaymentIcon from '@mui/icons-material/Payment';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import HomeIcon from '@mui/icons-material/Home';
import VerifiedIcon from '@mui/icons-material/Verified';
import FeedbackIcon from '@mui/icons-material/Feedback';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NavButton from "../mui/NavButton";
import { useLocation } from 'react-router-dom';

const NavBar = () => {
  const navBarHeight = "850px";
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState('');
  const location = useLocation();

  useEffect(() => {
    setCurrentPage(location.pathname);
    console.log(location.pathname);
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

  return (
    <>
      <div className="relative flex w-80 bg-stone-100 h-full">
        <div className="relative flex-col flex w-full p-5 space-y-5">
          <div>
            <div className="flex flex-row w-full items-center justify-center mb-5">

              <img
                className="rounded w-14 h-14"
                alt=""
                src="/ellipse-1.svg"
              // data-animate-on-scroll
              />
              <div className="flex flex-col px-4 w-full">
                <h3 className="flex w-full text-gray-850 font-medium text-lg">Anna George</h3>
                <p className="text-slate-400 font-medium text-sm">
                  HN-512
                </p>
              </div>
              <VerifiedIcon className="text-green-700" />
            </div>
            <div className="flex-none bg-gray-300 h-[1.5px] " />
          </div>

          <NavButton icon={<HomeIcon />} name={'Home'} active={currentPage === '/home'} location={'/home'} />
          <NavButton icon={<ManageAccountsIcon />} name={'Update Details'} active={currentPage === '/updateDetails'} location={'/updateDetails'} />
          <NavButton icon={<AddBusinessIcon />} name={'Services'} active={currentPage === '/services'} location={'/services'} />
          <NavButton icon={<NotificationsIcon />} name={'Notification'} active={currentPage === '/notification'} location={'/notification'} />
          <NavButton icon={<FeedbackIcon />} name={'Requests'} active={currentPage === '/requests'} location={'/requests'} />
          <NavButton icon={<PaymentIcon />} name={'Payments'} active={currentPage === '/payments'} location={'/payments'} />
          <NavButton icon={<DateRangeIcon />} name={'Attendance'} active={currentPage === '/attendance'} location={'/attendance'} />
          <NavButton icon={<NotificationsIcon />} name={'Notification'} active={currentPage === '/notifications'} location={'/notifications'} />

          <div className="bg-gray-300 h-[1.5px] " />

          <div className="flex items-center justify-center py-10">
            <Button color="error" fullWidth size="large" sx={{ paddingY: '12px', backgroundColor: '#fee2e2' }} endIcon={<ExitToAppIcon sx={{ marginLeft: '8px' }} />}>Logout</Button>
          </div>

        </div>


      </div >
    </>
  );
};

export default NavBar;
