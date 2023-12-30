import {Box, Typography, styled} from '@mui/material'

interface proptype {
  setIsProfileSection: React.Dispatch<React.SetStateAction<boolean>>
  isProfileSection: boolean
}

const Left = ({setIsProfileSection, isProfileSection}: proptype) => {
  return (
    <Container>
      <Title>설정 및 관리</Title>
      <Text
        flag={isProfileSection}
        onClick={() => {
          setIsProfileSection(true)
        }}
      >
        프로필 편집
      </Text>
      <Text
        flag={!isProfileSection}
        onClick={() => {
          setIsProfileSection(false)
        }}
      >
        계정 정보
      </Text>
    </Container>
  )
}

export default Left

const Container = styled(Box)(() => ({
  paddingTop: '89px',
}))

const Title = styled(Typography)(({theme}) => ({
  fontWeight: 'bold',
  fontSize: theme.typography.h1.fontSize,
  marginBottom: '40px'
}))

const Text = styled(Typography)<{flag: boolean}>(({theme, flag}) => ({
  paddingLeft: '10px',
  borderLeft: `${flag ? `2px solid ${theme.palette.primary.main}` : ''}`,
  color: `${flag ? theme.palette.primary.main : '#000'}`,
  fontSize: theme.typography.body1.fontSize,
  cursor: `${flag ? '' : 'pointer'}`,
  fontWeight: `${flag? 600 : 400}`,
  marginBottom:'15px',
}))
