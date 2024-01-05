import ErrorMessage from '@components/base/error-message'
import {TextField, styled} from '@mui/material'

const SignUpTextFiled = ({type, method, placeholder, isAuthCheck}: any) => {
  const {
    field,
    formState: {errors},
  } = method

  return (
    <CustomTextFiled
      hiddenLabel
      InputLabelProps={{shrink: false}}
      {...field}
      type={type}
      helperText={<ErrorMessage errorMessage={errors[field.name]?.message} />}
      placeholder={placeholder}
      disabled={isAuthCheck}
    />
  )
}

export default SignUpTextFiled

const CustomTextFiled = styled(TextField)(({theme}) => ({
  '& > .MuiOutlinedInput-root': {
    fontSize: theme.typography.body3.fontSize,
    background: '#ffff',
    borderRadius: '10px',
    height: '48px',
  },
}))
