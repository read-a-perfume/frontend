import Typography from '@mui/material/Typography'

const SignUpLabel = ({label}: {label: string}) => {
  return (
    <Typography variant="body3" mb={2}>
      {label}
    </Typography>
  )
}

export default SignUpLabel
