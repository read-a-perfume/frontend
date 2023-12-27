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
    if (clickedNote === '애니멀') {
      setImage('animal')
    } else if (clickedNote === '시트러스') {
      setImage('citrus')
    } else if (clickedNote === '그린') {
      setImage('green')
    } else if (clickedNote === '머스크') {
      setImage('musk')
    } else if (clickedNote === '스파이시') {
      setImage('spicy')
    } else if (clickedNote === '스위트') {
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
  whiteSpace: 'pre-wrap',
  width: 255,
})

const NoteBox = styled.div({
  height: 450,
  width: 282,
  borderRadius: 16,
})

const Image = styled.img({
  background:
    'linear-gradient(0deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.35) 100%), lightgray 50% / cover no-repeat',
  borderRadius: 16,
  position: 'absolute',
  width: 282,
  height: 450,
})
