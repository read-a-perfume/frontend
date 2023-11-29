import {Avatar, Box, Typography, styled} from '@mui/material'

interface proptype {
  mytype: string
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
        <TypeAvatar>F</TypeAvatar>
        <TypeText variant="body3">{mytype}</TypeText>
      </MytypeContainer>
    </TypeContainer>
  )
}

export default ProfileCardType

const TypeContainer = styled('div')`
  display: flex;
`

const TitleContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
`

const MytypeContainer = styled(Box)`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
`

const TypeText = styled(Typography)`
  flex-grow: 0;
  font-family: Arita-buri;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
  margin-bottom: 9px;
`
const TypeAvatar = styled(Avatar)`
  width: 55.8px;
  height: 55.8px;
  margin-top: 15px;
  margin-bottom: 15px;
`
