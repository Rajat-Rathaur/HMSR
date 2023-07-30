import { useState, useCallback } from "react";
import {
  Button,
  Icon,
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
import styles from "./EditDetailsExterior.module.css";
const EditDetailsExterior = () => {
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
      <div className={styles.editdetailsexterior}>
        <div className={styles.editdetails}>
          <Button
            className={styles.btnupdatedetails}
            sx={{ width: 240 }}
            variant="contained"
            color="primary"
            size="large"
            onClick={openEditDetailsPopup}
          >
            Update Details
          </Button>
          <div className={styles.editguardian}>
            <TextField
              className={styles.pincode}
              color="primary"
              variant="standard"
              defaultValue="400001"
              type="number"
              name="guardianPincode"
              label="pincode"
              placeholder="Placeholder"
              size="medium"
              margin="none"
            />
            <TextField
              className={styles.state}
              color="primary"
              variant="standard"
              defaultValue="Delhi"
              type="text"
              name="guardianState"
              label="State"
              placeholder="Placeholder"
              size="medium"
              margin="none"
              disabled
            />
            <TextField
              className={styles.city}
              color="primary"
              variant="standard"
              defaultValue="Delhi"
              type="text"
              name="guardianCity"
              label="City"
              placeholder="Placeholder"
              size="medium"
              margin="none"
              disabled
            />
            <TextField
              className={styles.addressLine}
              color="primary"
              variant="standard"
              defaultValue="Xyz Stret"
              type="text"
              name="guardianAddressLine"
              label="Address Line"
              placeholder="Placeholder"
              size="medium"
              margin="none"
              disabled
            />
            <TextField
              className={styles.relationship}
              color="primary"
              variant="standard"
              defaultValue="Brother"
              type="text"
              name="relationship"
              label="Relationship"
              placeholder="Placeholder"
              size="medium"
              margin="none"
            />
            <TextField
              className={styles.phoneNo}
              color="primary"
              variant="standard"
              defaultValue="95437442"
              type="tel"
              name="GuardianPhoneNo"
              label="Phone no"
              placeholder="Placeholder"
              size="medium"
              margin="none"
              disabled
            />
            <TextField
              className={styles.name}
              color="primary"
              variant="standard"
              defaultValue="john vue"
              type="text"
              name="guardianName"
              label="Guardian's Name"
              placeholder="Placeholder"
              size="medium"
              margin="none"
              disabled
            />
            <h5 className={styles.guardianDetails}>Guardian details</h5>
          </div>
          <div className={styles.editaddress}>
            <TextField
              className={styles.addressLine1}
              color="primary"
              variant="standard"
              type="text"
              name="addressLine"
              label="Address Line"
              placeholder="Placeholder"
              size="medium"
              margin="none"
              disabled
            />
            <TextField
              className={styles.city1}
              color="primary"
              variant="standard"
              type="text"
              name="city"
              label="City"
              placeholder="Placeholder"
              size="medium"
              margin="none"
              disabled
            />
            <TextField
              className={styles.state1}
              color="primary"
              variant="standard"
              defaultValue="Maharashtra"
              type="text"
              name="state"
              label="State"
              placeholder="Placeholder"
              size="medium"
              margin="none"
            />
            <TextField
              className={styles.pincode1}
              color="primary"
              variant="standard"
              defaultValue="443103"
              type="text"
              name="pincode"
              label="pincode"
              placeholder="Placeholder"
              size="medium"
              margin="none"
            />
            <h5 className={styles.guardianDetails}>Address</h5>
          </div>
          <div className={styles.editwork}>
            <FormControl
              className={styles.profession}
              sx={{ width: 94 }}
              variant="standard"
              disabled
            >
              <InputLabel color="primary">Profession</InputLabel>
              <Select
                color="primary"
                name="profession"
                defaultValue="Student"
                size="medium"
                label="Profession"
              >
                <MenuItem value="Student">Student</MenuItem>
                <MenuItem value="Working Proffesional">
                  Working Proffesional
                </MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <h5 className={styles.workdetails}>Work Details</h5>
          </div>
          <div className={styles.editcontact}>
            <TextField
              className={styles.name}
              color="primary"
              variant="standard"
              defaultValue="8888688107"
              type="text"
              name="phoneNumber"
              label="Phone Number"
              placeholder="Placeholder"
              size="medium"
              margin="none"
              disabled
            />
            <TextField
              className={styles.relationship}
              color="primary"
              variant="standard"
              defaultValue="sahil10.jai@gmail.com"
              type="text"
              name="emailId"
              label="Email Id"
              placeholder="Placeholder"
              size="medium"
              margin="none"
              disabled
            />
            <h5 className={styles.guardianDetails}>Contact Details</h5>
          </div>
          <div className={styles.editpersonal}>
            <TextField
              className={styles.name}
              color="primary"
              variant="standard"
              type="text"
              label="Name"
              placeholder="Placeholder"
              size="medium"
              margin="none"
            />
            <TextField
              className={styles.relationship}
              color="primary"
              variant="standard"
              type="text"
              label="Date"
              size="medium"
              margin="none"
              disabled
            />
            <FormControl
              className={styles.gender}
              sx={{ width: 222 }}
              variant="standard"
            >
              <InputLabel color="primary">Gender</InputLabel>
              <Select
                color="primary"
                name="gender"
                size="medium"
                label="Gender"
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Others">Others</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <h5 className={styles.guardianDetails}>Personal Details</h5>
          </div>
        </div>
        <NavBar
          onNotificationsClick={onNotificationsClick}
          onAttendanceClick={onAttendanceClick}
          onPaymentsClick={onPaymentsClick}
          onRequestsClick={onRequestsClick}
          onServicesClick={onServicesClick}
          onUpdateClick={onUpdateClick}
          navBarHeight="850px"
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

export default EditDetailsExterior;
