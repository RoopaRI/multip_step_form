import React, { useState, useEffect } from "react";
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
    const [errors, setErrors] = useState({
        userName: "",
        email: "",
        phoneNo: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zipCode: ""
    });
    const [submissionSuccess, setSubmissionSuccess] = useState(false);

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('formData'));
        if (savedData) {
            setActiveStep(savedData.activeStep || 0);
            setCompleted(savedData.completed || {});
            setFormData(savedData.formData || {
                userName: "",
                email: "",
                phoneNo: "",
                address1: "",
                address2: "",
                city: "",
                state: "",
                zipCode: ""
            });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify({
            activeStep,
            completed,
            formData
        }));
    }, [activeStep, completed, formData]);

    const totalSteps = () => steps.length;
    const completedSteps = () => Object.keys(completed).length;
    const isLastStep = () => activeStep === totalSteps() - 1;
    const allStepsCompleted = () => completedSteps() === totalSteps();

    const handleNext = () => {
        let hasErrors = false;
        const newErrors = { ...errors };

        if (activeStep === 0) {
            if (!/^[A-Za-z\s]+$/.test(formData.userName)) {
                newErrors.userName = "Username must contain only letters and spaces.";
                hasErrors = true;
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                newErrors.email = "Email must be in the format 'something@something.com'.";
                hasErrors = true;
            }
            if (!/^\d{10}$/.test(formData.phoneNo)) {
                newErrors.phoneNo = "Phone number must be a 10-digit number.";
                hasErrors = true;
            }
        } else if (activeStep === 1) {
            if (formData.address1.trim() === "") {
                newErrors.address1 = "Address Line 1 cannot be empty.";
                hasErrors = true;
            }
            if (formData.address2.trim() === "") {
                newErrors.address2 = "Address Line 2 cannot be empty.";
                hasErrors = true;
            }
            if (formData.city.trim() === "") {
                newErrors.city = "City cannot be empty.";
                hasErrors = true;
            }
            if (formData.state.trim() === "") {
                newErrors.state = "State cannot be empty.";
                hasErrors = true;
            }
            if (!/^\d{6}$/.test(formData.zipCode)) {
                newErrors.zipCode = "Zip code must be 6 digits.";
                hasErrors = true;
            }
        }

        setErrors(newErrors);

        if (hasErrors) {
            return;
        }

        // Mark current step as completed
        const newCompleted = { ...completed, [activeStep]: true };
        setCompleted(newCompleted);

        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? steps.findIndex((step, i) => !(i in newCompleted))
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
        // Mark the final step as completed
        const newCompleted = { ...completed, [totalSteps() - 1]: true };
        setCompleted(newCompleted);

        setSubmissionSuccess(true);
        localStorage.removeItem('formData');
        setTimeout(() => {
            setSubmissionSuccess(false);
            handleReset();
        }, 30000);
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
        localStorage.removeItem('formData');
    };

    const handleChange = (type, value) => {
        let error = "";

        switch (type) {
            case 'userName':
                if (!/^[A-Za-z\s]+$/.test(value)) {
                    error = "Username must contain only letters and spaces.";
                }
                break;

            case 'email':
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    error = "Email must be in the format 'something@something.com'.";
                }
                break;

            case 'phoneNo':
                if (!/^\d{10}$/.test(value)) {
                    error = "Phone number must be a 10-digit number.";
                }
                break;

            case 'address1':
            case 'address2':
                if (value.trim() === "") {
                    error = "This field cannot be empty.";
                }
                break;

            case 'city':
                if (value.trim() === "") {
                    error = "City cannot be empty.";
                }
                break;

            case 'state':
                if (value.trim() === "") {
                    error = "State cannot be empty.";
                }
                break;

            case 'zipCode':
                if (!/^\d{6}$/.test(value)) {
                    error = "Zip code must be 6 digits.";
                }
                break;

            default:
                break;
        }

        setFormData({
            ...formData,
            [type]: value,
        });

        setErrors({
            ...errors,
            [type]: error
        });
    };

    return (
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Stepper */}
            <Box sx={{ padding: '0 120px', height: '60px', fontSize: '0.875rem' }}>
                <Stepper nonLinear activeStep={activeStep} sx={{ height: '100%' }}>
                    {steps.map((label, index) => (
                        <Step key={label} completed={completed[index]} sx={{ flex: 1 }}>
                            <StepButton color="inherit" onClick={handleStep(index)} sx={{ fontSize: '0.75rem', height: '100%' }}>
                                {label}
                            </StepButton>
                        </Step>
                    ))}
                </Stepper>
            </Box>

            {/* Form Body */}
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', padding: '20px' }}>
                {submissionSuccess ? (
                    <Typography variant="h6" color="darkgreen" display="flex" justifyContent="center">
                        Form submission successful!
                    </Typography>
                ) : allStepsCompleted() ? (
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
                        <Box sx={{ flex: 1, marginBottom: '20px', overflowY: 'auto' }}>
                            <FormBody
                                step={activeStep}
                                formData={formData}
                                onChange={handleChange}
                                errors={errors}
                            />
                        </Box>

                        {/* Navigation Buttons */}
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '0 120px' }}>
                            <Button
                                color="inherit"
                                onClick={handleBack}
                                disabled={activeStep === 0}
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
