import InputComponent from "../inputComponent/inputComponent";
import "./FormBody.css";

export default function FormBody(){
    return(
        <div className="formBody">
            <h1>Multi Step Form</h1>
            <InputComponent type="userName"/>
            <InputComponent type="email"/>
            <InputComponent type="phoneNo"/>
        </div>
    )
}
