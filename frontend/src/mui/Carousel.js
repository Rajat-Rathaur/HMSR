import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useState } from 'react';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


function Carousel({ data }) {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = data.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <div>

            {data[activeStep]?.name && <div className='flex w-full py-3 px-3'>
                <img className='mt-1 w-12 h-12 rounded-full' src={data[activeStep].icon} alt="" />
                <div className='px-2 py-0.5 flex flex-col space-y-0.5'>
                    <h5 className="text-slate-800 font-semibold ">{data[activeStep].name}  </h5>
                    <h5 className="lb-p">{data[activeStep].branch}</h5>
                    <p className="text-sm leading-6 font-medium text-zinc-400">📍{data[activeStep].address}</p>
                    <p className='text-sm font-medium text-blue-500 hover:cursor-pointer' onClick={() => window.open(`tel:+91${data[activeStep].phone}`)}>📞 +91 {data[activeStep].phone}</p>
                </div>
            </div>}

            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {data.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            data[activeStep]?.imgPath && <Box
                                component="img"
                                sx={{
                                    display: 'block',
                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>

            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        </div>
    );
}

export default Carousel;
