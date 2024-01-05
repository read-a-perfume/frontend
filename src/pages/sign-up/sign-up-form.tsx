import {Box, ButtonBase} from '@mui/material'
import {FormProvider, useForm} from 'react-hook-form'
import styled from '@emotion/styled'
import {theme} from '../../theme'
import FormAgreement from './sign-up-agreement'
import useMutation from 'src/store/server/use-mutation'
import {postSignUp} from 'src/store/server/auth/mutations'
import SignUpHeader from './sign-up-header'
import SignUpFooter from './sign-up-footer'
import SignupInputs from './sign-up-inputs'
import AlertModal from '@components/modal/alert-modal'
import {useState} from 'react'
import {useRouter} from '@hooks/use-router'
import axios from 'axios'

const SignUpForm = () => {
  const [open, setOpen] = useState(false)
  const methods = useForm({
    defaultValues: {
      username: '',
      password: '',
      email: '',
      passwordConfirm: '',
      marketingConsent: false,
      promotionConsent: false,
      usernameCheck: false, //아이디 중복 체크 여부
      emailCheck: false, // 이메일 전송 여부
      emailConfirm: false, // 이메일 인증코드 확인 여부
    },
  })
  const {routeTo} = useRouter()

  const {mutate} = useMutation({
    mutationKey: ['sign-up'],
    mutationFn: postSignUp,
    options: {
      onSuccess: () => routeTo('/'),
      onError: error => {
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 409) {
            alert(error.response.data.message)
          }
        } else {
          alert('회원가입에 실패 했습니다.')
        }
      },
    },
  })

  const onSubmit = data => {
    const newData = {
      username: data.username,
      password: data.password,
      email: data.email,
      marketingConsent: data.marketingConsent,
      promotionConsent: data.promotionConsent,
    }

    mutate(newData)
  }

  const handleClose = () => {
    setOpen(false)
    routeTo('/')
  }

  return (
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
{
  /* endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={onToggleShowPassword} edge="end">
                  {showPassword ? (
                    <VisibilityOff sx={{color: theme.palette.grey[400]}} />
                  ) : (
                    <Visibility style={{color: theme.palette.grey[400]}} />
                  )}
                </IconButton>
              </InputAdornment>
            }
       */
}

// const handleAllCheck = () => {
//   const isAllChecked = !getValues('allChecked')
//   setAllChecked(isAllChecked) // 상태 업데이트
//   const checkboxFields = [
//     'age',
//     'terms',
//     'privacy',
//     'marketing',
//     'notification',
//   ]

//   checkboxFields.forEach(field => {
//     setValue(field, isAllChecked)
//   })
//   console.log(isAllChecked, 'isAll')
// }
