import {Box, Typography, styled} from '@mui/material'
import {IfPerfumeCardTextProps} from '../type'

const PerfumeCardText = ({category, value}: IfPerfumeCardTextProps) => {
  return (
    <Container>
      <Text sx={{color: '#949494'}}>{category}</Text>
      <Text>{value}</Text>
    </Container>
  )
}

export default PerfumeCardText

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
  color: 'black',
}))
