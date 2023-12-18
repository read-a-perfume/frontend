import {Box} from '@mui/material'
import MuiButton from '@components/base/mui-button'

interface Props {
  title: string
  value: string
  checkUserId: any
}
const SignUpIdCheck = ({title, value, checkUserId}: Props) => {
  return (
    <Box sx={{position: 'absolute', right: '-100px', top: '35px'}}>
      {title === '중복확인' && (
        <MuiButton
          type="dark"
          title={title}
          handleClick={() => checkUserId(value)}
        />
      )}
      {title === '인증(필수)' && (
        <MuiButton
          type="dark"
          title={title}
          handleClick={() => checkUserId(value)}
        />
      )}
    </Box>
  )
}

export default SignUpIdCheck
