import signUpvalidate from '@pages/sign-up/utils/sign-up-validate'
import {useController} from 'react-hook-form'

const useFormValidate = control => {
  const username = useController({
    name: 'username', // defaultsvalues 저장한 객체 키
    control,
    rules: {
      ...signUpvalidate.username.register,
    },
  })

  const password = useController({
    name: 'password', // defaultsvalues 저장한 객체 키
    control,
    rules: {
      ...signUpvalidate.password.register,
    },
    //규칙
  })

  return {username, password}
}

export default useFormValidate
