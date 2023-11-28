import {Divider} from '@mui/material'
import CardContainer from '../base/card-container'
import MyCardContent from '../base/card-content'
import CardTitle from '../base/card-title'
import MyPageButton from '../base/mypage-button'

const FavoriteCard = () => {
  return (
    <CardContainer>
      <CardTitle>즐겨찾기 한 제품</CardTitle>
      <Divider />
      <MyCardContent>임시</MyCardContent>
      <Divider />
      <MyPageButton text="더보기" onClick={() => {}} />
    </CardContainer>
  )
}

export default FavoriteCard
