import FlexBox from "@layouts/flex-box";
import LinkLayout from "@layouts/link-layout";
import { FormControl, TextField, Typography } from "@mui/material";
import { theme } from "@theme/index";
import { useState } from "react";
import CustomIcons from "@assets/icons/custom-Icons";
import {
  ConfirmButton,
  FindLayout,
  Label,
} from "../find-password/find-password.style";
import { LoginLayoutProps } from "../login-modal.interface";
import { inputStyle } from "../login-modal.style";

const FindId = ({ setCondition }: LoginLayoutProps) => {
  const [email, setEmail] = useState<string>("");

  return (
    <FindLayout>
      <FlexBox
        onClick={() => setCondition("")}
        style={{ cursor: "pointer" }}
        alignItems="center"
      >
        <CustomIcons.ArrowLeftIcon style={{ marginBottom: "-16px" }} />
        <Typography
          fontSize={theme.typography.body2.fontSize}
          color={theme.palette.grey[800]}
        >
          Back
        </Typography>
      </FlexBox>
      <Typography
        fontSize={theme.typography.h1.fontSize}
        fontWeight="700"
        style={{ marginTop: "65px", marginBottom: "34px" }}
      >
        아이디 찾기
      </Typography>
      <FormControl fullWidth>
        <Label>가입했던 이메일을 입력해주세요.</Label>
        <TextField
          required
          fullWidth
          size="small"
          placeholder="이메일을 입력해주세요."
          name="email"
          sx={inputStyle}
          value={email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(event?.target.value)
          }
        />
        <ConfirmButton
          type="submit"
          fullWidth
          onClick={() => setCondition("id_result")}
          disabled={email === ""}
        >
          확인
        </ConfirmButton>
      </FormControl>
      <LinkLayout
        label="비밀번호가 기억나지 않는다면?"
        linkLabel="비밀번호 찾기"
        onClick={() => setCondition("password")}
        style={{ marginTop: "27px" }}
      />
    </FindLayout>
  );
};

export default FindId;
