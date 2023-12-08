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
import Avatar from '@components/base/avatar.js'
import MuiButton from '@components/base/mui-button.js'

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
          <MuiButton
            title="설정 및 관리"
            type="white"
            handleClick={() => navigation('/brand/:id/settings')}
            width="92px"
            height="34px"
          />
        )}
      </BrandInfo>
    </BrandInfoBlock>
  )
}

export default BrandInfoDetail
