import MuiButton from '@components/base/mui-button'
import Box from '@mui/material/Box'
import {IfSignUpEmailConfirmProps} from '@pages/sign-up/types'

const EmailAuthCodeConfirmButton = ({
  beforeTitle,
  afterTitle,
  isAuthCheck,
  emailAdreess,
  emailCode,
  confirmEmail,
}: IfSignUpEmailConfirmProps) => {
  return (
    <Box sx={{position: 'absolute', right: '-100px', top: '35px'}}>
      <MuiButton
        formType="button"
        type={isAuthCheck ? 'grey' : 'dark'}
        title={isAuthCheck ? afterTitle : beforeTitle}
        disabled={isAuthCheck}
        handleClick={() => confirmEmail({email: emailAdreess, code: emailCode})}
      />
    </Box>
  )
}

export default EmailAuthCodeConfirmButton
