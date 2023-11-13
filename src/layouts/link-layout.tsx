import {LinksProps} from '@components/modal/login-modal/login-modal.interface.js'
import {ModalSpan} from '@components/modal/login-modal/login-modal.style.js'
import FlexBox from './flex-box.js'

const LinkLayout = ({linkLabel, label, onClick, style}: LinksProps) => {
  return (
    <FlexBox justifyContent="center" style={style}>
      <ModalSpan>{label}&nbsp;</ModalSpan>
      <ModalSpan color="blue" onClick={onClick}>
        {linkLabel}
      </ModalSpan>
    </FlexBox>
  )
}

export default LinkLayout
