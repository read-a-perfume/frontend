import {useRouter} from '@hooks/use-router'

import FlexBox from '@layouts/flex-box'
import {Button, MenuItem, Select, Typography, styled} from '@mui/material'

const ReviewListSelect = ({
  sectionTitle,
  buttonText,
  handleChangeSort,
}: any) => {
  const {routeTo} = useRouter()

  return (
    <FlexBox alignItems="center">
      <SectionTitle>{sectionTitle}</SectionTitle>

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
            <span className="option-name">최신순</span>
          </MenuItemStyle>

          <MenuItemStyle value="LIKE">
            <span className="option-name">좋아요순</span>
          </MenuItemStyle>
        </SelectStyle>

        <WriteReviewButton onClick={() => routeTo('/reviews/writer')}>
          {buttonText}
        </WriteReviewButton>
      </FlexBox>
    </FlexBox>
  )
}

const SectionTitle = styled(Typography)({
  fontFamily: 'AritaBuri, sans-serif, Arial !important',
  fontSize: 19.5,
  fontWeight: '700',
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

export default ReviewListSelect
