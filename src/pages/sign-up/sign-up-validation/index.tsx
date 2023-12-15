import {TextField, Typography} from '@mui/material'
import {styled, Box} from '@mui/material'
import {Controller, ControllerFieldState} from 'react-hook-form'
import SignUpIdCheck from '../sign-up-id-check'
import useSignUpIdCheck from '../hooks/use-sign-up-id-check'

interface FormTextFiledValidationProps {
  label: string // 라벨
  name: string
  errors: any // 에러객체
  placeholder: string // 입력 전 값
  showPassword?: boolean // 패스워드 보이게 할지 말지 설정 값
  register: any
  control: any
}
const SignUpValidation = ({
  label,
  placeholder,
  name,
  showPassword,
  register,
  control,
}: FormTextFiledValidationProps) => {
  const {mutateCheckUserId, idCheckMessage} = useSignUpIdCheck({
    success: '아이디가 인증되었습니다',
    failed: '아이디 사용이 불가능합니다',
  })

  const helperTextService = (filedState: ControllerFieldState) => {
    if (filedState.error && filedState.error.message) {
      return filedState.error.message
    }
    if (!filedState.error && idCheckMessage) {
      return idCheckMessage
    }
  }

  return (
    <TextFiledWrapper sx={{width: '342px', position: 'relative'}}>
      <Typography variant="body3" mb={2}>
        {label}
      </Typography>
      <Controller
        hiddenLabel
        name={name}
        control={control}
        {...register}
        render={({field, fieldState}) => (
          <>
            <CustomTextFiled
              hiddenLabel
              InputLabelProps={{shrink: false}}
              type={showPassword ? 'password' : 'text'}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={!!fieldState.error}
              helperText={helperTextService(fieldState)}
              placeholder={placeholder}
            />
            {label === '아이디' && (
              <SignUpIdCheck
                title="중복확인"
                value={field.value}
                checkUserId={mutateCheckUserId}
              />
            )}
          </>
        )}
      />
    </TextFiledWrapper>
  )
}
export default SignUpValidation
const TextFiledWrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  '& input': {
    fontSize: theme.typography.body3,
  },
}))

const CustomTextFiled = styled(TextField)(({theme}) => ({
  '& > .MuiOutlinedInput-root': {
    fontSize: theme.typography.body3.fontSize,
    background: '#ffff',
    borderRadius: '10px',
    height: '48px',
  },
}))
