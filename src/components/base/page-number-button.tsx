import {Button, Typography, styled} from '@mui/material'

interface proptype {
  number: number
  active: boolean
  onClick?: () => void
}

const PageNumberButton = ({number, active, onClick = () => {}}: proptype) => {
  return (
    <NumberCotainer active={active} onClick={onClick}>
      <NumberText variant="body2">{number}</NumberText>
    </NumberCotainer>
  )
}

export default PageNumberButton

const NumberCotainer = styled(Button)<{active: boolean}>(({theme, active}) => ({
  width: '40px',
  height: '43px',
  backgroundColor: active ? theme.palette.grey[400] : theme.palette.grey[200],
  minWidth: '40px',
  color: '#000',

  '&:hover': {
    backgroundColor: theme.palette.grey[300],
  },
}))

const NumberText = styled(Typography)(() => ({
  fontFamily: 'Pretendard',
  fontWeight: 500,
  textAlign: 'right',
}))
