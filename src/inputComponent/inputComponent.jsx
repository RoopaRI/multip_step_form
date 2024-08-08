import React, { useState } from "react";
import "./inputComponent.css";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';

export default function InputComponent({ type }) {
    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        phoneNo: "",
        address: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [type]: e.target.value,
        });
    };

    return (
        <div className="formField">
            <FormControl className="input">
                <InputLabel htmlFor={type}>{type.toUpperCase()}</InputLabel>
                <Input
                    type={type}
                    id={type}
                    value={formData[type]}
                    onChange={handleChange}
                    required
                />
            </FormControl>
        </div>
    );
}