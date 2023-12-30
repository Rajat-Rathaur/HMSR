import { Button } from "@mui/material";

// ~ ***** A SIMPLE POPUP WITH 2 OPTION CANCEL AND SUBMIT

const Popup = ({ onClose, heading, subText, icon, onConfirm }) => {

  return (
    <div className="bg-white grid grid-cols-12 px-[26px] pt-[26px] pb-10 bg-bgPrimary h-fit min-h-[196px] min-w-[510px] w-fit max-w-[600px] rounded-2xl">
      <img className="col-span-2 w-12 h-12" alt="" src={icon} />
      <div className="col-span-10 grid gap-9 font-[Poppins]">
        <div className="grid w-full h-fit">
          <p className=" text-slate-900 text-lg font-semibold">{heading}</p>
          <p className="text-[#475467] text-sm">{subText}</p>
        </div>
        <div className="flex justify-between h-fit mr-8">
          <Button size="large" variant="outlined" color="error" type='button' onClick={onClose} className="px-8">Cancel</Button>
          <Button
            size="large" color="success" type="submit" variant="contained"
            className="ml-10 px-8 bg-green-700 z-1"
            onClick={onConfirm}
          >Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Popup;