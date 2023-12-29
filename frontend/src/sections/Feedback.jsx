import React, { useState } from 'react'
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Feedback = () => {
  const [value, setValue] = useState(0);
  const [comment, setComment] = useState('');

  return (
    <section className="bg-slate-50 p-4 py-10 rounded-lg">
      <div className='flex flex-col items-center xs:justify-center xs:items-start' >
        <h5 className="text-sm font-medium leading-4 px-1 mb-3 text-zinc-400 ">Your opinion matters – Drop a rating! 🌟</h5>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          size='large'
          precision={0.5}
        />
      </div>

      <h5 className="text-sm font-medium leading-4 px-1 mt-10 mb-2 text-zinc-400">Feel free to sprinkle your thoughts here! ✨</h5>
      <TextField
        label="Additional Feedback"
        variant="outlined"
        fullWidth
        multiline
        rows={5}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        margin="normal"
      />

      <div className='mt-5 flex items-center justify-center'>
        <Button
          className="flex sm:max-w-96"
          fullWidth
          variant="contained"
          color="success"
          size="large"
          type='submit'
        // onClick={openEditDetailsPopup}
        >Submit FeedBack</Button>
      </div>
    </section>
  )
}

export default Feedback