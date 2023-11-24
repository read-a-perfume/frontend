import styled from '@emotion/styled'

import Form from './form'

// import WriterFirst from './writer-first'

const ReviewWriter = () => {
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
      {/* <WriterFirst /> */}
      <Form />
    </Wrapper>
  )
}

export default ReviewWriter

const Wrapper = styled.div({
  maxWidth: '1024px',
  padding: '0 32px',
  margin: 'auto',
  section: {
    marginBottom: '32px',
  },
})
