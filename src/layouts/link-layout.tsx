import { LinksProps } from "@components/modal/login-modal/login-modal.interface";
import { ModalSpan } from "@components/modal/login-modal/login-modal.style";
import FlexBox from "./flex-box";

const LinkLayout = ({ linkLabel, label, onClick, style }: LinksProps) => {
  return (
    <FlexBox justifyContent="center" style={style}>
      <ModalSpan>{label}&nbsp;</ModalSpan>
      <ModalSpan color="blue" onClick={onClick}>
        {linkLabel}
      </ModalSpan>
    </FlexBox>
  );
};

export default LinkLayout;
