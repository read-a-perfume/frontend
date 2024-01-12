import {useState} from 'react'
import instance from '@api/instance'

import FlexBox from '@layouts/flex-box'
import {
  Box,
  Popover,
  Skeleton,
  Tab,
  Tabs,
  Typography,
  styled,
} from '@mui/material'
import NoteCarouselItem from './Note-carousel-item'

interface IfNotesProps {
  topNotes: IfNotesType[]
  middleNotes: IfNotesType[]
  baseNotes: IfNotesType[]
  isLoading: boolean
}

interface IfNotesType {
  id: number
  name: string
  thumbnailUrl: string
}

type CategoryType = '탑노트' | '미들노트' | '베이스노트'

const CATEGORIES: CategoryType[] = ['탑노트', '미들노트', '베이스노트']

const isLoadingData = Array.from({length: 4}, (_, index) => index + 1)

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const Notes = ({topNotes, middleNotes, baseNotes, isLoading}: IfNotesProps) => {
  const [activeTab, setActiveTab] = useState<string>('탑노트')
  const [value, setValue] = useState<number>(0)
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const [noteDescription, setNoteDescription] = useState<string>('')

  // 노트에 마우스 올렸을때
  const handlePopoverOpen = async (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)

    try {
      const res = await instance.get(`/notes/${event.currentTarget.className}`)

      const data = res.data

      setNoteDescription(data?.description)
    } catch (error: any) {
      console.log(error)
    }
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }

  const handleTabsChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(() => {
      setActiveTab(CATEGORIES[newValue])
      return newValue
    })
  }

  const open = Boolean(anchorEl)

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
          style={{
            position: 'relative',
          }}
        >
          {isLoading ? (
            isLoadingData.map((_, index) => (
              <FlexBox
                direction="column"
                alignItems="center"
                style={{
                  textAlign: 'center',
                  width: '100%',
                }}
                key={index}
              >
                <Skeleton
                  width="81px"
                  height="81px"
                  variant="circular"
                ></Skeleton>

                <Skeleton width="33px" height="24px" sx={{marginTop: '13px'}}>
                  <Typography variant="body4">.</Typography>
                </Skeleton>
              </FlexBox>
            ))
          ) : (
            <>
              {activeTab === '탑노트' &&
                (topNotes?.length <= 4 ? (
                  topNotes?.map((note, index) => (
                    <FlexBox
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      style={{
                        textAlign: 'center',
                        width: '100%',
                      }}
                      key={index}
                    >
                      <div
                        onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}
                        className={`${note.id}`}
                      >
                        <img
                          src="/images/perfume-detail/자몽.png"
                          alt="note-img"
                        />
                        <NotesName>{note?.name}</NotesName>
                      </div>

                      <StyledPopover
                        id="mouse-over-popover"
                        sx={{
                          pointerEvents: 'none',
                        }}
                        open={open}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: 'center',
                          horizontal: 'center',
                        }}
                        transformOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                        onClose={handlePopoverClose}
                        disableRestoreFocus
                      >
                        <PopoverText sx={{p: 1}}>{noteDescription}</PopoverText>
                      </StyledPopover>
                    </FlexBox>
                  ))
                ) : (
                  <NoteCarouselItem
                    notes={baseNotes}
                    anchorEl={anchorEl}
                    noteDescription={noteDescription}
                    handlePopoverOpen={handlePopoverOpen}
                    handlePopoverClose={handlePopoverClose}
                    open={open}
                  />
                ))}

              {activeTab === '미들노트' &&
                (middleNotes?.length <= 4 ? (
                  middleNotes?.map((note, index) => (
                    <FlexBox
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      style={{
                        textAlign: 'center',
                        width: '100%',
                      }}
                      key={index}
                    >
                      <div
                        onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}
                        className={`${note.id}`}
                      >
                        <img
                          src="/images/perfume-detail/자몽.png"
                          alt="note-img"
                        />
                        <NotesName>{note?.name}</NotesName>
                      </div>

                      <StyledPopover
                        id="mouse-over-popover"
                        sx={{
                          pointerEvents: 'none',
                        }}
                        open={open}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: 'center',
                          horizontal: 'center',
                        }}
                        transformOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                        onClose={handlePopoverClose}
                        disableRestoreFocus
                      >
                        <PopoverText sx={{p: 1}}>{noteDescription}</PopoverText>
                      </StyledPopover>
                    </FlexBox>
                  ))
                ) : (
                  <NoteCarouselItem
                    notes={baseNotes}
                    anchorEl={anchorEl}
                    noteDescription={noteDescription}
                    handlePopoverOpen={handlePopoverOpen}
                    handlePopoverClose={handlePopoverClose}
                    open={open}
                  />
                ))}

              {activeTab === '베이스노트' &&
                (baseNotes?.length <= 4 ? (
                  baseNotes?.map((note, index) => (
                    <FlexBox
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      style={{
                        textAlign: 'center',
                        width: '100%',
                      }}
                      key={index}
                    >
                      <div
                        onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}
                        className={`${note.id}`}
                      >
                        <img
                          src="/images/perfume-detail/자몽.png"
                          alt="note-img"
                        />
                        <NotesName>{note?.name}</NotesName>
                      </div>

                      <StyledPopover
                        id="mouse-over-popover"
                        sx={{
                          pointerEvents: 'none',
                        }}
                        open={open}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: 'center',
                          horizontal: 'center',
                        }}
                        transformOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                        onClose={handlePopoverClose}
                        disableRestoreFocus
                      >
                        <PopoverText sx={{p: 1}}>{noteDescription}</PopoverText>
                      </StyledPopover>
                    </FlexBox>
                  ))
                ) : (
                  <NoteCarouselItem
                    notes={baseNotes}
                    anchorEl={anchorEl}
                    noteDescription={noteDescription}
                    handlePopoverOpen={handlePopoverOpen}
                    handlePopoverClose={handlePopoverClose}
                    open={open}
                  />
                ))}
            </>
          )}
        </FlexBox>
      </Wrapper>
    </>
  )
}

const NotesHeader = styled('div')({
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

const Wrapper = styled('div')({
  marginTop: '21.38px',
  marginBottom: '31.9px',

  '& img': {
    width: '81px',
    borderRadius: '50%',
    margin: '0 auto',
  },
})

const NotesName = styled(Typography)({
  fontFamily: 'Arita buri !important',
  fontWeight: '500',
  fontSize: '12px',
  color: '#000',
  marginTop: '13px',
  width: '100px',
})

const StyledPopover = styled(Popover)({
  '& .MuiPopover-paper': {
    width: '200px',
    padding: '10px',
    background: '#FE7156',
    color: '#fff',
    borderRadius: '30.5px 30.5px 30.5px 0px',
    boxShadow: 'none',
  },
})

const PopoverText = styled(Typography)({
  fontSize: '11px',
  fontWeight: '500',
  lineHeight: '16px',
  fontFamily: 'Arita buri',
})

export default Notes
