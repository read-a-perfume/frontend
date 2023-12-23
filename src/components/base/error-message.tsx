import {Typography} from '@mui/material'

const ErrorMessage = ({errorMessage}: {errorMessage?: string}) => {
  return (
    <Typography
      variant="body5"
      sx={{display: 'block', marginTop: '6px'}}
      fontStyle={{color: '#ff3b3b'}}
    >
      {errorMessage}
    </Typography>
  )
}

export default ErrorMessage
