import BoxLayout from './box-layout.js'
import styled from '@emotion/styled'
import FlexBox from '@layouts/flex-box.js'
import BoxBottomButtton from './box-bottom-button.js'
import {Typography} from '@mui/material'
import HeartIcon from '@assets/icons/heart-Icon.js'

const ProfileBox = () => {
  return (
    <ProfileBoxLayout>
      <TopBox>
        <ProfileSection>
          <FlexBox alignItems="center">
            <Profile
              size="90px"
              src="/src/pages/perfumes/images/Rectangle7217(1).png"
            />
          </FlexBox>
          <FlexBox direction="column" gap="10px">
            <Name>
              츠키
              <Suffix>님</Suffix>
            </Name>
            <IntroductionText>
              안녕하세요 딥티크를 좋아하는 츠키입니다.
              <br />
              만나서 반가워요^^
            </IntroductionText>
            <FlexBox alignItems="center">
              <Typography
                style={{fontSize: 16, fontWeight: '500', marginRight: 12}}
              >
                팔로워
              </Typography>
              <HeartIcon size="18" />
              <Typography
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  color: '#707070',
                  marginRight: 55,
                  marginLeft: 6,
                }}
              >
                2480
              </Typography>
            </FlexBox>
          </FlexBox>
        </ProfileSection>
        <TypeSection>
          <TypeText>MY TYPE</TypeText>
          <FlexBox style={{width: '90%'}} justifyContent="space-around">
            {['fruity', 'woody', 'citrus', 'spicy'].map((item, idx) => (
              <FlexBox
                direction="column"
                gap="12px"
                alignItems="center"
                key={idx}
              >
                <Profile
                  size="58px"
                  src="/src/pages/perfumes/images/fruity.png"
                />
                <TypeTitle>{item.toUpperCase()}</TypeTitle>
              </FlexBox>
            ))}
          </FlexBox>
        </TypeSection>
      </TopBox>
      <BottomBox>
        <BoxBottomButtton
          text="내 프로필 편집"
          onClick={() => console.log('go to my profile')}
        />
      </BottomBox>
    </ProfileBoxLayout>
  )
}

export default ProfileBox

const ProfileBoxLayout = styled(BoxLayout)({
  height: '380px',
  padding: '0px 24px',
  paddingTop: 14,
})

const TopBox = styled.div({
  height: '296px',
  margin: '0px 24px',
  borderBottom: '1px solid #E7E7E7',
})

const ProfileSection = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '24px',
  height: '185px',
  borderBottom: '1px solid #E7E7E7',
})

const BottomBox = styled.div({
  height: '84px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alingItems: 'center',
})

const Name = styled(Typography)({
  fontSize: 28,
  fontWeight: '600',
})

const Suffix = styled.span({
  fontSize: 23,
  fontWeight: '500',
})

const IntroductionText = styled(Typography)({
  fontSize: 18,
  fontWeight: '500',
})

const Profile = styled.img(({size}: {size: string}) => ({
  width: size,
  height: size,
  borderRadius: size,
}))

const TypeSection = styled.div({
  display: 'flex',
  height: '111px',
  alignItems: 'center',
})

const TypeText = styled(Typography)({
  marginLeft: 11,
  fontSize: 18,
  fontWeight: '500',
  marginRight: 20,
  width: '90px',
})

const TypeTitle = styled(Typography)({
  fontFamily: 'AritaBuri !important',
  fontSize: 14,
  fontWeight: '500',
})
