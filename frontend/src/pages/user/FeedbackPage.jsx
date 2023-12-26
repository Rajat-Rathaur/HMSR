import { useState, useCallback } from "react";

import EditDetailsPopup from "../../components/popups/Popup";
import PortalPopup from "../../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import TwoWayTab from "../../mui/TwoWayTab";
import FeedbackIcon from '@mui/icons-material/Feedback';
import AssistantIcon from '@mui/icons-material/Assistant';
import Feedback from "../../sections/Feedback";
import Complaints from "../../sections/Complaints";

const FeedbackPage = () => {

  const [isEditDetailsPopupOpen, setEditDetailsPopupOpen] = useState(false);
  const navigate = useNavigate();

  const openEditDetailsPopup = useCallback(() => {
    setEditDetailsPopupOpen(true);
  }, []);

  const closeEditDetailsPopup = useCallback(() => {
    setEditDetailsPopupOpen(false);
  }, []);

  const [value, setValue] = useState(0);

  const changeTab = (newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <main className="bg-white w-full flex flex-col relative p-8">
        <div className=" w-full flex justify-center xs:justify-start" >
          <div>
            <div className="hd-p">Complaints</div>
            <span className="text-xs font-medium  leading-4 px-1 text-zinc-400">Your satisfaction is our priority.</span>
          </div>
        </div>

        <div className="my-5">
          <TwoWayTab changeTab={changeTab} value={value} label1='Feedback' label2='Complaint' icon1={<FeedbackIcon />} icon2={<AssistantIcon />} />
        </div>
        {value === 0 && <Feedback />}
        {value === 1 && <Complaints />}
      </main >


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

export default FeedbackPage;
