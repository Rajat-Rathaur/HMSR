import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Initial Installment',
  'Second Installment',
  'Third Installment',
  'Final Installment',
];

export default function StepperLine() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper alternativeLabel>
        {steps.map((label) => (
          <Step key={label} completed={label === 'Second Installment'}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
