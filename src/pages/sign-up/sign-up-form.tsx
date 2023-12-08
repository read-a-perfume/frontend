import {Box, ButtonBase} from '@mui/material'
import {useForm} from 'react-hook-form'
import styled from '@emotion/styled'
import {theme} from '../../theme'
import FormAgreement from './sign-up-agreement'
import {formData} from './data.constant'
import IndividualSignupInputs from './individual/individual-signup-inputs'
import {useNavigate} from 'react-router-dom'
import useMutation from 'src/store/server/use-mutation'
import {fetchSignUp} from 'src/store/server/auth/mutations'
import SignUpHeader from './sign-up-header'
import SignUpFooter from './sign-up-footer'

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: {errors},
    watch,
    setValue,
  } = useForm()
  const nav = useNavigate()

  const {mutate} = useMutation({
    mutationFn: fetchSignUp,
    mutationKey: ['sign-up'],
  })

  const onSubmit = data => {
    const newData = {
      username: data.username,
      password: data.password,
      email: data.email,
    }
    mutate(newData, {
      onSuccess: () => nav('/'),
    })
  }

  return (
    <>
      <SignUpFormContainer onSubmit={handleSubmit(onSubmit)}>
        <SignUpHeader title="회원가입" />
        <IndividualSignupInputs
          formData={formData}
          register={register}
          errors={errors}
        />
        <FormAgreement control={control} setValue={setValue} watch={watch} />
        <SignUpFooter subText="이미 회원이신가요?" title="로그인하기" />
      </SignUpFormContainer>
    </>
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
