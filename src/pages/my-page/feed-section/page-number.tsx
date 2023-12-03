import {Button, Typography, styled} from '@mui/material'

interface proptype {
  number: number
  active: boolean
}

interface styleProptype {
  active: boolean
}

const PageNumber = ({number, active}: proptype) => {
  return (
    <NumberCotainer active={active}>
      <NumberText variant="body2">{number}</NumberText>
    </NumberCotainer>
  )
}

export default PageNumber

const NumberCotainer = styled(Button)<styleProptype>(({theme, active}) => ({
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
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  textAlign: 'right',
}))
