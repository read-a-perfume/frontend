import {Box, Button, Typography, styled} from '@mui/material'
import {ReactNode} from 'react'

interface proptype {
  icon?: ReactNode
  text: string
  onClick: () => void
}

const MyPageButton = ({icon, text, onClick}: proptype) => {
  return (
    <ButtonContainer>
      <MyButton variant="outlined" onClick={onClick}>
        {icon !== undefined ? icon : ''}
        <ButtonText variant="body2">{text}</ButtonText>
      </MyButton>
    </ButtonContainer>
  )
}

export default MyPageButton

const ButtonContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  maxHeight: '84px',
}))

const MyButton = styled(Button)(({theme}) => ({
  color: theme.palette.grey[800],
  borderColor: theme.palette.grey[300],
  width: '80%',
  height: '55%',
  borderRadius: '10px',

  '&:hover': {
    borderColor: theme.palette.grey[300],
    backgroundColor: theme.palette.grey[200],
  },
}))

const ButtonText = styled(Typography)(() => ({
  fontFamily: 'Pretendard',
  fontWeight: 500,
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: '0.32px',
  textAlign: 'left',
}))
