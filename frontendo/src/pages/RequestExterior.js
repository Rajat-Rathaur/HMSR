import { useState, useCallback } from "react";
import {
  Button,
  FormControlLabel,
  Radio,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from "@mui/material";
import EditDetailsPopup from "../components/EditDetailsPopup";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import styles from "./RequestExterior.module.css";
const RequestExterior = () => {
  const [isEditDetailsPopupOpen, setEditDetailsPopupOpen] = useState(false);
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

  return (
    <>
      <div className={styles.requestexterior}>
        <div className={styles.request}>
          <div className={styles.tablerequest} />
          <div className={styles.linerequest} />
          <div className={styles.requestradio}>
            <Button
              className={styles.btnpayment}
              sx={{ width: 231 }}
              variant="contained"
              color="primary"
              size="large"
              onClick={openEditDetailsPopup}
            >{`Generate `}</Button>
            <FormControlLabel
              className={styles.requestradioChild}
              label="Complaint"
              labelPlacement="end"
              control={<Radio color="primary" size="medium" />}
            />
            <FormControlLabel
              className={styles.requestradioItem}
              label="Request"
              labelPlacement="end"
              control={<Radio color="primary" size="medium" />}
            />
            <h3 className={styles.chooseType}>{`Choose Type `}</h3>
          </div>
          <form className={styles.complaints} method="post">
            <TextField
              className={styles.complainttextarea}
              sx={{ width: 352 }}
              color="primary"
              variant="outlined"
              multiline
              label="Label"
              placeholder="Describe your complaint"
              margin="none"
            />
            <FormControl
              className={styles.selectPriorityParent}
              sx={{ width: 352 }}
              variant="outlined"
              required
            >
              <InputLabel color="primary">Select Priority</InputLabel>
              <Select color="primary" size="medium" label="Select Priority">
                <MenuItem value="High">High</MenuItem>
                <MenuItem value="Regular">Regular</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <h3 className={styles.complaints1}>Complaints</h3>
          </form>
          <form className={styles.requests} method="post">
            <TextField
              className={styles.input}
              sx={{ width: 352 }}
              color="primary"
              variant="outlined"
              multiline
              label="Label"
              placeholder="Describe your request"
              margin="none"
            />
            <TextField
              className={styles.input1}
              sx={{ width: 352 }}
              color="primary"
              variant="outlined"
              type="text"
              name="fromDate"
              label="From Date"
              placeholder="Placeholder"
              size="medium"
              margin="none"
            />
            <TextField
              className={styles.input2}
              sx={{ width: 352 }}
              color="primary"
              variant="outlined"
              type="text"
              name="toDate"
              label="To Date"
              placeholder="Placeholder"
              size="medium"
              margin="none"
            />
            <h3 className={styles.requests1}> Requests</h3>
          </form>
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
    </>
  );
};

export default RequestExterior;
