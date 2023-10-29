import FlexBox from '../../layouts/flex-box.js'
import {
  BrandInfo,
  BrandInfoBlock,
  BrandSubTitle,
  BrandTitle,
  BrandURL,
  Follows,
} from './brand.style.js'
import {useNavigate} from 'react-router-dom'
import Button from '@components/base/button.js'
import Avatar from '@components/base/avatar.js'

const BrandInfoDetail = ({enterprise}: {enterprise: boolean}) => {
  const navigation = useNavigate()
  const url = ''

  return (
    <BrandInfoBlock>
      <Avatar
        url={url}
        size="104px"
        style={{
          zIndex: 1,
          marginTop: '-17px',
        }}
      />
      <BrandInfo>
        <FlexBox alignItems="center">
          <BrandTitle>TAMBURINS</BrandTitle>
          <Follows color="red">2480</Follows>
          <Follows>팔로워</Follows>
        </FlexBox>
        <BrandSubTitle>
          제품보다 새로운 경험, 공간 등의 콘텐츠를 통해서 새로운 감성을 전달하는
          탬버린즈
        </BrandSubTitle>
        <BrandURL to="https://www.tamburins.com">
          https://www.tamburins.com
        </BrandURL>
        {enterprise && (
          <Button
            text="설정 및 관리"
            width="92px"
            height="33px"
            backgroundColor="white"
            fontSize="md"
            color="191919"
            style={{fontWeight: '600', border: '1px solid #DBDBDB'}}
            onClick={() => navigation('/brand/:id/settings')}
          />
        )}
      </BrandInfo>
    </BrandInfoBlock>
  )
}

export default BrandInfoDetail
