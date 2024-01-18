import Box from '@mui/material/Box'
import ButtonBase from '@mui/material/ButtonBase'
import {FormProvider, useForm} from 'react-hook-form'
import styled from '@emotion/styled'
import {theme} from '../../theme'
import FormAgreement from './sign-up-agreement'
import SignUpHeader from './sign-up-header'
import SignUpFooter from './sign-up-footer'
import SignupInputs from './sign-up-inputs'
import AlertModal from '@components/modal/alert-modal'
import {useState} from 'react'
import {useRouter} from '@hooks/use-router'
import usePostSignUpCreate from './hooks/use-post-sign-up-create'
import {SignUpProvider} from './sign-up-provider'

const initData = {
  username: '',
  password: '',
  email: '',
  emailAuthCode: '',
  passwordConfirm: '',
  marketingConsent: false,
  promotionConsent: false,
}

const SignUpForm = () => {
  const [open, setOpen] = useState(false)
  const {createSignUp} = usePostSignUpCreate()
  const methods = useForm({
    defaultValues: initData,
  })
  const {routeTo} = useRouter()

  const onSubmit = data => {
    const newData = {
      username: data.username,
      password: data.password,
      email: data.email,
      marketingConsent: data.marketingConsent,
      promotionConsent: data.promotionConsent,
    }

    createSignUp(newData)
  }

  const handleClose = () => {
    setOpen(false)
    routeTo('/')
  }

  return (
    <SignUpProvider>
      <FormProvider {...methods}>
        <SignUpFormContainer onSubmit={methods.handleSubmit(onSubmit)}>
          <SignUpHeader title="회원가입" />
          <SignupInputs />
          <FormAgreement />
          <SignUpFooter subText="이미 회원이신가요?" title="로그인하기" />
          <AlertModal
            open={open}
            handleClose={handleClose}
            title="회원가입"
            description="완료되었습니다."
            buttonText="확인"
          />
        </SignUpFormContainer>
      </FormProvider>
    </SignUpProvider>
  )
}

export default SignUpForm
export const SignUpFormContainer = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  margin: 'auto',
  '& > * + *': {
    marginTop: 24,
  },

  maxWidth: 500,
}))

export const BackButton = styled(ButtonBase)(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  marginBottom: 66,
  '& span': {
    marginLeft: 13,
  },
}))

export const ConsentBox = styled(Box)(() => ({
  marginBottom: 30,
  padding: 4,
  paddingBottom: 0,
  borderRadius: 4,
  '& li': {
    listStyle: 'none',
  },
}))

export const LoginLinkBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  '& *': {
    fontSize: theme.typography.body4.fontSize,
  },
}))
