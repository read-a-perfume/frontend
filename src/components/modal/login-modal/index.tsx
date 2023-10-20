import { useState } from "react";
import FindPassword from "./find-password/find-password";
import SendEmail from "./find-password/send-email";
import LoginLayout from "./login-layout";
import { ModalProps } from "./login-modal.interface";
import { ModalLayout, ModalStyle } from "./login-modal.style";
import FindId from "./find-id/find-id";
import IdResult from "./find-id/id-result";

const LoginModal = ({ isOpen, setIsOpen }: ModalProps) => {
  const [condition, setCondition] = useState<string>("");

  return (
    <ModalStyle open={isOpen} onClose={() => setIsOpen(false)}>
      <ModalLayout>
        {!condition && (
          <LoginLayout
            setCondition={setCondition}
            condition={condition}
            setIsOpen={setIsOpen}
          />
        )}
        {condition === "id" && <FindId setCondition={setCondition} />}
        {condition === "id_result" && <IdResult />}
        {condition === "password" && (
          <FindPassword setCondition={setCondition} />
        )}
        {condition === "password_email" && <SendEmail />}
      </ModalLayout>
    </ModalStyle>
  );
};

export default LoginModal;
