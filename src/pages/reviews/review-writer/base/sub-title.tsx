import Typography from '@mui/material/Typography'

const SubTitle = ({title}: {title: string}) => {
  return (
    <Typography
      variant="body2"
      fontWeight={600}
      sx={{display: 'block', marginBottom: '16px'}}
    >
      {title}
    </Typography>
  )
}

export default SubTitle
