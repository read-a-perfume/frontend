import {useState} from 'react'
import styled from '@emotion/styled'
import FlexBox from '@layouts/flex-box'
import {Box, Tab, Tabs, Typography} from '@mui/material'

interface NotesProps {
  topNotes: string[]
  middleNotes: string[]
  baseNotes: string[]
}

type CategoryType = '탑노트' | '미들노트' | '베이스노트'

const CATEGORIES: CategoryType[] = ['탑노트', '미들노트', '베이스노트']

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const Notes = ({topNotes, middleNotes, baseNotes}: NotesProps) => {
  const [activeTab, setActiveTab] = useState<string>('탑노트')
  const [value, setValue] = useState<number>(0)
  // const [notesData, setNotesData] = useState<string[]>([])

  console.log(activeTab, topNotes, middleNotes, baseNotes)
  const handleTabsChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
    setActiveTab(CATEGORIES[value])
  }

  return (
    <>
      <NotesHeader>
        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
          <FlexBox gap="21px">
            <StyledTabs
              value={value}
              onChange={handleTabsChange}
              aria-label="basic tabs example"
            >
              {CATEGORIES?.map((category, index) => (
                <StyledTab label={category} {...a11yProps(index)} key={index} />
              ))}
            </StyledTabs>
          </FlexBox>
        </Box>
      </NotesHeader>

      <Wrapper>
        <FlexBox
          direction=""
          justifyContent="center"
          alignItems="center"
          gap="53px"
          style={{position: 'relative'}}
        >
          <Box sx={{textAlign: 'center'}}>
            <img src="/images/perfume-detail/자몽.png" alt="note-img" />
            <NotesName>자몽</NotesName>
          </Box>
          <Box sx={{textAlign: 'center'}}>
            <img src="/images/perfume-detail/퀸스.png" alt="note-img" />
            <NotesName>퀸스</NotesName>
          </Box>
          <Box sx={{textAlign: 'center'}}>
            <img src="/images/perfume-detail/자몽.png" alt="note-img" />
            <NotesName>자몽</NotesName>
          </Box>
          <Box sx={{textAlign: 'center'}}>
            <img src="/images/perfume-detail/자몽.png" alt="note-img" />
            <NotesName>자몽</NotesName>
          </Box>
        </FlexBox>
      </Wrapper>
    </>
  )
}

const NotesHeader = styled.div({
  fontSize: '12px',
})

const StyledTabs = styled(Tabs)({
  '& .css-1i6dhku-MuiTabs-indicator': {
    backgroundColor: '#191919',
  },
})

const StyledTab = styled(Tab)({
  color: '#191919',
  fontWeight: '500',

  '&.Mui-selected': {
    color: '#191919',
    fontWeight: '600',
  },
})

const Wrapper = styled.div({
  marginTop: '21.38px',
  marginBottom: '31.9px',

  '& img': {
    borderRadius: '50%',
  },
})

const NotesName = styled(Typography)({
  fontFamily: 'AritaBuri !important',
  fontWeight: '500',
  fontSize: '10px',
  color: '#000',
  marginTop: '13px',
})

export default Notes
