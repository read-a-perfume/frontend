import Typography from '@mui/material/Typography'

const SubTitle = ({title}: {title: string}) => {
  return (
    <Typography
      variant="body5"
      fontStyle={{display: 'block', color: '#a9a9a9', marginBottom: '7px'}}
    >
      {title}
    </Typography>
  )
}

export default SubTitle
