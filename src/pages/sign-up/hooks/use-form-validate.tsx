import {useController, useFormContext} from 'react-hook-form'
import signUpvalidate from '../utils/sign-up-validate'


const useFormValidate = () => {
  const {control, watch} = useFormContext()

  const username = useController({
    name: 'username', // defaultsvalues 저장한 객체 키
    control,
    rules: {
      ...signUpvalidate.username.register,
    },
    //규칙
  })

  const password = useController({
    name: 'password', // defaultsvalues 저장한 객체 키
    control,
    rules: {
      ...signUpvalidate.password.register,
    },
    //규칙
  })
  const confirmPassword = useController({
    name: 'confirmPassword', // defaultsvalues 저장한 객체 키
    control,
    rules: {
      validate: (val: string) => {
        if (watch('password') != val) {
          return '비밀번호가 일치하지않습니다.'
        }
      },
      ...signUpvalidate.confirmPassword.register,
    },

    //규칙
  })

  const email = useController({
    name: 'email', // defaultsvalues 저장한 객체 키
    control,
    rules: {
      ...signUpvalidate.email.register,
    },
  })
  const emailAuth = useController({
    name: 'emailAuth', // defaultsvalues 저장한 객체 키
    control,
  })

  const allCheck = useController({
    name: 'allCheck',
    control,
    defaultValue: false,
  })

  const terms = useController({
    name: 'terms',
    control,
    defaultValue: false,
  })
  const age = useController({
    name: 'age',
    control,
    defaultValue: false,
  })
  const privacy = useController({
    name: 'privacy',
    control,
    defaultValue: false,
  })

  const marketingConsent = useController({
    name: 'marketingConsent',
    control,
    defaultValue: false,
  })
  const promotionConsent = useController({
    name: 'promotionConsent',
    control,
    defaultValue: false,
  })
  return {
    username,
    password,
    confirmPassword,
    email,
    emailAuth,
    terms,
    age,
    privacy,
    marketingConsent,
    promotionConsent,
    allCheck,
  }
}

export default useFormValidate
