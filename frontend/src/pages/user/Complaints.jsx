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
import EditDetailsPopup from "../../components/EditDetailsPopup";
import PortalPopup from "../../components/PortalPopup";
import { useNavigate } from "react-router-dom";
const Complaints = () => {
  const [isEditDetailsPopupOpen, setEditDetailsPopupOpen] = useState(false);
  const navigate = useNavigate();

  const openEditDetailsPopup = useCallback(() => {
    setEditDetailsPopupOpen(true);
  }, []);

  const closeEditDetailsPopup = useCallback(() => {
    setEditDetailsPopupOpen(false);
  }, []);

  return (
    <>
      <main className="bg-white w-full flex flex-col relative p-8">
        <div className=" w-full flex justify-center xs:justify-start" >
          <div>
            <div className="hd-p">Complaints</div>
            <span className="text-xs font-medium  leading-4 px-1 text-zinc-400">Your satisfaction is our priority.</span>
          </div>
        </div>

        <section className="grid grid-cols-2 gap-5 bg-slate-50 p-4 py-10 mt-10 rounded-lg">
          <div className="col-span-full sm:col-span-1 w-full flex">
            <FormControl required className="sm:max-w-96 w-full">
              <InputLabel color="primary">Select Hostel Issue</InputLabel>
              <Select color="primary" label="Select Hostel Issue">
                <MenuItem value="Maintenance">Maintenance</MenuItem>
                <MenuItem value="Security">Security Concern</MenuItem>
                <MenuItem value="Room Condition">Room Condition</MenuItem>
                <MenuItem value="Noise Complaint">Noise Complaint</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>

          <div className="col-span-full sm:col-span-1 w-full flex">
            <FormControl required className="sm:max-w-96 w-full"          >
              <InputLabel color="primary">Select Priority</InputLabel>
              <Select color="primary" label="Select Priority">
                <MenuItem value="High">High</MenuItem>
                <MenuItem value="Regular">Regular</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>

          <div className="col-span-full w-full flex">
            <TextField
              className="w-full"
              color="primary"
              variant="outlined"
              multiline
              label="Describe the issue"
              minRows={6}
              placeholder="Describe your issue"
            />
          </div>

          <Button
            className="col-span-full sm:col-start-2 justify-self-end sm:max-w-96"
            fullWidth
            variant="contained"
            color="success"
            size="large"
            onClick={openEditDetailsPopup}
          >Submit Complaint</Button>

        </section>
      </main >


      {isEditDetailsPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.7)"
          placement="Centered"
          onOutsideClick={closeEditDetailsPopup}
        >
          <EditDetailsPopup onClose={closeEditDetailsPopup} />
        </PortalPopup>
      )
      }
    </>
  );
};

export default Complaints;
