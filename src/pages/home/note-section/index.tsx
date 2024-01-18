import {useState} from 'react'
import FlexBox from '@layouts/flex-box'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import styled from '@mui/material/styles/styled'
import Category from '@components/perfume/category'
import NoteProducts from './note-products'
import useFetchNoteCateogry from '@hooks/use-fetch-note-cateogry'

const NoteSection = () => {
  const [categoryId, setCategoryId] = useState<number>(1)
  const [clickedNote, setClickedNote] = useState<string>('Fruity')
  const [description, setDescription] = useState<string>(
    '달콤한 과일의 향이 지속되어 생동감과 매력적인 느낌을 줍니다.',
  )
  const {
    data: categories,
    isLoading: categoryLoading,
    error: categoryError,
  } = useFetchNoteCateogry()

  return (
    <Wrapper>
      <SectionTitle>노트별 향수 추천</SectionTitle>
      <SectionSubTitle>
        사랑받고 있는 노트별 향수를 추천해드려요!
      </SectionSubTitle>

      <Category
        loading={categoryLoading}
        error={categoryError}
        categories={categories}
        currentCategory={clickedNote}
        setCurrentCategory={setClickedNote}
        setCategoryId={setCategoryId}
        setDescription={setDescription}
        margin={'55px 0px'}
      />

      <FlexBox gap="32px">
        <NoteBox>
          <Image
            src={categories && categories[categoryId - 1]?.thumbnail}
            alt="note"
          />
          <NoteTitle>
            {clickedNote.toUpperCase()}
            <br />
            NOTE
          </NoteTitle>
          <NoteSubTitle fontFamily="Arita buri">{description}</NoteSubTitle>
        </NoteBox>
        <NoteProducts categoryId={categoryId} />
      </FlexBox>
    </Wrapper>
  )
}

export default NoteSection

const Wrapper = styled(Box)({
  width: '1200px',
  marginTop: '122px',
  marginBottom: '102px',
})

const NoteTitle = styled(Typography)({
  color: 'white',
  fontSize: '32px',
  fontWeight: '500',
  position: 'absolute',
  paddingLeft: '32px',
  paddingTop: '53px',
  marginBottom: '20px',
})

const NoteSubTitle = styled(Typography)({
  fontSize: '18px',
  color: 'white',
  position: 'absolute',
  paddingLeft: '32px',
  paddingTop: '53px',
  marginTop: '100px',
  whiteSpace: 'pre-wrap',
  width: '255px',
})

const NoteBox = styled('div')({
  height: '450px',
  width: '282px',
  borderRadius: 16,
})

const Image = styled('img')({
  background:
    'linear-gradient(0deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.35) 100%), lightgray 50% / cover no-repeat',
  borderRadius: 16,
  position: 'absolute',
  width: '282px',
  height: '450px',
})
const SectionTitle = styled(Typography)({
  fontFamily: 'AritaBuri, sans-serif, Arial !important',
  fontSize: 18,
  fontWeight: '600',
  color: '#191919',
})

const SectionSubTitle = styled(Typography)({
  fontSize: 12,
  fontWeight: '500',
  color: '#A9A9A9',
  marginTop: 5,
  marginBottom: 40,
})
