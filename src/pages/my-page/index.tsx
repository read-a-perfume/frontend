import {Box, Typography, styled, useTheme} from '@mui/material'
import ProfileSection from './profile-section/profile-section'
// import FeedSection from './feed-section/feed-section'
import Banner from '@components/base/banner'
import {useParams} from 'react-router-dom'

const MyPage = () => {
  const theme = useTheme()

  const {userId} = useParams()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: theme.palette.grey[100],
      }}
    >
      <Banner />
      {userId !== undefined && (
        <ContentSection>
          <Title>내 프로필</Title>
          <ProfileSection userId={userId} />
          <Title sx={{marginTop: '88px'}}>내 리뷰</Title>
          {/* <FeedSection /> */}
        </ContentSection>
      )}
    </Box>
  )
}

export default MyPage

const ContentSection = styled(Box)(() => ({
  flexGrow: 0,
  width: '1200px',
  padding: '71px 0 184px 0',
}))

const Title = styled(Typography)(() => ({
  marginBottom: '64px',
  fontFamily: 'Arita-buri(OTF)',
  fontSize: '32px',
  fontWeight: 600,
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: '0.64px',
  textAlign: 'left',
  color: '#0f0f0f',
}))



/*
index.tsx
// fallback의 width와 height를 100%로 주면 돼서 편리함
// Area: 리스트 데이터가 들어갈 영역크기/패딩/마진을 설정함
return (<Area>
          <Suspense fallback = {<Loading/>}
            <FetchingDataList/>
          </Suspense>
        </Area>)
------------------------
fetching-data-list.tsx
// DataList는 우리가 사용할 공통 컴포넌트 역시나 width height를 부모에게서 참조 가능하다.
//  Data의 속성마다 분기하기 ex 0개면 글자를 띄운다. 기획이 요구한 개수 이하거나 이상이라면 무언갈 띄운다 등등
//  Data를 map해서 뿌려주기
//  각 카드의 레이아웃(grid flex gap등) 정해주기

const {data} = useQuery(foo bar)

return <>{data? && <DataList data={data}/>}</>


*/
