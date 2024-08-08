import InputComponent from "../inputComponent/inputComponent";
import "./FormBody.css";

export default function FormBody({ step }) {
    return (
        <div className="formBody">
            <h1>Multi Step Form</h1>
            {step === 0 && (
                <>
                    <InputComponent type="userName" />
                    <InputComponent type="email" />
                    <InputComponent type="phoneNo" />
                </>
            )}
            {step === 1 && (
                <>
                    <InputComponent type="address" />
                </>
            )}
        </div>
    );
}