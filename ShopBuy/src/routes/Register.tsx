// css
import classes from "./style/Register.module.css";

// react-icons
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

// components
import UserForm from "../components/UserForm";
import PersonalData from "../components/PersonalData";
import TermServices from "../components/TermServices";
import Steps from "../components/Steps";

// hook
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "../hooks/useForm";

// types
type FormFields = {
  name: string;
  nickname: string;
  email: string;
  password: string;
  repeatPassword: string;
  birth: string;
  gender: string;
  phoneNumber: string;
};

const formTemplate: FormFields = {
  name: "",
  nickname: "",
  email: "",
  password: "",
  repeatPassword: "",
  birth: "",
  gender: "",
  phoneNumber: "",
};

const Register = () => {
  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key: string, value: string) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <PersonalData data={data} updateFieldHandler={updateFieldHandler} />,
    <TermServices data={data} />,
  ];

  const { changeStep, currentStep, currentComponent, isFirstStep, isLastStep } =
    useForm(formComponents);

  return (
    <div className={classes.form_container}>
      <Steps currentStep={currentStep} />
      <form onSubmit={(event) => changeStep(currentStep + 1, event)}>
        <div className={classes.inputs_container}>{currentComponent}</div>
        <div className={classes.actions}>
          <Link to="/signin">Do you have an account? Login here!</Link>
          {!isFirstStep && (
            <button type="button" onClick={() => changeStep(currentStep - 1)}>
              <span>
                <GrFormPrevious />
                Back
              </span>
            </button>
          )}
          {!isLastStep ? (
            <button type="submit">
              <span>
                Advanced
                <GrFormNext />
              </span>
            </button>
          ) : (
            <button type="submit">
              <span>Create Account</span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Register;
