import CustomIcons from '@assets/icons/custom-Icons.js'
import FlexBox from '@layouts/flex-box.js'
import {Typography} from '@mui/material'
import styled from '@emotion/styled'

const BoxBottomButtton = ({
  text,
  onClick,
  noIcon = false,
}: {
  text: string
  onClick: () => void
  noIcon?: boolean
}) => {
  return (
    <FlexBox justifyContent="center" alignItems="center">
      <ButtonLayout onClick={onClick}>
        <FlexBox gap="4px">
          {!noIcon && <CustomIcons.PencilIcon />}
          <ButtonText>{text}</ButtonText>
        </FlexBox>
      </ButtonLayout>
    </FlexBox>
  )
}

export default BoxBottomButtton

const ButtonLayout = styled.button({
  width: '340px',
  height: '48px',
  borderRadius: 10,
  border: '1px solid #DBDBDB',
  color: '#191919',
  fontSize: 16,
  fontWeight: '500',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const ButtonText = styled(Typography)({
  fontSize: 16,
  fonteight: '500',
  color: '#191919',
})
