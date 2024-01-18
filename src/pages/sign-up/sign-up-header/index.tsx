import ButtonBase from '@mui/material/ButtonBase'
import Typography from '@mui/material/Typography'
import styled from '@mui/material/styles/styled'
import WestIcon from '@mui/icons-material/West'

const SignUpHeader = ({title}: any) => {
  return (
    <>
      <BackButton>
        <WestIcon />
        <span>Back</span>
      </BackButton>
      <Typography variant="h1" mb={4}>
        {title}
      </Typography>
    </>
  )
}

export default SignUpHeader

const BackButton = styled(ButtonBase)(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  marginBottom: 66,
  '& span': {
    marginLeft: 13,
  },
}))
