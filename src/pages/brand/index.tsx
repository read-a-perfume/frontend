import {
  AddBannerSpan,
  AddImageButton,
  AddProductButton,
  Banner,
  BannerBlur,
  BannerImage,
  BrandContents,
  CardBox,
  Tab,
  Tabs,
  WriteMagazine,
} from './brand.style'
import {useRef, useState} from 'react'
import InfoBoxes from './info-boxes'
import BrandInfoDetail from './brand-info'
import {Button} from '@mui/material'
import FlexBox from '@layouts/flex-box'
import {Link} from 'react-router-dom'
import Magazine from './magazine'
import {magazineData} from '../home/constants'

const Brand = () => {
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
            <AddImageButton
              imageurl={fileURL}
              onClick={() => {
                if (fileRef.current) {
                  fileRef.current.click()
                }
              }}
              style={{zIndex: 2}}
            >
              컴퓨터에서 가져오기
            </AddImageButton>
          </>
        )}
        {fileURL && (
          <BannerImage src={fileURL} alt="banner" style={{zIndex: 1}} />
        )}
        <BannerBlur />
      </Banner>
      <BrandInfoDetail enterprise={enterprise} />
      <Button
        style={{background: 'red'}}
        onClick={() => setEnterprise(!enterprise)}
      >
        기업 확인 버튼
      </Button>
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
              <Link to={`/brand/:id/magazine/post`}>
                <WriteMagazine>매거진 글쓰기</WriteMagazine>
              </Link>
              <AddProductButton>제품 추가하기</AddProductButton>
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
