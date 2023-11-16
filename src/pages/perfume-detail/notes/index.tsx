import {useState} from 'react'
import styled from '@emotion/styled'
import FlexBox from '@layouts/flex-box'
import {Box, Tab, Tabs, Typography} from '@mui/material'
import CustomIcons from '@assets/icons/custom-Icons'
import img1 from '../images/자몽.png'
import img2 from '../images/퀸스.png'

type CategoryType = '탑노트' | '미들노트' | '베이스노트'

const CATEGORIES: CategoryType[] = ['탑노트', '미들노트', '베이스노트']

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

// TODO:: 향수 노트 갯수에따라서 화살표가 생기게
const Notes = () => {
  const [activeTab, setActiveTab] = useState<string>('탑노트')
  const [value, setValue] = useState<number>(0)
  // const [notesData, setNotesData] = useState<string[]>([])

  console.log(activeTab)
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
          justifyContent="space-around"
          alignItems="center"
          gap="53px"
          style={{position: 'relative'}}
        >
          <CustomIcons.BeforeIcon style={{cursor: 'pointer'}} />

          <Box sx={{textAlign: 'center'}}>
            <img src={img1} alt="note-img" />
            <NotesName>자몽</NotesName>
          </Box>
          <Box sx={{textAlign: 'center'}}>
            <img src={img2} alt="note-img" />
            <NotesName>퀸스</NotesName>
          </Box>
          <Box sx={{textAlign: 'center'}}>
            <img src={img1} alt="note-img" />
            <NotesName>자몽</NotesName>
          </Box>
          <Box sx={{textAlign: 'center'}}>
            <img src={img1} alt="note-img" />
            <NotesName>자몽</NotesName>
          </Box>

          <CustomIcons.AfterIcon />
        </FlexBox>
      </Wrapper>
    </>
  )
}

const NotesHeader = styled.div({})

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
  marginTop: '28.5px',
  marginBottom: '32px',
  '& img': {
    borderRadius: '50%',
  },
})

const NotesName = styled(Typography)({
  fontFamily: 'AritaBuri !important',
  fontWeight: '500',
  fontSize: '14px',
  color: '#000',
  marginTop: '13px',
})

export default Notes
