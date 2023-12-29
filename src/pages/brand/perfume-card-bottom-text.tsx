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
  justifyContent: 'center',
  gap: '11px',
}))


const Text = styled(Typography)(({theme}) => ({
  fontSize: theme.typography.body5.fontSize,
  fontWeight: 500,
  color:'black',
}))