import {useEffect, useState} from 'react'
import FlexBox from '../../layouts/flex-box'
import {SectionSubTitle, SectionTitle} from './index.style'
import styled from '@emotion/styled'
import {Typography} from '@mui/material'
import Category from '@components/category'
import NoteProducts from './note-products'

const Notes = ({categoryLoading, categoryError, categories}: any) => {
  const [categoryId, setCategoryId] = useState<number>(1)
  const [clickedNote, setClickedNote] = useState<string>('Fruity')
  const [image, setImage] = useState<string>('default')
  const [description, setDescription] = useState<string>(
    '달콤한 과일의 향이 지속되어 생동감과 매력적인 느낌을 줍니다.',
  )

  useEffect(() => {
    if (clickedNote === 'Animal') {
      setImage('animal')
    } else if (clickedNote === 'Citrus') {
      setImage('citrus')
    } else if (clickedNote === 'Green') {
      setImage('green')
    } else if (clickedNote === 'Musk') {
      setImage('musk')
    } else if (clickedNote === 'Spicy') {
      setImage('spicy')
    } else if (clickedNote === 'Sweet') {
      setImage('sweet')
    } else {
      setImage('default')
    }
  }, [clickedNote])

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
          <Image src={`images/note-images/note-${image}.png`} alt="note" />
          <NoteTitle>
            {clickedNote.toUpperCase()}
            <br />
            NOTE
          </NoteTitle>
          <NoteSubTitle>{description}</NoteSubTitle>
        </NoteBox>
        <NoteProducts categoryId={categoryId} />
      </FlexBox>
    </Wrapper>
  )
}

export default Notes

const Wrapper = styled.div`
  width: 1200px;
  margin-top: 122px;
  margin-bottom: 102px;
`

const NoteTitle = styled(Typography)({
  fontFamily: 'AritaBuri, sans-serif, Arial !important',
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

const NoteBox = styled.div({
  height: '450px',
  width: '282px',
  borderRadius: 16,
})

const Image = styled.img({
  background:
    'linear-gradient(0deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.35) 100%), lightgray 50% / cover no-repeat',
  borderRadius: 16,
  position: 'absolute',
  width: '282px',
  height: '450px',
})
