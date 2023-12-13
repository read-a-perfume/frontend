import {Avatar, Box, Typography, styled} from '@mui/material'
import { IfUserType } from 'types/user.interface'



interface proptype {
  mytype:IfUserType[]
}

const ProfileCardType = ({mytype}: proptype) => {
  return (
    <TypeContainer>
      <TitleContainer>
        <Typography
          variant="h2"
          sx={{fontFamily: 'Pretendard', whiteSpace: 'nowrap'}}
        >
          {'MY TYPE'}
        </Typography>
      </TitleContainer>
      <MytypeContainer>
        <TypeAvatar src={mytype[0].thumbnail} alt={mytype[0].name}/>
        <TypeText variant="body3">{mytype[0].name}</TypeText>
      </MytypeContainer>
    </TypeContainer>
  )
}

export default ProfileCardType

const TypeContainer = styled(Box)(() => ({
  display: 'flex',
}))

const TitleContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const MytypeContainer = styled(Box)(() => ({
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  display: 'flex',
}))

const TypeText = styled(Typography)(() => ({
  flexGrow: 0,
  fontFamily: 'Arita-buri',
  fontWeight: 500,
  textAlign: 'left',
  color: '#000',
  marginBottom: '9px',
}))

export const TypeAvatar = styled(Avatar)(() => ({
  width: '55.8px',
  height: '55.8px',
  marginTop: '15px',
  marginBottom: '15px',
}))
