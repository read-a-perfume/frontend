import FlexBox from '@layouts/flex-box.js'
import styled from '@emotion/styled'
import {useState} from 'react'
import NewsFeed from './news-feed.js'

const data = ['All', '내가 작성한 피드', '좋아요', '??']

const feedData = new Array(8).fill(0).map((_, i) => i + 1)

const Feeds = () => {
  const [ordered, setOrdered] = useState<string>('All')
  // .slice(currentPage * 6, currentPage * 6 + 6)

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
        {feedData.map(el => (
          <NewsFeed key={el} />
        ))}
      </Wrapper>
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
  // display: 'flex',
  // justifyContent: 'space-between',
  // flexWrap: 'wrap',
  // rowGap: '88px',
  width: window.innerWidth,
  height: window.innerHeight,
  display: 'grid',
  rowGap: '88px',
  columnGap: '32px',
  gridTemplateColumns: 'auto auto auto',
  gridTemplateRows: '1fr 1fr',
  alignItems: 'center',
  justifyContent: 'space-between',
})
