import { useState, useCallback } from "react";
import { Button, Icon } from "@mui/material";
import EditDetailsPopup from "../components/EditDetailsPopup";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import styles from "./ServicesExterior.module.css";
const ServicesExterior = () => {
  const [isEditDetailsPopupOpen, setEditDetailsPopupOpen] = useState(false);
  const [isEditDetailsPopup1Open, setEditDetailsPopup1Open] = useState(false);
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

  const openEditDetailsPopup = useCallback(() => {
    setEditDetailsPopupOpen(true);
  }, []);

  const closeEditDetailsPopup = useCallback(() => {
    setEditDetailsPopupOpen(false);
  }, []);

  const openEditDetailsPopup1 = useCallback(() => {
    setEditDetailsPopup1Open(true);
  }, []);

  const closeEditDetailsPopup1 = useCallback(() => {
    setEditDetailsPopup1Open(false);
  }, []);

  return (
    <>
      <div className={styles.servicesexterior}>
        <div className={styles.services}>
          <form className={styles.laundry} method="post">
            <Button
              className={styles.btnlaundry}
              sx={{ width: 240 }}
              variant="contained"
              color="info"
              size="large"
              onClick={openEditDetailsPopup}
            >
              Proceed to payment
            </Button>
            <div className={styles.laundrytotal}>
              <label className={styles.laundrytotaltext}>Total</label>
              <span className={styles.laundrytotalamount}>Rs 2250</span>
            </div>
            <div className={styles.laundrymonthly}>
              <label className={styles.addMonthly}>Add Monthly</label>
              <input className={styles.laundrycheckbox} type="checkbox" />
            </div>
            <div className={styles.laundryadditional}>
              <label className={styles.addMonthly}>Additional Weight</label>
              <span className={styles.span}>0</span>
            </div>
            <div className={styles.laundryweight}>
              <label className={styles.addMonthly}>Total weight Left</label>
              <span className={styles.span1}>15</span>
            </div>
            <div className={styles.laundryprice}>
              <label className={styles.addMonthly}>Price /kg</label>
              <span className={styles.rs45}>Rs 45</span>
            </div>
            <div className={styles.laundryfixed}>
              <label className={styles.fixedCharge}>Fixed Charge</label>
              <span className={styles.span2}>15</span>
            </div>
            <div className={styles.laundrystatus}>
              <label className={styles.fixedCharge}>Current Status</label>
              <span className={styles.inactive}>Inactive</span>
            </div>
            <div className={styles.laundryvalidtill}>
              <label className={styles.addMonthly}>Valid Till</label>
              <span className={styles.span3}>12/11/2022</span>
            </div>
            <div className={styles.laundryvalid}>
              <span className={styles.span3}>12/10/2022</span>
              <label className={styles.addMonthly}>Valid From</label>
            </div>
            <img
              className={styles.linelaundryIcon}
              alt=""
              src="/rectangle-59.svg"
            />
            <h5 className={styles.laundry1}>Laundry</h5>
          </form>
          <div className={styles.mess}>
            <Button
              className={styles.btnlaundry}
              sx={{ width: 240 }}
              variant="contained"
              name="messPayment"
              color="info"
              size="large"
              onClick={openEditDetailsPopup1}
            >
              Proceed to payment
            </Button>
            <div className={styles.total}>
              <span className={styles.primaryText}>Total</span>
              <span className={styles.primaryText1}>Rs 2250</span>
            </div>
            <div className={styles.noOfDaysSelection}>
              <span className={styles.primaryText2}>Enter Number of days</span>
              <input
                className={styles.primaryText3}
                type="number"
                placeholder="15"
              />
            </div>
            <div className={styles.dailyCharges}>
              <span className={styles.primaryText4}>Daily Charges</span>
              <span className={styles.primaryText5}>Rs 150</span>
            </div>
            <img
              className={styles.linemess2Icon}
              alt=""
              src="/rectangle-60.svg"
            />
            <Button
              className={styles.btnopt}
              sx={{ width: 236 }}
              variant="contained"
              color="success"
              size="large"
            >
              Opt in
            </Button>
            <div className={styles.noOfDaysLeft}>
              <div className={styles.wrapper}>
                <span className={styles.span5}>12</span>
              </div>
              <span className={styles.numberOfDays}>Number of days left</span>
            </div>
            <img
              className={styles.linemessIcon}
              alt=""
              src="/rectangle-591.svg"
            />
            <h5 className={styles.mess1}>{`Mess `}</h5>
          </div>
        </div>
        <NavBar
          onNotificationsClick={onNotificationsClick}
          onAttendanceClick={onAttendanceClick}
          onPaymentsClick={onPaymentsClick}
          onRequestsClick={onRequestsClick}
          onServicesClick={onServicesClick}
          onUpdateClick={onUpdateClick}
          navBarHeight="1013px"
        />
      </div>
      {isEditDetailsPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.7)"
          placement="Centered"
          onOutsideClick={closeEditDetailsPopup}
        >
          <EditDetailsPopup onClose={closeEditDetailsPopup} />
        </PortalPopup>
      )}
      {isEditDetailsPopup1Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.7)"
          placement="Centered"
          onOutsideClick={closeEditDetailsPopup1}
        >
          <EditDetailsPopup onClose={closeEditDetailsPopup1} />
        </PortalPopup>
      )}
    </>
  );
};

export default ServicesExterior;
