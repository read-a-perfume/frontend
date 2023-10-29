import {Box} from '@mui/material'
import {ButtonGroup} from '@mui/material'
import styled from '@emotion/styled'
import Button from '@components/base/button.js'

const EditOptions = () => {
  return (
    <Box sx={{position: 'absolute', marginLeft: '440px', marginTop: '80px'}}>
      <OptionsGroup
        size="medium"
        variant="text"
        color="inherit"
        orientation="vertical"
      >
        <Button
          text="수정"
          height="30px"
          fullWidth
          backgroundColor="transparent"
          fontSize="sm"
          style={{color: '#191919'}}
        />
        <Divider />
        <Button
          text="삭제"
          fullWidth
          backgroundColor="transparent"
          height="30px"
          fontSize="sm"
          style={{color: '#FF3B3B'}}
        />
      </OptionsGroup>
    </Box>
  )
}

export default EditOptions

const OptionsGroup = styled(ButtonGroup)({
  border: '1px solid #C9CCD7',
  borderRadius: '10px',
  width: '61px',
  height: '60px',
  background: 'white',
})

const Divider = styled.div({
  height: '1px',
  backgroundColor: '#C9CCD7',
})
