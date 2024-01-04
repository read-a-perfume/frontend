import {Box} from '@mui/material'
import MuiButton from '@components/base/mui-button'
import {IfSignUpEmailCheckProps} from '../../../types'

const EmailCheck = ({
  title,
  value,
  handleEmailDuplicateCheck,
}: IfSignUpEmailCheckProps) => {
  return (
    <Box sx={{position: 'absolute', right: '-100px', top: '35px'}}>
      <MuiButton
        formType="button"
        type="dark"
        title={title}
        handleClick={() => handleEmailDuplicateCheck(value)}
      />
    </Box>
  )
}

export default EmailCheck
