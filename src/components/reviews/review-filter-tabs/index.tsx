import {useRouter} from '@hooks/use-router'

import FlexBox from '@layouts/flex-box'
import {Button, MenuItem, Select, Typography, styled} from '@mui/material'

interface IfReviewListSelectProps {
  sectionTitle: string
  buttonText: string
  optionName: string[]
  handleChangeSort: any
}

const ReviewFilterTabs = ({
  sectionTitle,
  buttonText,
  optionName,
  handleChangeSort,
}: IfReviewListSelectProps) => {
  const {routeTo} = useRouter()

  return (
    <FlexBox alignItems="center">
      <SectionTitle fontWeight={500}>{sectionTitle}</SectionTitle>

      <FlexBox gap="9px">
        <SelectStyle
          defaultValue="RECENT"
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#202020',
            },
          }}
          onChange={e => handleChangeSort(e)}
        >
          <MenuItemStyle value="RECENT">
            <span className="option-name">{optionName[0]}</span>
          </MenuItemStyle>

          <MenuItemStyle value="LIKE">
            <span className="option-name">{optionName[1]}</span>
          </MenuItemStyle>
        </SelectStyle>

        <WriteReviewButton onClick={() => routeTo('/reviews/writer')}>
          {buttonText}
        </WriteReviewButton>
      </FlexBox>
    </FlexBox>
  )
}
export default ReviewFilterTabs
const SectionTitle = styled(Typography)({
  fontFamily: 'AritaBuri, sans-serif, Arial !important',
  fontSize: 19.5,
  color: '#191919',
  marginRight: 'auto',
})

const MenuItemStyle = styled(MenuItem)({
  fontSize: 12,
  '&:hover .option-name': {
    fontWeight: '600',
    borderBottom: '1px solid black',
  },
})

const SelectStyle = styled(Select)({
  width: 108,
  height: 42,
  textAlign: 'center',
  background: 'white',
  borderRadius: 10,
  color: '#202020',
  fontSize: 12,
  fontWeight: '500',
})

const WriteReviewButton = styled(Button)({
  color: '#FFF',
  fontSize: 12,
  padding: '9px 41.3px 8.5px 42px',
  borderRadius: 10,
  backgroundColor: '#FE7156',

  '&:hover': {
    background: '#fe7256d6 ',
  },
})
