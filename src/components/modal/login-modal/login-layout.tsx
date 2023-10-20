import { useState } from "react";
import { LoginConditionProps, UserInfo } from "./login-modal.interface";
import { ErrorText } from "./login-modal.style";
import Additionals from "./additionals";
import Buttons from "./buttons";
import Inputs from "./Inputs";
import LoginModalTitle from "./login-modal-title";

const LoginLayout = ({
  condition,
  setCondition,
  setIsOpen,
}: LoginConditionProps) => {
  // const navigate = useNavigate()
  const [inputs, setInputs] = useState<UserInfo>({ id: "", password: "" });
  const [errors, setErrors] = useState<string>("");
  const [tabClick, setTabClick] = useState<string>("personal");

  return (
    <>
      <LoginModalTitle
        setTabClick={setTabClick}
        tabClick={tabClick}
        setInputs={setInputs}
      />
      <Inputs setErrors={setErrors} setInputs={setInputs} inputs={inputs} />
      <Additionals setCondition={setCondition} />
      {errors && <ErrorText>{errors}</ErrorText>}
      <Buttons
        errors={errors}
        tabClick={tabClick}
        condition={condition}
        inputs={inputs}
        setIsOpen={setIsOpen}
      />
    </>
  );
};

export default LoginLayout;
