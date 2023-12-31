import {Box} from '@mui/material'
import MuiButton from '@components/base/mui-button'


interface Props {
  title: string
  value: string
  handleIdDuplicateCheck: (id: string) => void
}
const SignUpIdCheck = ({title, value, handleIdDuplicateCheck}:Props) => {

 
  return (
    <Box sx={{position: 'absolute', right: '-100px', top: '35px'}}>
      <MuiButton type="dark" title={title} handleClick={() => handleIdDuplicateCheck(value)} />
    </Box>
  )
}

export default SignUpIdCheck
