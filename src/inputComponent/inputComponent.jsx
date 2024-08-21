import React from "react";
import "./inputComponent.css";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText'; // For displaying errors

export default function InputComponent({ type, value, onChange, error }) {
    const handleChange = (e) => {
        onChange(type, e.target.value);
    };

    const getLabel = (type) => {
        switch (type) {
            case 'userName':
                return 'Username';
            case 'email':
                return 'Email';
            case 'phoneNo':
                return 'Phone Number';
            case 'address1':
                return 'Address Line 1';
            case 'address2':
                return 'Address Line 2';
            case 'city':
                return 'City';
            case 'state':
                return 'State';
            case 'zipCode':
                return 'Zip Code';
            default:
                return '';
        }
    };

    return (
        <div className="formField">
            <FormControl className="input" error={!!error}>
                <InputLabel htmlFor={type}>{getLabel(type)}</InputLabel>
                <Input
                    type={type === 'email' ? 'email' : 'text'}
                    id={type}
                    value={value}
                    onChange={handleChange}
                    required
                />
                {error && <FormHelperText>{error}</FormHelperText>}
            </FormControl>
        </div>
    );
}
