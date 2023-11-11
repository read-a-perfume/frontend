import {Box, Grid, ButtonBase, List, ListItem} from '@mui/material'
import {useForm} from 'react-hook-form'
import styled from '@emotion/styled'
import {theme} from '../../theme'
import FormTextFiledValidation from './form-textfiled-validation'
import FormHeader from './form-header'
import FormAgreement from './form-greement'
import {formData} from './data.constant'
import FormEmailCheck from './form-email-check'

// type SignUpInputs = {
//   username: string
//   password: string
//   passwordCheck: string
//   email: string
//   emailAuthCode: string
//   companyName: string
//   bizNum: string
//   phoneNumer: string
// }

const SignUpForm = (props: any) => {
  const {
    register,
    handleSubmit,

    // watch,
    formState: {errors},

    // getValues,
  } = useForm<any>()

  // const onSubmit = event => {
  //   event.preventDefault()
  //   // 선택된 값에 따른 작업 수행
  //   const formData = new FormData(event.currentTarget)

  //   for (const pair of formData.entries()) {
  //     console.log(pair[0] + ', ' + pair[1])
  //   }
  // }

  return (
    <SignUpFormContainer
      onSubmit={handleSubmit(data => console.log(data, 'Data'))}
    >
      <FormHeader title="회원가입" />
      <List sx={{width: '100%'}}>
        {formData.map((it, index) => (
          <ListItem sx={{display: 'flex', alignItems: 'end', gap: '20px'}}>
            <FormTextFiledValidation
              key={index}
              label={it.label}
              name={it.name}
              placeholder={it.placeholder}
              register={register(`${it.name}`, {...it.register})}
              errors={errors && errors[`${it.name}`]}
            />
            {it.name === 'username' && <FormEmailCheck />}
            {it.name === 'email' && <FormEmailCheck />}
          </ListItem>
        ))}
      </List>

      <Grid container width="100%" rowSpacing={2} columnSpacing={2}>
        <FormAgreement />
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
        {/* <FormAgreement /> */}
      </Grid>
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
