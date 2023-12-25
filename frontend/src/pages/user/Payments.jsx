import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import StepperLine from "../../mui/StepperLine";
import { TextField, Button, InputAdornment, Typography } from '@mui/material';
import PaymentTable from "../../mui/PaymentTable";

const Payments = () => {
  const navigate = useNavigate();


  return (
    <>
      <main className="bg-white w-full flex flex-col relative p-8">
        <div className=" w-full flex justify-center xs:justify-start" >
          <div>
            <div className="hd-p">Payments</div>
            <span className="text-xs font-medium leading-4 px-1 text-zinc-400">Experience first, pay later.</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
          <div className="col-span-1 grid gap-5 mt-10">
            <div className=" bg-slate-50 p-4 rounded-lg">
              <h5 className="text-xs font-medium leading-4 px-1 text-zinc-400">Joining Date</h5>
              <p className="hd-p text-3xl  mt-4 mb-2">Jan 15, 2020 </p>
            </div>

            <div className=" bg-slate-50 p-4 rounded-lg">
              <h5 className="text-xs font-medium leading-4 px-1 text-zinc-400">Joining Date</h5>
              <p className="hd-p text-3xl  mt-4 mb-2"> 15th   Jan 2020 </p>
            </div>

            <div className=" bg-slate-50 p-4 rounded-lg">
              <h5 className="text-xs font-medium leading-4 px-1 text-zinc-400">Joining Date</h5>
              <p className="hd-p text-3xl   mt-4 mb-2"> 15th Jan 2020 </p>
            </div>
          </div>


          <div className="col-span-1 grid gap-5 mt-10">
            <div className=" bg-slate-50 p-4 rounded-lg">
              <h5 className="text-xs font-medium leading-4 px-1 text-zinc-400">Total Rent</h5>
              <p className="hd-p text-3xl  mt-4 mb-2">2020 ₹</p>
            </div>

            <div className=" bg-slate-50 p-4 rounded-lg">
              <h5 className="text-xs font-medium leading-4 px-1 text-zinc-400">Rent Paid</h5>
              <p className="hd-p text-3xl  mt-4 mb-2"> 5000 ₹</p>
            </div>

            <div className=" bg-slate-50 p-4 rounded-lg">
              <h5 className="text-xs font-medium leading-4 px-1 text-zinc-400">Rent Left</h5>
              <p className="hd-p text-3xl   mt-4 mb-2">1135  ₹</p>
            </div>
          </div>

          <div className="xl:col-span-1 col-span-full bg-slate-50 rounded-lg mt-10 justify-center flex-col w-full p-5">
            <h5 className="flex items-center text-xl font-medium leading-4 px-1 text-zinc-400">
              ■ Total Days Left to Enjoy
            </h5>
            <div className="w-full flex justify-center items-center p-8">
              <h2 className="rounded-full flex text-center items-center justify-center border-green-800 border-4 bg-white h-48 w-48 hd-p text-lime-700 text-6xl ">20</h2>
            </div>
            <p className="font-bold text-center text-slate-600">Do advance booking and enjoy savings of up to 15%* on your total rent.</p>
          </div>
        </div>

        <div className="w-full flex flex-col mt-10 bg-slate-50 p-5 py-10 rounded-lg">
          <StepperLine />

          <div className="flex xs:flex-row flex-col w-full justify-between mt-16 xs:space-x-5 space-y-5 xs:space-y-0 space-x-0 bg-slate-50 rounded-lg">
            <TextField
              className="max-w-96 "
              label="Rent"
              variant="outlined"
              type="number"
              fullWidth
              sx={{
                "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                  display: "none",
                },
                "& input[type=number]": {
                  MozAppearance: "textfield",
                },
              }}
              InputProps={{
                inputProps: { min: 0 },
                endAdornment: (
                  <InputAdornment position="end">
                    <Typography variant="body1" color="textSecondary">
                      ₹
                    </Typography>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              className="max-w-96 w-full"
              variant="contained"
              color="success"
            >
              Pay Remaining
            </Button>

          </div>
        </div>

        <div className="mt-10">
          <h2 className="mb-5 text-xl font-medium leading-4 px-1 text-zinc-400">Previous Transactions</h2>
          <PaymentTable />
        </div>
      </main>




    </>
  );
};

export default Payments;
