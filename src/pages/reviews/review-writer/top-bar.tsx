import NextIcon from '@assets/icons/next-icon'
import PrevIcon from '@assets/icons/prev-icon'
import styled from '@emotion/styled'
import useReviewWriterArrow from '@hooks/global-store/client/atoms/use-review-writer-arrow'

const Topbar = () => {
  const {handleNextPage, handlePrevPage} = useReviewWriterArrow()

  return (
    <Header>
      <>
        <Title>리뷰작성</Title>
        <div>
          <Prev onClick={handlePrevPage}>
            <PrevIcon />
          </Prev>
          <Next onClick={handleNextPage}>
            <NextIcon />
          </Next>
        </div>
      </>
    </Header>
  )
}

export default Topbar
const Header = styled.header({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  alignContent: 'center',
})

const Title = styled.h3({
  fontSize: '24px',
  paddingBottom: 10,
  fontFamily: 'AritaBuri !important',
  fontWeight: 600,
})

const Prev = styled.span({
  position: 'absolute',
  right: 20,
  top: '50%',
  transform: 'translateY(-50%)',
})

const Next = styled.span({
  position: 'absolute',
  right: 0,
  top: '50%',
  transform: 'translateY(-50%)',
})
