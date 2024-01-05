import {Box} from '@mui/material'
import MuiButton from '@components/base/mui-button'

const UserNameCheckButton = ({
  beforeTitle,
  afterTitle,
  value,
  handleIdDuplicateCheck,
  isAuthCheck,
}: any) => {
  return (
    <Box sx={{position: 'absolute', right: '-100px', top: '35px'}}>
      <MuiButton
        type={isAuthCheck ? 'grey' : 'dark'}
        title={isAuthCheck ? afterTitle : beforeTitle}
        handleClick={() => handleIdDuplicateCheck(value)}
        disabled={isAuthCheck}
      />
    </Box>
  )
}

export default UserNameCheckButton
