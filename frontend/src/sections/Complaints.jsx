import React, { useState } from 'react'
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
import { useSnackbar } from '../hooks/useSnackbar';
import postData from '../utilities/postData';
import { useForm, Controller } from 'react-hook-form';

const Complaints = () => {
  const { handleSnackbarOpen } = useSnackbar();
  const defaultValues = {
    issue: "",
    description: "",
    priority: ""
  }
  
  const { register, control, reset, handleSubmit } = useForm({ defaultValues });

  const handleComplaintClick = async (data, e) => {
    const result = await postData("/api/feeds/complaint", data);
    if (result.success) {
      handleSnackbarOpen('Complaint submitted successful', 'success');
      reset();
    }
    else
      handleSnackbarOpen('Error while adding Complaint. Please try again later.', 'error');

  };

  return (
    <>
      <form onSubmit={handleSubmit(handleComplaintClick)}>
        <section className="grid grid-cols-2 gap-5 bg-slate-50 p-4 py-10 rounded-lg">
          <div className="col-span-full sm:col-span-1 w-full flex">

            <FormControl required className="sm:max-w-96 w-full" {...register("issue")}>
              <InputLabel color="primary">Select Hostel Issue</InputLabel>
              <Controller
                name="issue"
                control={control}
                render={({ field }) => (
                  <Select color="primary" label="Select Hostel Issue" {...field}>
                    <MenuItem value="Maintenance">Maintenance</MenuItem>
                    <MenuItem value="Security">Security Concern</MenuItem>
                    <MenuItem value="Room Condition">Room Condition</MenuItem>
                    <MenuItem value="Noise Complaint">Noise Complaint</MenuItem>
                  </Select>
                )}
              />
              <FormHelperText />
            </FormControl>
          </div>

          <div className="col-span-full sm:col-span-1 w-full flex">
            <FormControl required className="sm:max-w-96 w-full">
              <InputLabel color="primary">Select Priority</InputLabel>
              <Controller
                name="priority"
                control={control}
                render={({ field }) => (
                  <Select color="primary" label="Select Priority" {...field}>
                    <MenuItem value="High">High</MenuItem>
                    <MenuItem value="Regular">Regular</MenuItem>
                  </Select>
                )}
              />
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
              {...register("description")}
            />
          </div>

          <Button
            className="col-span-full sm:col-start-2 justify-self-end sm:max-w-96"
            fullWidth
            variant="contained"
            color="success"
            size="large"
            type='submit'
          // onClick={openEditDetailsPopup}
          >Submit Complaint</Button>
        </section>
      </form>
    </>
  )
}

export default Complaints