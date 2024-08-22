import "./FormBody.css"
import React from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function FormBody({ step, formData, onChange, errors }) {
    if (step === 0) {
        // Personal Information
        return (
            <div className="formBody">
                <TextField
                    label="Username"
                    value={formData.userName}
                    onChange={(e) => onChange('userName', e.target.value)}
                    error={!!errors.userName}
                    helperText={errors.userName}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Email"
                    value={formData.email}
                    onChange={(e) => onChange('email', e.target.value)}
                    error={!!errors.email}
                    helperText={errors.email}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Phone Number"
                    value={formData.phoneNo}
                    onChange={(e) => onChange('phoneNo', e.target.value)}
                    error={!!errors.phoneNo}
                    helperText={errors.phoneNo}
                    fullWidth
                    margin="normal"
                />
            </div>
        );
    } else if (step === 1) {
        // Address Information
        return (
            <div className="formBody">
                <TextField
                    label="Address Line 1"
                    value={formData.address1}
                    onChange={(e) => onChange('address1', e.target.value)}
                    error={!!errors.address1}
                    helperText={errors.address1}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Address Line 2"
                    value={formData.address2}
                    onChange={(e) => onChange('address2', e.target.value)}
                    error={!!errors.address2}
                    helperText={errors.address2}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="City"
                    value={formData.city}
                    onChange={(e) => onChange('city', e.target.value)}
                    error={!!errors.city}
                    helperText={errors.city}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="State"
                    value={formData.state}
                    onChange={(e) => onChange('state', e.target.value)}
                    error={!!errors.state}
                    helperText={errors.state}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Zip Code"
                    value={formData.zipCode}
                    onChange={(e) => onChange('zipCode', e.target.value)}
                    error={!!errors.zipCode}
                    helperText={errors.zipCode}
                    fullWidth
                    margin="normal"
                />
            </div>
        );
    } else if (step === 2) {
        // Confirmation
        return (
            <div className="formBody">
                <Typography variant="h6" gutterBottom>
                    Review Your Information
                </Typography>
                <Typography variant="body1">Username: {formData.userName}</Typography>
                <Typography variant="body1">Email: {formData.email}</Typography>
                <Typography variant="body1">Phone Number: {formData.phoneNo}</Typography>
                <Typography variant="body1">Address Line 1: {formData.address1}</Typography>
                <Typography variant="body1">Address Line 2: {formData.address2}</Typography>
                <Typography variant="body1">City: {formData.city}</Typography>
                <Typography variant="body1">State: {formData.state}</Typography>
                <Typography variant="body1">Zip Code: {formData.zipCode}</Typography>
            </div>
        );
    }
    return null;
}
