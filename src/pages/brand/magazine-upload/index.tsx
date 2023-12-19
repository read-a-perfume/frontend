import {Box, Typography, styled} from '@mui/material'
import CoverUpload from './cover-upload'

const MagazineUpload = () => {
  return (
    <div>
      <CoverUpload />

      <InputContainer>
        <TopContainer>
          <TopTitle>글 제목</TopTitle>
          <TopInput placeholder="글 제목을 입력하세요" />
        </TopContainer>
        <TopContainer>
          <TopTitle>태그</TopTitle>
          <TopInput placeholder="태그를 활용하여 키워드를 추가하세요. 예시) #선물추천 #신제품소개" />
        </TopContainer>
      </InputContainer>
      <ThickDivder>버튼들</ThickDivder>
      
    </div>
  )
}

export default MagazineUpload

const ThickDivder = styled(Box)(() => ({
  height: '48px',
  backgroundColor: '#f1f1f5',
  paddingLeft: '360px',
}))

const InputContainer = styled(Box)(() => ({
  padding: '36px 360px 0 360px',
  width: '100%',
}))

const TopContainer = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  marginBottom: '16px',
}))

const TopInput = styled('input')(({theme}) => ({
  width: '100%',
  fontWeight: 500,
  fontSize: theme.typography.body1.fontSize,
  border: 'none',
  borderBottom: '1px solid #DBDBDB',
  paddingBottom: '10px',
}))

const TopTitle = styled(Typography)(({theme}) => ({
  fontWeight: 500,
  fontSize: theme.typography.body1.fontSize,
  whiteSpace: 'nowrap',
  width: '100px',
}))

