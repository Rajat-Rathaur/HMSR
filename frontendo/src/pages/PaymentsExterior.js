import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import styles from "./PaymentsExterior.module.css";
const PaymentsExterior = () => {
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

  return (
    <div className={styles.paymentsexterior}>
      <div className={styles.payments}>
        <div className={styles.paymentstable}>
          <div className={styles.selectParent}>
            <div className={styles.select}>
              <div className={styles.actions}>Receipt</div>
            </div>
            <div className={styles.select1}>
              <img className={styles.actionsIcon} alt="" src="/actions1.svg" />
            </div>
            <div className={styles.select2}>
              <img className={styles.actionsIcon} alt="" src="/actions1.svg" />
            </div>
            <div className={styles.select1}>
              <img className={styles.actionsIcon} alt="" src="/actions1.svg" />
            </div>
            <div className={styles.select2}>
              <img className={styles.actionsIcon} alt="" src="/actions1.svg" />
            </div>
            <div className={styles.select1}>
              <img className={styles.actionsIcon} alt="" src="/actions1.svg" />
            </div>
            <div className={styles.select2}>
              <img className={styles.actionsIcon} alt="" src="/actions1.svg" />
            </div>
            <div className={styles.select7}>
              <img className={styles.actionsIcon} alt="" src="/actions1.svg" />
            </div>
          </div>
          <div className={styles.frame1variant6}>
            <div className={styles.select8}>
              <div className={styles.rentTypeRml}>Rent Type r,m,l</div>
            </div>
            <div className={styles.select9}>
              <div className={styles.rectangleParent}>
                <div className={styles.instanceChild} />
                <div className={styles.rentWrapper}>
                  <div className={styles.rent}>Rent</div>
                </div>
              </div>
            </div>
            <div className={styles.select10}>
              <div className={styles.rectangleParent}>
                <div className={styles.instanceChild} />
                <div className={styles.rentContainer}>
                  <div className={styles.rent}>MESS</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.selectGroup}>
            <div className={styles.select11}>
              <div className={styles.rent}>Payment date</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.rent}>8/16/13</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.rent}>8/16/13</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.rent}>8/16/13</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.rent}>8/16/13</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.rent}>8/16/13</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.rent}>8/16/13</div>
            </div>
            <div className={styles.select7}>
              <div className={styles.rent}>8/16/13</div>
            </div>
          </div>
          <div className={styles.selectContainer}>
            <div className={styles.select11}>
              <div className={styles.amount}>Amount</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.rent}>4152</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.rent}>9359</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.rent}>1577</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.rent}>1439</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.rent}>5028</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.rent}>9462</div>
            </div>
            <div className={styles.select7}>
              <div className={styles.nandan}>9374</div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.select}>
              <img
                className={styles.actionsIcon}
                alt=""
                src="/-icon-arrow-ios-downward2.svg"
              />
            </div>
            <div className={styles.select1}>
              <img className={styles.select3Icon} alt="" src="/select-3.svg" />
            </div>
            <div className={styles.select2}>
              <img className={styles.select3Icon} alt="" src="/select-31.svg" />
            </div>
            <div className={styles.select1}>
              <img className={styles.select3Icon} alt="" src="/select-3.svg" />
            </div>
            <div className={styles.select2}>
              <img className={styles.select3Icon} alt="" src="/select-31.svg" />
            </div>
            <div className={styles.select1}>
              <img className={styles.select3Icon} alt="" src="/select-3.svg" />
            </div>
            <div className={styles.select2}>
              <img className={styles.select3Icon} alt="" src="/select-31.svg" />
            </div>
            <div className={styles.select7}>
              <img className={styles.select3Icon} alt="" src="/select-3.svg" />
            </div>
          </div>
        </div>
        <Button
          className={styles.btnpayment}
          sx={{ width: 200 }}
          variant="contained"
          color="primary"
          size="large"
        >
          Make payment
        </Button>
        <form className={styles.paymentcurrstatus} method="get">
          <span className={styles.paid}>Paid</span>
          <label className={styles.currentStatus}>Current Status</label>
        </form>
        <form className={styles.paymentrentleft} method="get">
          <span className={styles.rs18282}>Rs 18282</span>
          <label className={styles.rentLeft}>Rent Left</label>
        </form>
        <form className={styles.paymentpaidrent} method="get">
          <span className={styles.rs182827}>Rs 182827</span>
          <label className={styles.paidRent}>Paid Rent</label>
        </form>
        <form className={styles.paymenttotalrent} method="get">
          <span className={styles.rs1828271}>Rs 182827</span>
          <label className={styles.totalRent}>Total Rent</label>
        </form>
        <form className={styles.paymentoverdueamt} method="get">
          <span className={styles.rs182821}>Rs 18282</span>
          <label className={styles.dueAmount}>Due Amount</label>
        </form>
        <form className={styles.paymentoverduedate} method="get">
          <span className={styles.span}>12/11/2022</span>
          <label className={styles.dueDate}>Due Date</label>
        </form>
        <form className={styles.paymenvalidtill} method="get">
          <span className={styles.rs182827}>12/11/2022</span>
          <label className={styles.validTill}>Valid Till</label>
        </form>
        <form className={styles.paymentvalidfrom} method="get">
          <span className={styles.span2}>12/10/2022</span>
          <label className={styles.validFrom}>Valid From</label>
        </form>
        <h5 className={styles.paymentDetails}>Payment Details</h5>
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
  );
};

export default PaymentsExterior;
