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

const FormTextFiledValidation = ({
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
      <OutlinedInput
        name={name}
        sx={{
          fontSize: theme.typography.body3.fontSize,
        }}
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
export default FormTextFiledValidation
const TextFiledWrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  '& input': {
    fontSize: theme.typography.body3,
  },
}))
