import {Box, Typography, styled} from '@mui/material'

interface proptype {
  category: string
  value: string
}

const PerfumeCardBottomText = ({category, value}: proptype) => {
  return (
    <Container>
      <Text sx={{color:'#949494'}}>{category}</Text>
      <Text>{value}</Text>
    </Container>
  )
}

export default PerfumeCardBottomText

const Container = styled(Box)(() => ({
  width: '50%',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '27px',
  gap: '16px',
}))


const Text = styled(Typography)(({theme}) => ({
  fontSize: theme.typography.body3.fontSize,
  fontWeight: 500,
  color:'black',
}))