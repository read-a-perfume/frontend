import MuiButton from "@components/base/mui-button"
import { Box } from "@mui/material"
import { IfSignUpEmailConfirmProps } from "@pages/sign-up/types"

const EmailAuthCodeConfirmButton = ({
    title,
    emailAdreess,
    emailCode,
    confirmEmail,
  }: IfSignUpEmailConfirmProps) => {
  return (
    <Box sx={{position: 'absolute', right: '-100px', top: '35px'}}>
      <MuiButton
        formType="button"
        type="dark"
        title={title}
        handleClick={() => confirmEmail({email:emailAdreess,code:emailCode})}
      />
    </Box>
  )
}

export default EmailAuthCodeConfirmButton
