import FormInput from "./form-input";
import RadioTerm from "./radio-item";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import WestIcon from "@mui/icons-material/West";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
  ButtonBase,
  FormGroup,
  //   styled,
} from "@mui/material";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { theme } from "../../theme";
import FlexBox from "../../layouts/flex-box";

type SignUpInputs = {
  username: string;
  password: string;
  passwordCheck: string;
  email: string;
  emailAuthCode: string;
  companyName: string;
  bizNum: string;
  phoneNumer: string;
};

type Props = {
  type: "personal" | "enterprise" | "";
};

const initRequiredConsent = {
  ltAge: false,
  termOfUse: false,
  privacy: false,
};

const initOptionalConsent = {
  marketingConsent: false,
  promotionConsent: false,
};

const CheckButton = styled(Button)(() => ({
  display: "flex",
  height: "55px",
  width: "100%",
  wordBreak: "keep-all",
  color: "white",
  marginTop: 36,
}));

const SignUpForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
    setError,
    // getValues,
  } = useForm<SignUpInputs>();
  const { type } = props;
  console.log(type);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState<boolean>(false);
  const [allConsentChecked, setAllConsentChecked] = useState<boolean>(false);
  const [requiredConsent, setRequiredConsent] = useState(initRequiredConsent);
  const [optionalConsent, setOptionalConsent] = useState(initOptionalConsent);
  const [emailSendAlertOpen, setEmailSendAlertOpen] = useState<boolean>(false);
  const onToggleShowPassword = () => setShowPassword((prev) => !prev);
  const onToggleShowPasswordCheck = () => setShowPasswordCheck((prev) => !prev);
  const onValidPasswordMatched = (value: string, data: SignUpInputs) => {
    if (data.password !== value) {
      setError("passwordCheck", {
        message: "비밀번호가 일치하지 않습니다.",
      });
      return "비밀번호가 일치하지 않습니다.";
    }
    return true;
  };

  const onChangeAllConsentChecked = (event: any, checked: boolean) => {
    console.log(event, "event");
    const requiredConsent = {
      ltAge: checked,
      privacy: checked,
      termOfUse: checked,
    };

    const optionalConsent = {
      marketingConsent: checked,
      promotionConsent: checked,
    };

    setRequiredConsent(requiredConsent);
    setOptionalConsent(optionalConsent);
    setAllConsentChecked(checked);
  };

  const onChangeRequiredConsent = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    console.log(event.target.name);
    setRequiredConsent((prev) => ({
      ...prev,
      [event.target.name]: checked,
    }));
  };

  const onChangeOptionalConsent = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setOptionalConsent((prev) => ({
      ...prev,
      [event.target.name]: checked,
    }));
  };

  // const checkUsernameMount = useMutation(CheckId, {
  //   onSuccess: () => {
  //     setCheckId(true)
  //   },
  // })

  // const checkEmailMount = useMutation({
  //   mutationFn: CheckEmail,
  //   onSuccess: (data /*variables,*/ /*context*/) => {
  //     const {key} = data
  //     setAuthKey(key)
  //     setEmailAuthReady(true)
  //     setEmailSendAlertOpen(true)
  //   },
  // })

  // const confirmAuthMount = useMutation(ConfirmCode, {
  //   onSuccess: () => {
  //     setConfirmEmail(true)
  //   },
  // })

  // const signUpMount = useMutation(SignUp, {
  //   onSuccess: () => {
  //     alert('성공')
  //   },
  // })

  const onClickIdCheck = () => {
    // checkUsernameMount.mutate({
    //   id: getValues('username'),
    // }
    // )
  };

  const onClickEmailCheck = () => {
    // checkEmailMount.mutate({email: getValues('email')})
  };

  const onClickConfirmAuth = () => {
    // confirmAuthMount.mutate({code: getValues('emailAuthCode'), key: authKey})
  };

  const onSubmit = () => {
    // const {marketingConsent, promotionConsent} = optionalConsent
    // signUpMount.mutate({
    //   username: getValues('username'),
    //   password: getValues('password'),
    //   email: getValues('email'),
    //   marketingConsent,
    //   promotionConsent,
    // })
  };

  const closeEmailSendAlert = () => {
    setEmailSendAlertOpen(false);
  };

  useEffect(() => {
    console.log("Rendering....");
  }, []);

  return (
    <SignUpFormContainer>
      <BackButton>
        <WestIcon />
        <span>Back</span>
      </BackButton>
      <Typography variant="h1" mb={4}>
        회원가입
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container width="100%" columnSpacing={2} rowSpacing={2}>
          <FormInput
            label="아이디"
            text={
              errors.username && (
                <Typography
                  variant="body5"
                  color={theme.palette.error.main}
                  mt={1}
                >
                  {errors.username.message}
                </Typography>
              )
            }
          >
            <OutlinedInput
              style={{
                fontSize: theme.typography.body3.fontSize,
              }}
              placeholder="6~16자 / 영문 소문자, 숫자 사용 가능"
              color="info"
              {...register("username", {
                required: {
                  value: true,
                  message: "아이디를 입력해주세요.",
                },
                minLength: {
                  value: 6,
                  message: "최소 6자 이상 입력해주세요.",
                },
                maxLength: {
                  value: 16,
                  message: "최대 16자 이하 입력해주세요.",
                },
                pattern: {
                  value: /^[a-z](?=.*\d)[a-z0-9]+$/g,
                  message: "올바른 아이디를 입력해주세요.",
                },
              })}
            />
          </FormInput>

          <Grid item xs={3}>
            <CheckButton
              variant="contained"
              disableElevation
              // style={{
              //   backgroundColor:
              //     checkId === false
              //       ? theme.palette.error.main
              //       : checkId === true
              //       ? theme.palette.grey[200]
              //       : 'black',
              // }}
              onClick={onClickIdCheck}
              // disabled={checkId}
            >
              중복확인
            </CheckButton>
          </Grid>

          <FormInput
            label="비밀번호"
            text={
              errors.password && (
                <Typography
                  variant="body5"
                  color={theme.palette.error.main}
                  mt={1}
                >
                  {errors.password.message}
                </Typography>
              )
            }
          >
            <FormControl variant="filled">
              <OutlinedInput
                style={{
                  fontSize: theme.typography.body3.fontSize,
                }}
                color="info"
                placeholder="8~16자 / 문자, 숫자, 특수 문자 모두 혼용"
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: {
                    value: true,
                    message: "비밀번호를 입력하세요",
                  },
                  minLength: {
                    value: 8,
                    message: "비밀번호는 최소 8자리 입니다.",
                  },
                  maxLength: {
                    value: 16,
                    message: "비밀번호는 최대 16자리 입니다.",
                  },
                })}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={onToggleShowPassword} edge="end">
                      {showPassword ? (
                        <VisibilityOff
                          style={{ color: theme.palette.grey[400] }}
                        />
                      ) : (
                        <Visibility
                          style={{ color: theme.palette.grey[400] }}
                        />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </FormInput>

          <FormInput
            label="비밀번호 재확인"
            text={
              errors.passwordCheck && (
                <Typography
                  variant="body5"
                  color={theme.palette.error.main}
                  mt={1}
                >
                  {errors.passwordCheck.message}
                </Typography>
              )
            }
          >
            <FormControl variant="filled">
              <OutlinedInput
                style={{
                  fontSize: theme.typography.body3.fontSize,
                }}
                color="info"
                placeholder="비밀번호 재확인"
                type={showPasswordCheck ? "text" : "password"}
                {...register("passwordCheck", {
                  required: {
                    value: true,
                    message: "재확인 비밀번호를 입력하세요",
                  },
                  validate: (value, data) =>
                    onValidPasswordMatched(value, data),
                })}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={onToggleShowPasswordCheck} edge="end">
                      {showPassword ? (
                        <VisibilityOff
                          style={{ color: theme.palette.grey[400] }}
                        />
                      ) : (
                        <Visibility
                          style={{ color: theme.palette.grey[400] }}
                        />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </FormInput>

          <FormInput
            label="본인 확인 이메일"
            text={
              errors.email && (
                <Typography
                  variant="body5"
                  color={theme.palette.error.main}
                  mt={1}
                >
                  {errors.email.message}
                </Typography>
              )
            }
          >
            <OutlinedInput
              style={{
                fontSize: theme.typography.body3.fontSize,
              }}
              type="email"
              placeholder="이메일을 입력해주세요."
              color="info"
              {...register("email", {
                required: {
                  value: true,
                  message: "이메일을 입력해주세요.",
                },
                pattern: {
                  value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "올바른 이메일 형식으로 입력해주세요.",
                },
              })}
            />
          </FormInput>

          <Grid item xs={3}>
            <CheckButton
              disableElevation
              variant="contained"
              color="inherit"
              onClick={onClickEmailCheck}
              // disabled={emailAuthReady}
              // style={{
              //   backgroundColor: emailAuthReady
              //     ? theme.palette.grey[200]
              //     : 'black',
              // }}
            >
              인증(필수)
            </CheckButton>
          </Grid>

          {
            /*emailAuthReady*/ true && (
              <>
                <FormInput
                  text={
                    <FlexBox direction="column">
                      <Typography variant="caption" mt={1}>
                        혹시 인증번호가 오지 않았다면
                        <button
                          style={{
                            color: theme.palette.primary.main,
                            textDecoration: "underline",
                            marginLeft: 4,
                            background: "none",
                            border: "none",
                            padding: 0,
                            fontSize: theme.typography.caption.fontSize,
                          }}
                        >
                          재발급
                        </button>
                        을 눌러주세요.
                      </Typography>
                    </FlexBox>
                  }
                >
                  <OutlinedInput
                    style={{
                      fontSize: theme.typography.body3.fontSize,
                    }}
                    type="text"
                    placeholder="인증코드 6자리 입력."
                    color="info"
                    {...register("emailAuthCode", {
                      required: {
                        value: true,
                        message: "이메일 인증번호를 입력해주세요.",
                      },
                    })}
                  />
                </FormInput>

                <Grid item xs={3}>
                  <CheckButton
                    disableElevation
                    variant="contained"
                    color="inherit"
                    onClick={onClickConfirmAuth}
                    // disabled={confirmEmail}
                    // style={{
                    //   backgroundColor: confirmEmail
                    //     ? theme.palette.grey[200]
                    //     : 'black',
                    //   whiteSpace: 'nowrap',
                    //   marginTop: 14,
                    // }}
                  >
                    인증번호 확인
                  </CheckButton>
                </Grid>
              </>
            )
          }

          <Grid item xs={10}>
            <Typography variant="body3" mb={2}>
              약관동의
            </Typography>
            <ConsentBox>
              <Box
                style={{
                  borderBottom: "1px solid",
                  borderColor: theme.palette.grey[500],
                  paddingBottom: 4,
                }}
              >
                <RadioTerm
                  label="전체동의"
                  name="all"
                  checked={allConsentChecked}
                  onChange={onChangeAllConsentChecked}
                  subText="선택항목에 대한 동의 포함"
                />
              </Box>
              <ul
                style={{
                  padding: 0,
                  margin: 0,
                  marginTop: 8,
                }}
              >
                <li>
                  <RadioTerm
                    label="만 14세 이상입니다."
                    name="ltAge"
                    checked={requiredConsent.ltAge}
                    onChange={onChangeRequiredConsent}
                    required
                  />
                </li>
                <li>
                  <RadioTerm
                    label="이용약관"
                    name="termOfUse"
                    checked={requiredConsent.termOfUse}
                    onChange={onChangeRequiredConsent}
                    required
                  />
                </li>
                <li>
                  <RadioTerm
                    label="개인정보 수집 및 이용동의"
                    name="privacy"
                    checked={requiredConsent.privacy}
                    onChange={onChangeRequiredConsent}
                    required
                  />
                </li>
                <li>
                  <RadioTerm
                    label="개인정보 마케팅 활용 동의 "
                    name="marketingConsent"
                    checked={optionalConsent.marketingConsent}
                    onChange={onChangeOptionalConsent}
                  />
                </li>
                <li>
                  <RadioTerm
                    label="이벤트, 쿠폰, 특가 알림 메일 수신"
                    name="promotionConsent"
                    checked={optionalConsent.promotionConsent}
                    onChange={onChangeOptionalConsent}
                  />
                </li>
              </ul>
            </ConsentBox>
            <Button
              type="submit"
              variant="contained"
              color="inherit"
              size="large"
              style={{
                width: "100%",
              }}
            >
              회원가입하기
            </Button>
          </Grid>
          <Grid item xs={10}>
            <LoginLinkBox>
              <Typography color={theme.palette.grey[400]} variant="body4">
                이미 회원이신가요?
              </Typography>
              <Link
                to="#"
                style={{
                  cursor: "pointer",
                  margin: "0px 4px",
                  padding: 0,
                  backgroundColor: "transparent",
                  border: "none",
                  color: theme.palette.secondary.main,
                  textDecoration: "underline",
                  marginLeft: 8,
                }}
              >
                로그인하기
              </Link>
            </LoginLinkBox>
          </Grid>
        </Grid>
      </form>
      <Dialog open={emailSendAlertOpen}>
        <DialogContent>
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Typography align="center" variant="body2" mb={2} fontWeight={600}>
              인증 메일을 발송했습니다.
              <br />
              메일함을 확인해주세요.
            </Typography>
            <Button
              disableElevation
              variant="contained"
              onClick={closeEmailSendAlert}
            >
              확인
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </SignUpFormContainer>
  );
};

export default SignUpForm;
export const SignUpFormContainer = styled(FormGroup)(() => ({
  display: "flex",
  flexDirection: "column",
  "& > * + *": {
    marginTop: 24,
  },

  maxWidth: 500,
}));

export const BackButton = styled(ButtonBase)(() => ({
  display: "flex",
  justifyContent: "flex-start",
  marginBottom: 66,
  "& span": {
    marginLeft: 13,
  },
}));

export const ConsentBox = styled(Box)(() => ({
  marginBottom: 30,
  padding: 4,
  paddingBottom: 0,
  borderRadius: 4,
  "& li": {
    listStyle: "none",
  },
}));

export const LoginLinkBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  "& *": {
    fontSize: theme.typography.body4.fontSize,
  },
}));
