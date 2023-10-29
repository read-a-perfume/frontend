import FlexBox from '@layouts/flex-box.js'
import {FormControl} from '@mui/material'
import {
  AlertSpan,
  CategoryTitle,
  FormBlock,
  Input,
  Label,
  Profile,
  Styledswitch,
} from './brand.style.js'
import React from 'react'
import Button from '@components/base/button.js'

const Form = ({
  secondBlock,
  thirdBlock,
}: {
  secondBlock: React.RefObject<HTMLDivElement>
  thirdBlock: React.RefObject<HTMLDivElement>
}) => {
  // const [image, setImage] = useState<string>('')
  const image = ''

  return (
    <FormBlock>
      <FlexBox alignItems="center" gap="27px">
        <Profile>{image && <img src={image} alt="profile" />}</Profile>
        <Button
          text="프로필 변경"
          width="88px"
          height="33px"
          backgroundColor="white"
          color="#191919"
          fontSize="sm"
          style={{fontWeight: '600'}}
        />
      </FlexBox>
      <CategoryTitle marginTop="48px">브랜드 기본 정보</CategoryTitle>
      <FlexBox gap="31px" style={{marginBottom: '32px'}}>
        <FormControl>
          <Label>브랜드명</Label>
          <Input name="name" />
        </FormControl>
        <FormControl>
          <Label>웹 사이트 URL</Label>
          <Input name="url" />
        </FormControl>
      </FlexBox>
      <FormControl style={{marginBottom: '32px'}}>
        <Label>브랜드 소개</Label>
        <Input full name="url" />
      </FormControl>
      <FlexBox gap="31px">
        <FormControl>
          <Label>기업명</Label>
          <Input name="businessName" />
        </FormControl>
        <FormControl>
          <Label>사용자등록번호</Label>
          <Input name="businessNumber" />
        </FormControl>
      </FlexBox>
      <div ref={secondBlock}>
        <CategoryTitle marginTop="78px">관리자 계정 관리</CategoryTitle>
        <FlexBox gap="31px" style={{marginBottom: '32px'}}>
          <FormControl>
            <Label>아이디</Label>
            <Input name="id" />
          </FormControl>
          <FormControl>
            <Label>비밀번호</Label>
            <Input name="password" />
          </FormControl>
        </FlexBox>
        <FlexBox gap="31px">
          <FormControl>
            <Label>기업용 이메일</Label>
            <Input name="businessEmail" />
          </FormControl>
          <FormControl>
            <Label>휴대전화</Label>
            <Input name="phone" />
          </FormControl>
        </FlexBox>
      </div>
      <div ref={thirdBlock}>
        <CategoryTitle marginTop="88px">알림 설정</CategoryTitle>
        <FlexBox alignItems="center">
          <AlertSpan>리뷰 알림</AlertSpan>
          <Styledswitch defaultChecked />
        </FlexBox>
        <FlexBox alignItems="center">
          <AlertSpan>댓글 알림</AlertSpan>
          <Styledswitch defaultChecked />
        </FlexBox>
      </div>
    </FormBlock>
  )
}

export default Form
