import { InputProps } from "./login-modal.interface";
import { ModalInputs, ModalInputStyle } from "./login-modal.style";

const Inputs = ({ setInputs, setErrors, inputs }: InputProps) => {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
    setErrors("");
    // setErrors("아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력하셨습니다.\n입력하신 내용을 다시 확인해주세요.")
  };

  return (
    <>
      <ModalInputs
        required
        fullWidth
        size="small"
        placeholder="아이디"
        name="id"
        sx={ModalInputStyle}
        value={inputs.id}
        onChange={changeHandler}
      />
      <ModalInputs
        required
        fullWidth
        type="password"
        size="small"
        placeholder="비밀번호"
        name="password"
        sx={ModalInputStyle}
        value={inputs.password}
        onChange={changeHandler}
      />
    </>
  );
};

export default Inputs;
