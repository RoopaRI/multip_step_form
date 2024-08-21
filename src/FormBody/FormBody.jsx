import InputComponent from "../inputComponent/inputComponent";
import "./FormBody.css";

export default function FormBody({ step, formData, onChange }) {
    const stepClass = step === 0 ? 'step0' : 'step1';

    return (
        <div className={`formBody ${stepClass}`}>
            <h1>Multi Step Form</h1>
            {step === 0 && (
                <>
                    <div className="formField">
                        <InputComponent type="userName" value={formData.userName} onChange={onChange} />
                    </div>
                    <div className="formField">
                        <InputComponent type="email" value={formData.email} onChange={onChange} />
                    </div>
                    <div className="formField">
                        <InputComponent type="phoneNo" value={formData.phoneNo} onChange={onChange} />
                    </div>
                </>
            )}
            {step === 1 && (
                <>
                    <div className="formField">
                        <InputComponent type="address1" value={formData.address1} onChange={onChange} />
                    </div>
                    <div className="formField">
                        <InputComponent type="address2" value={formData.address2} onChange={onChange} />
                    </div>
                    <div className="formField">
                        <InputComponent type="city" value={formData.city} onChange={onChange} />
                    </div>
                    <div className="formField">
                        <InputComponent type="state" value={formData.state} onChange={onChange} />
                    </div>
                    <div className="formField">
                        <InputComponent type="zipCode" value={formData.zipCode} onChange={onChange} />
                    </div>
                </>
            )}
        </div>
    );
}
