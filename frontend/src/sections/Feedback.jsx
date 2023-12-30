import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSnackbar } from '../hooks/useSnackbar';
import { useForm, Controller } from 'react-hook-form';
import postData from '../utilities/postData';

const Feedback = () => {

  const { handleSnackbarOpen } = useSnackbar();
  const defaultValues = { rating: 0, description: "" };

  const { register, control, reset, handleSubmit } = useForm({ defaultValues });

  const onSubmit = async (data) => {
    const result = await postData("/api/feeds/feedback", data);
    if (result.success) {
      handleSnackbarOpen('Feedback submitted successfully', 'success');
      reset();
    } else {
      handleSnackbarOpen('Error while adding feedback. Please try again later.', 'error');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section className="bg-slate-50 p-4 py-10 rounded-lg">
        <div className='flex flex-col items-center xs:justify-center xs:items-start'>
          <h5 className="text-sm font-medium leading-4 px-1 mb-3 text-zinc-400 ">Your opinion matters – Drop a rating! 🌟</h5>

          <Controller
            name="rating"
            control={control}
            render={({ field }) => (
              <Rating
                name="simple-controlled"
                {...field}
                size='large'
                precision={0.5}
              />
            )}
          />

        </div>

        <h5 className="text-sm font-medium leading-4 px-1 mt-10 mb-2 text-zinc-400">Feel free to sprinkle your thoughts here! ✨</h5>
        <TextField
          label="Additional Feedback"
          variant="outlined"
          fullWidth
          multiline
          rows={5}
          margin="normal"
          {...register("description")}
        />

        <div className='mt-5 flex items-center justify-center'>
          <Button
            className="flex sm:max-w-96"
            fullWidth
            variant="contained"
            color="success"
            size="large"
            type='submit'
          >Submit Feedback</Button>
        </div>
      </section>
    </form>
  );
};

export default Feedback;
