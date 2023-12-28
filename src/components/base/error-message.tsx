import {SxProps, Theme, Typography} from '@mui/material'

const ErrorMessage = ({
  errorMessage,
  sx
}: {
  errorMessage?: string
  sx?: SxProps<Theme> | undefined
}) => {
  return (
    <Typography
      variant="body5"
      sx={{display: 'block', marginTop: '6px', ...sx}}
      fontStyle={{color: '#ff3b3b'}}
    >
      {errorMessage}
    </Typography>
  )
}

export default ErrorMessage
