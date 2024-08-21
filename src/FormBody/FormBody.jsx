import React from "react";
import InputComponent from "../inputComponent/inputComponent";
import "./FormBody.css";

export default function FormBody({ step, formData, onChange, errors }) {
    const stepClass = step === 0 ? 'step0' : 'step1';

    return (
        <div className={`formBody ${stepClass}`}>
            <h1>Multi Step Form</h1>
            {step === 0 && (
                <>
                    <div className="formField">
                        <InputComponent 
                            type="userName" 
                            value={formData.userName} 
                            onChange={onChange}
                            error={errors.userName}  // Pass error messages
                        />
                    </div>
                    <div className="formField">
                        <InputComponent 
                            type="email" 
                            value={formData.email} 
                            onChange={onChange}
                            error={errors.email}  // Pass error messages
                        />
                    </div>
                    <div className="formField">
                        <InputComponent 
                            type="phoneNo" 
                            value={formData.phoneNo} 
                            onChange={onChange}
                            error={errors.phoneNo}  // Pass error messages
                        />
                    </div>
                </>
            )}
            {step === 1 && (
                <>
                    {/* Address-related fields */}
                </>
            )}
        </div>
    );
}
