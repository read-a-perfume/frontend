import {OutlinedInput, Typography} from '@mui/material'
import {styled, Box} from '@mui/material'
import {theme} from '@theme/index'

interface FormTextFiledValidationProps {
  label: string // 라벨
  name: string
  errors: any // 에러객체
  placeholder: string // 입력 전 값
  showPassword?: boolean // 패스워드 보이게 할지 말지 설정 값
  register: any
}

const SignUpValidation = ({
  label,
  errors,
  placeholder,
  name,
  showPassword,
  register,
}: FormTextFiledValidationProps) => {
  return (
    <TextFiledWrapper sx={{width: '342px'}}>
      <Typography variant="body3" mb={2}>
        {label}
      </Typography>
      <TextFiled
        name={name}
        placeholder={placeholder}
        type={showPassword ? 'password' : 'text'}
        color="info"
        {...register}
      />
      {errors && (
        <Typography variant="body5" color={theme.palette.error.main} mt={1}>
          {errors.message}
        </Typography>
      )}
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

const TextFiled = styled(OutlinedInput)(({theme}) => ({
  fontSize: theme.typography.body3.fontSize,
  background: '#ffff',
  borderRadius: '10px',
  height: '48px',
}))
