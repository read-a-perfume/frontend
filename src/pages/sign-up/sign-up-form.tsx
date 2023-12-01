import {Box, ButtonBase} from '@mui/material'
import {useForm} from 'react-hook-form'
import styled from '@emotion/styled'
import {theme} from '../../theme'
import FormHeader from './form-header'
import FormAgreement from './form-greement'
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
        {/* {true && (
          <>
            <FormInput
              text={
                <FlexBox direction="column">
                  <Typography variant="caption" mt={1}>
                    혹시 인증번호가 오지 않았다면
                    <button
                      style={{
                        color: theme.palette.primary.main,
                        textDecoration: 'underline',
                        marginLeft: 4,
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        fontSize: theme.typography.caption.fontSize,
                      }}
                    >
                      재발급
                    </button>
                    을 눌러주세요.
                  </Typography>
                </FlexBox>
              }
            >
              <OutlinedInput
                style={{
                  fontSize: theme.typography.body3.fontSize,
                }}
                type="text"
                placeholder="인증코드 6자리 입력."
                color="info"
                {...register('emailAuthCode', {
                  required: {
                    value: true,
                    message: '이메일 인증번호를 입력해주세요.',
                  },
                })}
              />
            </FormInput>

            <Grid item xs={3}>
              <CheckButton
                disableElevation
                variant="contained"
                color="inherit"
                onClick={onClickConfirmAuth}
                // disabled={confirmEmail}
                // style={{
                //   backgroundColor: confirmEmail
                //     ? theme.palette.grey[200]
                //     : 'black',
                //   whiteSpace: 'nowrap',
                //   marginTop: 14,
                // }}
              >
                인증번호 확인
              </CheckButton>
            </Grid>
          </>
        )} */}

        {/* <Dialog open={() => console.log('')}>
        <DialogContent>
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Typography align="center" variant="body2" mb={2} fontWeight={600}>
              인증 메일을 발송했습니다.
              <br />
              메일함을 확인해주세요.
            </Typography>
            <Button
              disableElevation
              variant="contained"
              onClick={closeEmailSendAlert}
            >
              확인
            </Button>
          </Box>
        </DialogContent>
      </Dialog> */}
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
