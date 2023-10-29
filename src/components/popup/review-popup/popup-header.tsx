import NextIcon from '@assets/icons/next-icon'
import PrevIcon from '@assets/icons/prev-icon'
import styled from '@emotion/styled'

const PopupHeader = ({handleNextPage, handlePrevPage}: any) => {
  const Header = styled.header({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: '20px',
    padding: '20px 0',
    borderBottom: '1px solid #EDEDED;',
  })

  const Prev = styled.span({
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
  })

  const Next = styled.span({
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
  })

  return (
    <Header>
      <>
        <Prev onClick={handlePrevPage}>
          <PrevIcon />
        </Prev>
        <h3>리뷰작성</h3>
        <Next onClick={handleNextPage}>
          <NextIcon />
        </Next>
      </>
    </Header>
  )
}

export default PopupHeader
