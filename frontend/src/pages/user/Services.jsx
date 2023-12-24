import { useState, useCallback, useEffect } from "react";
import { Button, MenuItem, InputLabel, Select, FormControl, TextField } from "@mui/material";
import EditDetailsPopup from "../../components/EditDetailsPopup";
import PortalPopup from "../../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "../ServicesExterior.module.css";
const ServicesExterior = () => {
  const [isEditDetailsPopupOpen, setEditDetailsPopupOpen] = useState(false);
  const [isEditDetailsPopup1Open, setEditDetailsPopup1Open] = useState(false);


  const navigate = useNavigate();

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

  const [messType, setMessType] = useState('');
  const [messCount, setMessCount] = useState(0);
  const [totalAmountMess, setTotalAmountMess] = useState(0);

  const [laundryType, setLaundryType] = useState();
  const [laundryCount, setLaundryCount] = useState(0);
  const [totalAmountLaundry, setTotalAmountLaundry] = useState(0);

  const messCharge = {
    'daily': 99,   // Daily Charges
    'monthly': 3499, // Monthly Charges
    'yearly': 34999 // Yearly Charges
  };

  const laundryCharge = {
    1: 15,
    15: 200,
  };

  useEffect(() => {
    const calculateTotalAmountMess = () => {
      const amount = messCharge[messType] * messCount;
      setTotalAmountMess(amount);
    };

    calculateTotalAmountMess();
  }, [messType, messCount]);

  useEffect(() => {
    const calculateTotalAmountLaundry = () => {
      const amount = laundryCharge[laundryType] * laundryCount;
      setTotalAmountLaundry(amount);
    };

    calculateTotalAmountLaundry();
  }, [laundryType, laundryCount]);

  return (
    <>
      <main className="bg-white w-full flex flex-col relative p-8">
        <div className=" w-full flex justify-center xs:justify-start" >
          <div>
            <div className="hd-p">Services</div>
            <span className="text-xs font-medium leading-4 px-1 text-zinc-400">All services at your doorstep..</span>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
          <section className="col-span-1 bg-slate-50 p-4 mt-10 rounded-lg">
            <h5 className="hd-s flex justify-center items-center ">Mess Service</h5>
            <div className="bg-gray-400 h-0.5 w-full my-2" />
            <div className="mt-4 justify-between w-full flex pr-5">
              <label className="lb-p text-xl ">Number of days Left</label>
              <span className="text-p xs:text-2xl">
                10
              </span>
            </div>

            <div className="flex mt-10">
              <div className=" w-full " >
                <div className="hd-p flex justify-center  text-xl xxs:text-3xl xs:text-4xl">{messCharge['daily']} ₹</div>
                <span className="text-xs flex justify-center  font-medium leading-4 px-1 text-zinc-400">Daily Charges</span>
              </div>

              <div className=" w-full" >
                <div className="hd-p flex justify-center text-xl   xxs:text-3xl xs:text-4xl">{messCharge['monthly']} ₹</div>
                <span className="text-xs flex justify-center text-center  font-medium leading-4 px-1 text-zinc-400">Monthly Charges</span>
              </div>
              <div className=" w-full" >
                <div className="hd-p flex justify-center text-xl xxs:text-3xl xs:text-4xl">{messCharge['yearly']} ₹</div>
                <span className="text-xs flex justify-center font-medium text-center leading-4 px-1 text-zinc-400">Yearly Charges</span>
              </div>
            </div>


            <div className="mt-10 justify-between w-full gap-x-5 grid grid-cols-3 pr-5">
              <FormControl fullWidth >
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={messType}
                  label="Type"
                  onChange={(e) => setMessType(e.target.value)}
                >
                  <MenuItem value={'daily'}>Daily</MenuItem>
                  <MenuItem value={'monthly'}>Monthly</MenuItem>
                  <MenuItem value={'yearly'}>Yearly</MenuItem>
                </Select>
              </FormControl>


              <TextField label="Count" type="number"
                inputProps={{
                  min: 0,
                }}
                value={messCount}
                onChange={(e) => setMessCount(e.target.value)}
              />

              <div className="w-full" >
                <div className="hd-p text-3xl">{totalAmountMess} ₹</div>
                <span className="text-xs font-medium leading-4 px-1 text-zinc-400">Total Amount</span>
              </div>
            </div>

            <div className="mt-10 justify-between w-full flex pr-5">
              <Button
                fullWidth
                variant="contained"
                color="success"
                size="large"
                onClick={openEditDetailsPopup}
                disabled={!totalAmountMess}
              >
                Add more days
              </Button>
            </div>

          </section>

          <section className="col-span-1 bg-slate-50 p-4 mt-10 rounded-lg">
            <h5 className="hd-s flex justify-center items-center ">Laundry Service</h5>
            <div className="bg-gray-400 h-0.5 w-full my-2" />
            <div className="mt-4 justify-between w-full flex pr-5">
              <label className="lb-p text-xl ">Total Kg Left</label>
              <span className="text-p text-2xl">
                350
              </span>
            </div>

            <div className="flex mt-10 justify-between">
              <div className="w-full flex items-center justify-center" >
                <div>
                  <div className="hd-p flex justify-center text-xl xxs:text-3xl xs:text-4xl">{laundryCharge[1]} ₹</div>
                  <span className="flex justify-center text-xs font-medium leading-4 px-1 text-zinc-400">charge per kg</span>
                </div>
              </div>

              <div className=" w-full flex justify-center items-center" >
                <div className="">
                  <div className="flex justify-center hd-p text-xl xxs:text-3xl xs:text-4xl">{laundryCharge[15]} ₹</div>
                  <span className="flex justify-center text-xs font-medium leading-4 px-1 text-zinc-400">charges per 15 kg</span>
                </div>
              </div>
            </div>


            <div className="mt-10 justify-between w-full gap-x-5 grid grid-cols-3 pr-5">
              <FormControl fullWidth >
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={laundryType}
                  label="Type"
                  onChange={(e) => setLaundryType(e.target.value)}
                >
                  <MenuItem value={1}>1 kg</MenuItem>
                  <MenuItem value={15}>15 kg</MenuItem>
                </Select>
              </FormControl>


              <TextField label="MessCount" type="number"
                inputProps={{
                  min: 0,
                }}
                value={laundryCount}
                onChange={(e) => setLaundryCount(e.target.value)}
              />

              <div className="w-full" >
                <div className="hd-p flex justify-center text-xl xxs:text-3xl xs:text-4xl">{totalAmountLaundry} ₹</div>
                <span className="flex justify-center text-xs font-medium leading-4 px-1 text-zinc-400">Total Amount</span>
              </div>
            </div>

            <div className="mt-10 justify-between w-full flex pr-5">
              <Button
                fullWidth
                variant="contained"
                color="success"
                size="large"
                onClick={openEditDetailsPopup}
                disabled={!totalAmountLaundry}
              >
                Add more Weight
              </Button>
            </div>

          </section>

        </div>

      </main>

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
