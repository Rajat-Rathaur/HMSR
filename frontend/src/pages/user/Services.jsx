import { useState, useCallback, useEffect, useMemo } from "react";
import { Button, MenuItem, InputLabel, Select, FormControl, TextField } from "@mui/material";
import Popup from "../../components/popups/Popup";
import PortalPopup from "../../components/PortalPopup";
import useFetchData from "../../hooks/useFetchData";
import Skeleton from '@mui/material/Skeleton';
import postData from "../../utilities/postData";
import { useSnackbar } from "../../hooks/useSnackbar";

const LoadingDaysLeft = () => (
  <div className="mt-4 justify-between w-full flex pr-5">
    <label className="lb-p text-xl">
      <Skeleton variant="text" width={150} />
    </label>
    <span className="text-p xs:text-2xl">
      <Skeleton variant="text" width={50} />
    </span>
  </div>
);

const LoadingTotalKgLeft = () => (
  <div className="mt-4 justify-between w-full flex pr-5">
    <label className="lb-p text-xl">
      <Skeleton variant="text" width={150} />
    </label>
    <span className="text-p text-2xl">
      <Skeleton variant="text" width={50} />
    </span>
  </div>
);


const ServicesExterior = () => {
  const { handleSnackbarOpen } = useSnackbar();

  const [isMessPopupOpen, setMessPopupOpen] = useState(false);
  const [isLaundryPopupOpen, setLaundryPopupOpen] = useState(false);

  const { data: daysLeft, setData: setDaysLeft, isLoading: isLoadingMess } = useFetchData("/api/services/mess");
  const { data: weightLeft, setData: setWeightLeft, isLoading: isLoadingLaundry } = useFetchData("/api/services/laundry");

  const openMessPopup = useCallback(() => {
    setMessPopupOpen(true);
  }, []);

  const closeMessPopup = useCallback(() => {
    setMessPopupOpen(false);
  }, []);

  const handleMessClick = async () => {
    const daysToAdd = messCount * messType;
    const result = await postData("/api/services/mess", { daysToAdd, amount: totalAmountMess });
    if (result.success) {
      handleSnackbarOpen('Mess Days Increased successful', 'success');
      setMessCount(0)
      setDaysLeft(daysLeft + daysToAdd)
      closeMessPopup()
    } else {
      handleSnackbarOpen('Error while processing the transaction. Please try again later.', 'error');
    }
  };

  const openLaundryPopup = useCallback(() => {
    setLaundryPopupOpen(true);
  }, []);

  const closeLaundryPopup = useCallback(() => {
    setLaundryPopupOpen(false);
  }, []);

  const handleLaundryClick = async () => {
    const weightToAdd = laundryCount * laundryType;
    const result = await postData("/api/services/laundry", { weightToAdd, amount: totalAmountLaundry });
    if (result.success) {
      handleSnackbarOpen('Laundry Weight Increased successful', 'success');
      setLaundryCount(0)
      setWeightLeft(parseInt(weightLeft) + parseInt(weightToAdd))
      closeLaundryPopup()

    } else {
      handleSnackbarOpen('Error while processing the transaction. Please try again later.', 'error');
    }
  };

  const [messType, setMessType] = useState(1);
  const [messCount, setMessCount] = useState(0);
  const [totalAmountMess, setTotalAmountMess] = useState(0);

  const [laundryType, setLaundryType] = useState(1);
  const [laundryCount, setLaundryCount] = useState(0);
  const [totalAmountLaundry, setTotalAmountLaundry] = useState(0);


  const messCharge = {
    1: 99,
    30: 3499,
    365: 34999
  };

  const laundryCharge = {
    1: 15,
    15: 200,
  };

  const memoizedMessCharge = useMemo(() => messCharge, []);
  const memoizedLaundryCharge = useMemo(() => laundryCharge, []);


  useEffect(() => {
    const calculateTotalAmountMess = () => {
      const amount = memoizedMessCharge[messType] * messCount;
      setTotalAmountMess(amount);
    };

    calculateTotalAmountMess();
  }, [messType, messCount, memoizedMessCharge]);

  useEffect(() => {
    const calculateTotalAmountLaundry = () => {
      const amount = memoizedLaundryCharge[laundryType] * laundryCount;
      setTotalAmountLaundry(amount);
    };

    calculateTotalAmountLaundry();
  }, [laundryType, laundryCount, memoizedLaundryCharge]);

  return (
    <>
      <main className="bg-white w-full flex flex-col relative p-8">
        <div className=" w-full flex justify-center xs:justify-start" >
          <div>
            <header className="hd-p">Services</header>
            <span className="text-xs font-medium leading-4 px-1 text-zinc-400">All services at your doorstep..</span>
          </div>
        </div>

        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-2">
          <section className="col-span-1 bg-slate-50 p-4 mt-10 rounded-lg">
            <h5 className="hd-s flex justify-center items-center ">Mess Service</h5>
            <div className="bg-gray-400 h-0.5 w-full my-2" />
            {isLoadingMess ? (
              <LoadingDaysLeft />
            ) : (
              <div className="mt-4 justify-between w-full flex pr-5">
                <label className="lb-p text-xl">Number of days Left</label>
                <span className="text-p text-lg xs:text-2xl">
                  {daysLeft}
                </span>
              </div>
            )}


            <div className="flex mt-10">
              <div className=" w-full " >
                <div className="hd-p flex justify-center  text-xl xs:text-2xl sm:text-4xl">{messCharge[1]} ₹</div>
                <span className="text-xs flex justify-center  font-medium leading-4 px-1 text-zinc-400">Daily Charges</span>
              </div>

              <div className=" w-full" >
                <div className="hd-p flex justify-center text-xl xs:text-2xl sm:text-4xl">{messCharge[30]} ₹</div>
                <span className="text-xs flex justify-center text-center  font-medium leading-4 px-1 text-zinc-400">Monthly Charges</span>
              </div>
              <div className=" w-full" >
                <div className="hd-p flex justify-center text-xl xs:text-2xl sm:text-4xl">{messCharge[365]} ₹</div>
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
                  <MenuItem value={1}>Daily</MenuItem>
                  <MenuItem value={30}>Monthly</MenuItem>
                  <MenuItem value={365}>Yearly</MenuItem>
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
                <div className="hd-p flex justify-center text-3xl text-blue-500">{totalAmountMess} ₹</div>
                <span className="text-xs flex justify-center font-medium leading-4 px-1 text-zinc-400">Total Amount</span>
              </div>
            </div>

            <div className="mt-10 justify-between w-full flex pr-5">
              <Button
                fullWidth
                variant="contained"
                color="success"
                size="large"
                onClick={openMessPopup}
                disabled={!totalAmountMess}
              >
                Add more days
              </Button>
            </div>

          </section>

          <section className="col-span-1 bg-slate-50 p-4 mt-10 rounded-lg">
            <h5 className="hd-s flex justify-center items-center ">Laundry Service</h5>
            <div className="bg-gray-400 h-0.5 w-full my-2" />
            {isLoadingLaundry ? (
              <LoadingTotalKgLeft />
            ) : (
              <div className="mt-4 justify-between w-full flex pr-5">
                <label className="lb-p text-xl">Total Kg Left</label>
                <span className="text-p text-lg xs:text-2xl">
                  {weightLeft} Kg
                </span>
              </div>
            )}

            <div className="flex mt-10 justify-between">
              <div className="w-full flex items-center justify-center" >
                <div>
                  <div className="hd-p flex justify-center text-xl xs:text-2xl sm:text-4xl">{laundryCharge[1]} ₹</div>
                  <span className="flex justify-center text-xs font-medium leading-4 px-1 text-zinc-400">charge per kg</span>
                </div>
              </div>

              <div className=" w-full flex justify-center items-center" >
                <div className="">
                  <div className="flex justify-center hd-p text-xl xs:text-2xl sm:text-4xl">{laundryCharge[15]} ₹</div>
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
                <div className="hd-p flex justify-center text-blue-500 text-3xl">{totalAmountLaundry} ₹</div>
                <span className="flex justify-center text-xs font-medium leading-4 px-1 text-zinc-400">Total Amount</span>
              </div>
            </div>

            <div className="mt-10 justify-between w-full flex pr-5">
              <Button
                fullWidth
                variant="contained"
                color="success"
                size="large"
                onClick={openLaundryPopup}
                disabled={!totalAmountLaundry}
              >
                Add more Weight
              </Button>
            </div>



          </section>

        </div>

      </main>

      {isMessPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.7)"
          placement="Centered"
          onOutsideClick={closeMessPopup}
        >
          <Popup onClose={closeMessPopup} onSuccess={handleMessClick} />
        </PortalPopup>
      )}
      {isLaundryPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.7)"
          placement="Centered"
          onOutsideClick={closeLaundryPopup}
        >
          <Popup onClose={closeLaundryPopup} onSuccess={handleLaundryClick} />
        </PortalPopup>
      )}
    </>
  );
};

export default ServicesExterior;
