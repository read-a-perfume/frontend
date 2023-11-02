import FlexBox from '@layouts/flex-box.js'
import styled from '@emotion/styled'
import {useEffect, useState} from 'react'
import NewsFeed from './news-feed.js'
import BottomNavigation from './bottom-navigation.js'

const data = ['All', '내가 작성한 피드', '좋아요', '??']

const feedData = new Array(80).fill(0).map((_, i) => i + 1)

const Feeds = () => {
  const [ordered, setOrdered] = useState<string>('All')
  const [page, setPage] = useState<number>(1)
  const [lastPage, setLastPage] = useState<number>(1)

  useEffect(() => {
    setLastPage(
      !(feedData.length / 6)
        ? feedData.length / 6
        : Math.ceil(feedData.length / 6),
    )
  }, [])

  return (
    <>
      <div style={{marginBottom: 48}}>
        <FlexBox style={{gap: 12}}>
          {data.map(item => (
            <OrderButton
              key={item}
              clicked={ordered === item}
              onClick={() => setOrdered(item)}
            >
              {item}
            </OrderButton>
          ))}
        </FlexBox>
      </div>
      <Wrapper>
        {feedData.slice((page - 1) * 6, (page - 1) * 6 + 6).map(el => (
          <NewsFeed key={el} />
        ))}
      </Wrapper>
      <BottomNavigation page={page} setPage={setPage} lastPage={lastPage} />
    </>
  )
}

export default Feeds

const OrderButton = styled.button(({clicked}: {clicked: boolean}) => ({
  height: 42,
  borderRadius: 21,
  fontSize: 16,
  fontWeight: '600',
  color: clicked ? 'white' : '#A9A9A9',
  background: clicked ? '#FE7156' : '#F1F1F5',
  padding: '8px 12px',
}))

const Wrapper = styled.div({
  width: window.innerWidth,
  height: 420 * 2 + 88 + 'px',
  display: 'grid',
  rowGap: '88px',
  columnGap: '32px',
  gridTemplateColumns: '512px 512px 512px',
  gridTemplateRows: '420px 420px',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 130,
})
