import {useState} from 'react'
import FlexBox from '../../layouts/flex-box'
import {SectionSubTitle, SectionTitle} from './index.style'
import styled from '@emotion/styled'
import {Typography} from '@mui/material'
import Category from '@components/category'
import instance from '@api/instance'
import {useQuery} from '@tanstack/react-query'

type PerfumesType = {
  content: {
    id: number
    name: string
    thumbnail?: string
    brandName: string
    strength: string
    duration: string
  }[]
  first: boolean
  hasNext: boolean
  last: boolean
  pageNumber: number
  size: number
  totalElements: number
  totalPages: number
}

const fetchGetPerfumesByCategories = async (id: number) => {
  try {
    const res = await instance.get(`/perfumes/category/${id}?page=0&size=10`)
    // const res = await instance.get(`/perfumes/category/${1}?page=0&size=10`)
    const data = res.data

    return data
  } catch (error: any) {
    console.log(error)
    throw error
  }
}

const Notes = () => {
  const [categoryId, setCategoryId] = useState<number>(1)
  const [clickedNote, setClickedNote] = useState<string>('fruit')
  const {isLoading, error, data} = useQuery<PerfumesType>({
    queryKey: ['perfumesByCategories'],
    queryFn: () => fetchGetPerfumesByCategories(categoryId - 1),
  })

  return (
    <Wrapper>
      <SectionTitle>노트별 향수 추천</SectionTitle>
      <SectionSubTitle>
        사랑받고 있는 노트별 향수를 추천해드려요!
      </SectionSubTitle>

      <Category
        currentCategory={clickedNote}
        setCurrentCategory={setClickedNote}
        setCategoryId={setCategoryId}
      />

      {!isLoading && !error && (
        <FlexBox gap="32px">
          <NoteBox>
            <img
              src="images/note_bg.png"
              alt="note"
              style={{
                background:
                  'linear-gradient(0deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.35) 100%), lightgray 50% / cover no-repeat',
                borderRadius: 16,
                position: 'absolute',
              }}
            />
            <NoteTitle>
              {clickedNote.toUpperCase()}
              <br />
              NOTE
            </NoteTitle>
            <NoteSubTitle>
              나무 향을 의미하며,
              <br />
              건조하고 성숙한 느낌을 전달합니다.
            </NoteSubTitle>
          </NoteBox>
          <ProductLayout>
            {data!.content.map((perfume, idx) => (
              <ProductBox key={idx}>
                <ThumbNail
                  src={
                    perfume.thumbnail
                      ? perfume.thumbnail
                      : 'images/perfume_test.png'
                  }
                  alt="product"
                />
                <ProductInfoBox>
                  <ProductName>{perfume.name}</ProductName>
                  <BrandName>{perfume.brandName}</BrandName>
                </ProductInfoBox>
              </ProductBox>
            ))}
          </ProductLayout>
        </FlexBox>
      )}
    </Wrapper>
  )
}

export default Notes

const Wrapper = styled.div`
  margin-top: 122px;
`

const NoteTitle = styled(Typography)({
  fontFamily: 'AritaBuri, sans-serif, Arial !important',
  color: 'white',
  fontSize: 32,
  fontWeight: '500',
  position: 'absolute',
  paddingLeft: 32,
  paddingTop: 53,
  marginBottom: 20,
})

const NoteSubTitle = styled(Typography)({
  fontSize: 18,
  color: 'white',
  position: 'absolute',
  paddingLeft: 32,
  paddingTop: 53,
  marginTop: 100,
})

const ProductLayout = styled.div({
  display: 'flex',
  flex: 1,
  height: 600,
  gap: 32,
  flexWrap: 'wrap',
  marginBottom: 136,
})

const ProductBox = styled.div({
  width: '31%',
  height: 284,
  borderRadius: 16,
  background: 'white',
  border: '1px solid #DBDBDB',
  overflow: 'hidden',
})

const ProductInfoBox = styled.div({
  paddingLeft: 24,
  marginTop: -6,
  height: 78,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  borderTop: '1px solid #EDEDED',
})

const NoteBox = styled.div({
  height: 600,
  width: 376,
  borderRadius: 16,
  overflow: 'hidden',
})

const ProductName = styled(Typography)({
  color: '#191919',
  fontSize: 18,
  fontWeight: '500',
})

const BrandName = styled(Typography)({
  color: '#A9A9A9',
  fontSize: 14,
})

const ThumbNail = styled.img({
  objectFit: 'contain',
  width: '100%',
  height: '75%',
})
