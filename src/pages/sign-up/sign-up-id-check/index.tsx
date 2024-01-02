import {Box} from '@mui/material'
import MuiButton from '@components/base/mui-button'
import {IfSignUpIdCheckProps} from '../types'

const SignUpIdCheck = ({
  title,
  value,
  handleIdDuplicateCheck,
}: IfSignUpIdCheckProps) => {
  return (
    <Box sx={{position: 'absolute', right: '-100px', top: '35px'}}>
      <MuiButton
        type="dark"
        title={title}
        handleClick={() => handleIdDuplicateCheck(value)}
      />
    </Box>
  )
}

export default SignUpIdCheck
