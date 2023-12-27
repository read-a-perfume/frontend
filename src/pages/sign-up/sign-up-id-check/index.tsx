import {Box} from '@mui/material'
import MuiButton from '@components/base/mui-button'

interface Props {
  title: string
  value: string
  handleClick: (id: string) => void
}
const SignUpIdCheck = ({title, value, handleClick}: Props) => {
  return (
    <Box sx={{position: 'absolute', right: '-100px', top: '35px'}}>
      {title === '중복확인' && (
        <MuiButton
          type="dark"
          title={title}
          handleClick={() => handleClick(value)}
        />
      )}
    </Box>
  )
}

export default SignUpIdCheck
