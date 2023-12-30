import {
  Button,
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
import TableCollapsible from "../mui/TableCollapsible";
import useFetchData from "../hooks/useFetchData";

const ComplaintsTable = () => {
  const headers = {
    'issue': {
      label: 'Issue',
      minWidth: 100,
      align: 'center'
    }, 'status': {
      label: 'Status',
      minWidth: 100,
      align: 'center'
    }, 'priority': {
      label: 'Priority',
      minWidth: 100,
      align: 'center'
    }, 'start_date': {
      label: 'Date of Complaint',
      minWidth: 100,
      align: 'center',
      type: 'date'
    }, 'end_date': {
      label: 'Date of Resolution',
      minWidth: 100,
      align: 'center',
      type: 'date'
    }, 'description': {
      label:'Description',
      minWidth: 100,
      align: 'center',
      hidden: true
    }, 'response': {
      label:'Response',
      minWidth: 100,
      align: 'center',
      hidden: true
    },
  };

  const { data: complaintsData, isLoading: isLoadingComplaints } = useFetchData(
    '/api/feeds/complaint');
  return (
    <TableCollapsible rowData={complaintsData} headers={headers} isLoading={isLoadingComplaints} />
  );
};

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

          <div className="col-span-full w-full flex flex-col">
            <h5 className="text-sm font-medium leading-4 px-1 mt-5 mb-2 text-zinc-400">Feel free to sprinkle your thoughts here! ✨</h5>
            <TextField
              className="w-full"
              color="primary"
              variant="outlined"
              multiline
              label="Describe the issue"
              minRows={5}
              placeholder="Describe your issue"
              {...register("description")}
              margin='normal'
            />
          </div>
          <div className='col-span-full flex items-center justify-center'>
            <Button
              className="sm:max-w-96"
              fullWidth
              variant="contained"
              color="success"
              size="large"
              type='submit'
            >Submit Complaint</Button>
          </div>
        </section>
      </form>

      <div className="mt-10">
        <h2 className="mb-5 text-xl font-medium leading-4 px-1 text-zinc-400">Previous Complaints Raised</h2>
        <ComplaintsTable />
      </div>
    </>
  )
}

export default Complaints