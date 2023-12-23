import { useMemo, useEffect, useCallback } from "react";
import styles from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navBarHeight = "850px";
  const navigate = useNavigate();

  const onNotificationsClick = useCallback(() => {
    navigate("/notifications");
  }, [navigate]);

  const onAttendanceClick = useCallback(() => {
    navigate("/attendance");
  }, [navigate]);

  const onPaymentsClick = useCallback(() => {
    navigate("/payments");
  }, [navigate]);

  const onRequestsClick = useCallback(() => {
    navigate("/request");
  }, [navigate]);

  const onServicesClick = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  const onUpdateClick = useCallback(() => {
    navigate("/update");
  }, [navigate]);

  const navBarStyle = useMemo(() => {
    return {
      height: navBarHeight,
    };
  }, [navBarHeight]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <>
      <div className="flex w-96">
        fsd
      {/* </div> */}

      {/* <div className={styles.navbar} style={navBarStyle}> */}
        <button className={styles.logout}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <a className={styles.logout1}>Logout</a>
          <div className={styles.logoutChild} />
        </button>
        <button className={styles.notifications} onClick={onNotificationsClick}>
          <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
          <a className={styles.notifications1}>Notifications</a>
        </button>
        <img className={styles.navlineIcon} alt="" src="/line-2-1.svg" />
        <button className={styles.attendance} onClick={onAttendanceClick}>
          <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
          <a className={styles.attendance1}>Attendance</a>
        </button>
        <button className={styles.payments} onClick={onPaymentsClick}>
          <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
          <a className={styles.payments1}>Payments</a>
        </button>
        <button className={styles.requests} onClick={onRequestsClick}>
          <a className={styles.requests1}>Requests</a>
          <img className={styles.iconMsg} alt="" src="/iconmsg.svg" />
        </button>
        <button className={styles.services} onClick={onServicesClick}>
          <img className={styles.iconTasks} alt="" src="/icontasks.svg" />
          <a className={styles.services1}>Services</a>
        </button>
        <button className={styles.update} onClick={onUpdateClick}>
          <a className={styles.updateDetails}>Update Details</a>
          <img className={styles.iconSetting} alt="" src="/iconsetting.svg" />
        </button>
        <button className={styles.home}>
          <img className={styles.vectorIcon4} alt="" src="/vector4.svg" />
          <div className={styles.homeChild} />
          <a className={styles.home1}>Home</a>
          <img className={styles.iconHome} alt="" src="/iconhome.svg" />
        </button>
        <img
          className={styles.navphotoIcon}
          alt=""
          src="/ellipse-1.svg"
          data-animate-on-scroll
        />
        <b className={styles.navemailid}>Anna George</b>
        <span className={styles.navname}>HN-512</span>
      </div>
    </>
  );
};

export default NavBar;
