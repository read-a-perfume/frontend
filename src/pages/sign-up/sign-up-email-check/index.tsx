import {Box} from '@mui/material'
import MuiButton from '@components/base/mui-button'

interface Props {
  title: string
  value: string
  handleEmailDuplicateCheck: (id: string) => void
}
const SignUpEmailCheck = ({title, value, handleEmailDuplicateCheck}: Props) => {
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

export default SignUpEmailCheck
