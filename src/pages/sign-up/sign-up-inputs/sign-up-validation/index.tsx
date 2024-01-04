import {ListItem, TextField, Typography} from '@mui/material'
import {styled, Box} from '@mui/material'
import ErrorMessage from '@components/base/error-message'
import {IfFormTextFiledValidationProps} from '@pages/sign-up/types'

const SignUpValidation = ({
  placeholder,
  method,
  type,
  compoment,
  name,
}: IfFormTextFiledValidationProps) => {
  const {
    field,
    formState: {errors},
  } = method

  return (
    <ViewInput>
      <TextFiledWrapper sx={{width: '342px', position: 'relative'}}>
        <Typography variant="body3" mb={2}>
          {name}
        </Typography>
        <>
          <CustomTextFiled
            hiddenLabel
            InputLabelProps={{shrink: false}}
            type={type}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            helperText={
              <ErrorMessage errorMessage={errors[field.name]?.message} />
            }
            placeholder={placeholder}
          />
        </>
        {compoment}
      </TextFiledWrapper>
    </ViewInput>
  )
}
export default SignUpValidation

const ViewInput = styled(ListItem)({
  display: 'flex',
  alignItems: 'end',
  gap: '20px',
})

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
// const helperTextService = (filedState: ControllerFieldState) => {

//   if (filedState.error && filedState.error.message) {
//     return filedState.error.message
//   }
//   if (!filedState.error && idCheckMessage) {
//     return idCheckMessage
//   }
// }
