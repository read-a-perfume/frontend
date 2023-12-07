import {Box, ButtonBase} from '@mui/material'
import {useForm} from 'react-hook-form'
import styled from '@emotion/styled'
import {theme} from '../../theme'
import FormHeader from './form-header'
import FormAgreement from './form-agreement'
import {formCheckboxData, formData} from './data.constant'
import FormInputList from './form-input-list'
import instance from '@api/instance'
import {useNavigate} from 'react-router-dom'
import useMutation from 'src/store/server/use-mutation'

const API_URL = '/signup/email'

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
  const fetchJoin = async data => {
    return await instance.post(API_URL, {
      ...data,
    })
  }

  const {mutate} = useMutation({
    mutationFn: fetchJoin,
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
        <FormHeader title="회원가입" />
        <FormInputList
          formData={formData}
          register={register}
          errors={errors}
        />

        <FormAgreement
          formCheckboxData={formCheckboxData}
          errors={errors}
          control={control}
          setValue={setValue}
          watch={watch}
        />
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
