import {
  // AddBannerSpan,
  // Banner,
  // BannerBlur,
  // BannerImage,
  BrandContents,
  // CardBox,
  Tab,
  Tabs,
} from './brand.style.js'
import {useRef, useState} from 'react'
import InfoBoxes from './info-boxes.js'
import BrandInfoDetail from './brand-info.js'
import FlexBox from '@layouts/flex-box.js'
import Magazine from './magazine.js'
import {useNavigate} from 'react-router-dom'
import {magazineData} from '../home/constants.js'
import MuiButton from '@components/base/mui-button.js'
import Banner from './banner.js'
import { Box, styled } from '@mui/material'

const Brand = () => {
  const navigate = useNavigate()
  const [enterprise, setEnterprise] = useState<boolean>(true)
  const [current, setCurrent] = useState<string>('magazine')
  const [fileURL, setFILEURL] = useState<string>('')
  const fileRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <Banner
        fileURL={fileURL}
        fileRef={fileRef}
        enterprise={enterprise}
        setFILEURL={setFILEURL}
      />
      <BrandInfoDetail enterprise={enterprise} />
      {/* 추후 삭제 */}
      <MuiButton
        title="기업 확인 버튼"
        width="100px"
        type="primary"
        handleClick={() => setEnterprise(!enterprise)}
      />
      {/* 추후 삭제 */}
      <BrandContents>
        <Tabs>
          <FlexBox>
            <Tab
              current={current === 'magazine'}
              onClick={() => setCurrent('magazine')}
            >
              브랜드 매거진&ensp;8
            </Tab>
            <Tab
              current={current === 'perfume'}
              onClick={() => setCurrent('perfume')}
            >
              향수&ensp;21
            </Tab>
          </FlexBox>
          {enterprise && (
            <FlexBox alignItems="center" gap="14px">
              <MuiButton
                title="매거진 글쓰기"
                type="dark"
                handleClick={() => navigate(`/brand/upload`)}
                width="137px"
                height="34px"
              />
              <MuiButton
                title="제품 추가하기"
                type="primary"
                width="101px"
                height="34px"
              />
            </FlexBox>
          )}
        </Tabs>
      </BrandContents>
      {current === 'magazine' ? (
        <CardBox>
          {magazineData.map((_, i) => (
            <Magazine
              key={i}
              data={{
                title: `심플한 디자인이 돋보이는 전설적인 향수 N°5 빠르펭`,
                content: `심플한 디자인이 돋보이는 전설적인 향수 N°5 빠르펭. 시간을 초월하여 사랑받는 아이콘으로 여성의 진정한 아름다움을 표현합니다. 알데하이드 플로랄 부케는 "여성의 향기를 담은 여성미의 진수"를 만들어 달라고 부탁한 가브리엘...`,
                thumbnail: '',
                coverThumbnail: '',
                tags: ['플로랄','여름신작','슬로우섬머'],
              }}
            />
          ))}
        </CardBox>
      ) : (
        <InfoBoxes enterprise={enterprise} />
      )}
    </>
  )
}

export default Brand

const CardBox = styled(Box)(()=>({
  display: 'flex',
  flexWrap: 'wrap',
  padding: '33px 160px 178px 160px',
  gap: '44.5px 24px',
  
}))
