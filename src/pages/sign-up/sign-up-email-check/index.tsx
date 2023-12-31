import {Box} from '@mui/material'
import MuiButton from '@components/base/mui-button'

interface Props {
  title: string
  value: string
  handleClick: (id: string) => void
}
const SignUpEmailCheck = ({title, value, handleClick}: Props) => {
  return (
    <Box sx={{position: 'absolute', right: '-100px', top: '35px'}}>
      <MuiButton
        formType="button"
        type="dark"
        title={title}
        handleClick={() => handleClick(value)}
      />
    </Box>
  )
}

export default SignUpEmailCheck
