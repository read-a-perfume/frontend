import {ButtonBase, Typography, styled} from '@mui/material'
import WestIcon from '@mui/icons-material/West'

const FormHeader = ({title}: any) => {
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

export default FormHeader

const BackButton = styled(ButtonBase)(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  marginBottom: 66,
  '& span': {
    marginLeft: 13,
  },
}))
