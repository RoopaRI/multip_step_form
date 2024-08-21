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
                            error={errors.userName}
                        />
                    </div>
                    <div className="formField">
                        <InputComponent
                            type="email"
                            value={formData.email}
                            onChange={onChange}
                            error={errors.email}
                        />
                    </div>
                    <div className="formField">
                        <InputComponent
                            type="phoneNo"
                            value={formData.phoneNo}
                            onChange={onChange}
                            error={errors.phoneNo}
                        />
                    </div>
                </>
            )}
            {step === 1 && (
                <>
                    <div className="formField">
                        <InputComponent
                            type="address1"
                            value={formData.address1}
                            onChange={onChange}
                            error={errors.address1}
                        />
                    </div>
                    <div className="formField">
                        <InputComponent
                            type="address2"
                            value={formData.address2}
                            onChange={onChange}
                            error={errors.address2}
                        />
                    </div>
                    <div className="formField">
                        <InputComponent
                            type="city"
                            value={formData.city}
                            onChange={onChange}
                            error={errors.city}
                        />
                    </div>
                    <div className="formField">
                        <InputComponent
                            type="state"
                            value={formData.state}
                            onChange={onChange}
                            error={errors.state}
                        />
                    </div>
                    <div className="formField">
                        <InputComponent
                            type="zipCode"
                            value={formData.zipCode}
                            onChange={onChange}
                            error={errors.zipCode}
                        />
                    </div>
                </>
            )}
        </div>
    );
}
