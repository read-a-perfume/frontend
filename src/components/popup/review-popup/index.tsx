import styled from '@emotion/styled'
import PopupHeader from './popup-header'
import PopupBody from './popup-body'
import {useState} from 'react'

const ReviewPopup = () => {
  const [pageMove, setPageMove] = useState(0)
  //페이지 버튼을 클릭하는 함수를 만든다
  const handlePrevPage = () => {
    setPageMove(prevIndex => (prevIndex > 0 ? prevIndex - 1 : 1))
  }

  const handleNextPage = () => {
    setPageMove(prevIndex => (prevIndex < 1 ? prevIndex + 1 : 0))
  }

  //리뷰 폼 만들기
  // 첫페이지에 카메라를 보여준다.
  //

  //else 그외에는 리뷰 마지막 페이지를 보여준다.

  //리뷰 입력폼은 두 개로 나뉜다 첫페이지 마지막 페이지

  //다음으로 입력을 누르면 마지막 페이지로 넘어간다.

  //if 업로드 버튼을 누를 시 모든 페이지가 입력이 되어 있따면 업로드 on

  //else if 폼 입력이 전부 안되어 있으면 경고창 보내기.

  return (
    <Wrapper>
      <PopupHeader
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
      <PopupBody pageMove={pageMove} />
    </Wrapper>
  )
}

export default ReviewPopup

const Wrapper = styled.div({
  width: '1024px',
  height: '788px',
  border: '1px solid black',
  padding: '0 32px',

  section: {
    marginBottom: '32px',
  },
})
