import {useState} from 'react'
import FlexBox from '../../layouts/flex-box'
import {SectionSubTitle, SectionTitle} from './index.style'
import styled from '@emotion/styled'
import {Typography} from '@mui/material'
import Category from '@components/category'
import NoteProducts from './note-products'

const Notes = () => {
  const [categoryId, setCategoryId] = useState<number>(1)
  const [clickedNote, setClickedNote] = useState<string>('fruit')

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
})

const NoteBox = styled.div({
  height: 600,
  width: 376,
  borderRadius: 16,
  overflow: 'hidden',
})
