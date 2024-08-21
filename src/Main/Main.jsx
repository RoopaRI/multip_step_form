import React, { useState } from "react";
import "./Main.css";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormBody from "../FormBody/FormBody";

const steps = [
    'Personal Information',
    'Address Information',
    'Confirmation',
];

export default function HorizontalNonLinearStepper() {
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});
    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        phoneNo: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zipCode: ""
    });

    const totalSteps = () => steps.length;
    const completedSteps = () => Object.keys(completed).length;
    const isLastStep = () => activeStep === totalSteps() - 1;
    const allStepsCompleted = () => completedSteps() === totalSteps();

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = { ...completed };
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
        setFormData({
            userName: "",
            email: "",
            phoneNo: "",
            address1: "",
            address2: "",
            city: "",
            state: "",
            zipCode: ""
        });
    };

    const handleChange = (type, value) => {
        setFormData({
            ...formData,
            [type]: value,
        });
    };

    return (
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Stepper nonLinear activeStep={activeStep} sx={{ padding: '0 20px', height: '60px', fontSize: '0.875rem' }}>
                {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]} sx={{ flex: 1 }}>
                        <StepButton color="inherit" onClick={handleStep(index)} sx={{ fontSize: '0.75rem', height: '40px' }}>
                            {label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', padding: '20px' }}>
                {allStepsCompleted() ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you're finished
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', mt: 2 }}>
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Box sx={{ flex: 1 }}>
                            <FormBody
                                step={activeStep}
                                formData={formData}
                                onChange={handleChange}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mt: 2, padding: '0 20px' }}>
                            <Button
                                color="inherit"
                                onClick={handleBack}
                                disabled={activeStep === 0}  // Disable Back button on step 0
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            {activeStep < steps.length - 1 && (
                                <Button onClick={handleNext} sx={{ mr: 1 }}>
                                    Next
                                </Button>
                            )}
                            {activeStep === steps.length - 1 && (
                                <Button onClick={handleComplete} sx={{ mr: 1 }}>
                                    Finish
                                </Button>
                            )}
                        </Box>
                    </React.Fragment>
                )}
            </Box>
        </Box>
    );
}
