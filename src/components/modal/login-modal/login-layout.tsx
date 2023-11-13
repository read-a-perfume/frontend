import {useState} from 'react'
import {LoginConditionProps, UserInfo} from './login-modal.interface.js'
import {ErrorText} from './login-modal.style.js'
import Additionals from './additionals.js'
import Buttons from './buttons.js'
import Inputs from './Inputs.js'
import LoginModalTitle from './login-modal-title.js'

const LoginLayout = ({
  condition,
  setCondition,
  setIsOpen,
}: LoginConditionProps) => {
  // const navigate = useNavigate()
  const [inputs, setInputs] = useState<UserInfo>({id: '', password: ''})
  const [errors, setErrors] = useState<string>('')
  const [tabClick, setTabClick] = useState<string>('personal')

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
  )
}

export default LoginLayout
