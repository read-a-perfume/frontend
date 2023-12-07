import {
  AddBannerSpan,
  Banner,
  BannerBlur,
  BannerImage,
  BrandContents,
  CardBox,
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

const Brand = () => {
  const navigate = useNavigate()
  const [enterprise, setEnterprise] = useState<boolean>(true)
  const [current, setCurrent] = useState<string>('magazine')
  const [fileURL, setFILEURL] = useState<string>('')
  const fileRef = useRef<HTMLInputElement>(null)

  const changeImageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()

    if (event.target.files) {
      const newFileURL = URL.createObjectURL(event.target.files[0])
      setFILEURL(newFileURL)
    }
  }

  return (
    <>
      <Banner>
        {enterprise && (
          <>
            <input
              type="file"
              accept="image/jpg,image/png,image/jpeg"
              hidden
              ref={fileRef}
              onChange={changeImageHandler}
            />
            <AddBannerSpan imageurl={fileURL} style={{zIndex: 2}}>
              {fileURL ? '배너 이미지 변경' : '배너 이미지 추가'}
            </AddBannerSpan>
            <MuiButton
              title="컴퓨터에서 가져오기"
              type="white"
              width="137px"
              handleClick={() => {
                if (fileRef.current) {
                  fileRef.current.click()
                }
              }}
            />
          </>
        )}
        {fileURL && (
          <BannerImage src={fileURL} alt="banner" style={{zIndex: 1}} />
        )}
        <BannerBlur />
      </Banner>
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
                handleClick={() => navigate(`/brand/:id/magazine/post`)}
                width='137px'
                height='34px'
              />
              <MuiButton title="제품 추가하기" type="primary" width='101px' height='34px'/>
            </FlexBox>
          )}
        </Tabs>
      </BrandContents>
      {current === 'magazine' ? (
        <CardBox>
          {magazineData.map(data => (
            <Magazine key={data.id} enterprise={enterprise} data={data} />
          ))}
        </CardBox>
      ) : (
        <InfoBoxes enterprise={enterprise} />
      )}
    </>
  )
}

export default Brand
