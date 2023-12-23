import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, InputAdornment, IconButton } from '@mui/material';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
const Login = ({ openSnackbar }) => {
  const { register, handleSubmit } = useForm();
  const url = process.env.SERVER_URL || 'http://localhost:4000';
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const isValid = /^[EH]\d+$/.test(data.h_id);

    if (!isValid) {
      openSnackbar('Check id again. It should start with "E" or "H" followed by numbers.');
      return;
    }

    try {
      const resp = await fetch(`${url}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await resp.json();
      if (responseData.success) {
        const { token, h_id } = responseData;
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('h_id', h_id);

        navigate(`/home?id=${responseData.h_id}`)
        openSnackbar('Login successful', 'success');  
      } else {
        openSnackbar(responseData.error, 'error');
        console.error('Request failed with status:', resp.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };



  return (
    <>
      <div className="grid relative w-full grid-cols-2 h-screen">
        <div className="col-span-full md:col-span-1 bg-slate-50 flex flex-col w-full">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col p-4 items-center w-full">
              <div className="flex w-full">
                <div className="flex items-center">
                  <IconButton className="mb:h-12 mb:w-12 h-8 w-8" type='button' >
                    <ArrowBackIosNewIcon />
                  </IconButton>
                </div>
                <div className="flex m-auto mt-8">
                  <img src="/icons/logo.svg" alt="" className="mb:h-auto h-20" />
                </div>
              </div>

              <div className="items-center text-gray-950 font-semibold text-2xl mb:text-4xl mt-10">
                Welcome Back
              </div>
              <div className="mt-5 mb:mt-10 flex w-full max-w-96 h-auto">
                <TextField fullWidth label="User ID" placeholder="Enter your ID ex: H001 | E001" {...register("h_id")} required
                />
              </div>


              <div className="my-5 flex flex-col w-full max-w-96 items-end">
                <TextField
                  fullWidth
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  {...register("password")}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleTogglePassword} edge="end">
                          {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  required
                />
                <Link className="text-green-500 text-mb cursor-pointer mt-2">Forgot password?</Link>
              </div>

              <div className="my-4 w-full max-w-96 " >
                <Button variant="contained" color="success" type="submit" size="large" fullWidth >
                  Submit
                </Button>
              </div>

            </div>
          </form>
        </div>

        <div className=" col-span-1 bg-gradient-to-r from-green-cust-300 to-green-cust-100 items-center justify-center hidden md:grid p-4 h-auto">
          <img src="icons/login/loginIcon.svg" alt="" className="h-full" />
        </div>

      </div >



    </>
  );
};

export default Login;