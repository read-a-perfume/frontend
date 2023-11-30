import {Divider} from '@mui/material'
import CardContainer from '../base/card-container'
import MyPageButton from '../base/mypage-button'
import {CreateOutlined} from '@mui/icons-material'
import MyCardContent from '../base/card-content'
import EachReviewCount from './each-review-count'
import CardTitle from '../base/card-title'
import { useNavigate } from 'react-router-dom'

interface proptype {
  onWrite: number
  completeWrite: number
}

const ReviewCard = ({onWrite, completeWrite}: proptype) => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/reviews/review-writer');
  }

  return (
    <CardContainer>
      <CardTitle>내 리뷰</CardTitle>
      <Divider />
      <MyCardContent sx={{justifyContent: 'space-evenly'}}>
        <EachReviewCount title="작성중인 후기" number={onWrite} />
        <EachReviewCount title="작성한 후기" number={completeWrite} />
      </MyCardContent>
      <Divider />
      <MyPageButton
        text="리뷰 작성하기"
        onClick={handleButtonClick}
        icon={
          <CreateOutlined
            sx={{
              marginRight: '10px',
            }}
          />
        }
      />
    </CardContainer>
  )
}

export default ReviewCard

