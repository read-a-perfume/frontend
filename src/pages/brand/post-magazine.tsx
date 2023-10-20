import Header from "../../layouts/header";
import { BannerBlur, BannerImage } from "./brand.style";
import React, { useEffect, useRef, useState } from "react";
import {
  AddButton,
  AddButtonText,
  BannerButton,
  BannerContent,
  EditorTitle,
  HeaderImage,
  ImageDefault,
  TextBox,
  TitleInput,
} from "./magazine.style";
import FlexBox from "../../layouts/flex-box";
import CustomIcons from "../../assets/icons/custom-Icons";
import UploadIcon from "../../assets/icons/uploadI-con";
import { Button, Typography } from "@mui/material";

interface InputItem {
  id: number;
  type: number;
  subtitle: string;
  content: string;
  image: string;
}

const PostMagazine = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [fileURL, setFileURL] = useState<string>("");
  const [postImageURL, setPostImageURL] = useState<string>("");
  const [inputs, setInputs] = useState({
    title: "",
    tags: "",
  });
  const [countInput, setCountInput] = useState<number>(1);
  const [inputItems, setInputItems] = useState<InputItem[]>([
    {
      id: 0,
      type: 1,
      subtitle: "",
      content: "",
      image: "",
    },
  ]);
  const [completed, setCompleted] = useState<boolean>(false);

  useEffect(() => {
    console.log(postImageURL);

    if (inputs.title) {
      setCompleted(true);
    } else {
      setCompleted(false);
    }
  }, [inputs.title, postImageURL]);

  const changeImageHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    event.preventDefault();

    if (event.target.files) {
      const newFileURL = URL.createObjectURL(event.target.files[0]);
      if (name === "main") {
        setFileURL(newFileURL);
      } else if (name === "content") {
        setPostImageURL(newFileURL);
      }
    }
  };

  const changeContentHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current?.scrollHeight + "px";
    }

    if (index > inputItems.length) return;
    const test = JSON.parse(JSON.stringify(inputItems));
    test[index].content = event.target.value;
    setInputItems(test);
  };

  const changeSubtitleHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (index > inputItems.length) return;
    const test = JSON.parse(JSON.stringify(inputItems));
    test[index].subtitle = event.target.value;
    setInputItems(test);
  };

  return (
    <>
      <Header editorPostCompleted={completed} />
      <HeaderImage>
        <input
          type="file"
          accept="image/jpg,image/png,image/jpeg"
          hidden
          ref={fileRef}
          onChange={(event) => changeImageHandler(event, "main")}
        />
        <BannerContent imageurl={fileURL}>
          매겨진에서 보여줄
          <br />
          커버 이미지를 추가하세요.
        </BannerContent>
        <BannerButton
          image={fileURL.length > 0}
          imageurl={fileURL}
          onClick={() => {
            if (fileRef.current) {
              fileRef.current.click();
            }
          }}
        >
          컴퓨터에서 가져오기
        </BannerButton>
        {fileURL && (
          <>
            <BannerImage src={fileURL} alt="banner" style={{ zIndex: 1 }} />
            <BannerBlur />
          </>
        )}
      </HeaderImage>
      <div>
        <div style={{ margin: "47px 160px 38px 160px" }}>
          <FlexBox alignItems="center" style={{ marginBottom: 12 }}>
            <EditorTitle style={{ width: 60 }}>글 제목</EditorTitle>
            <TitleInput
              placeholder="글 제목을 입력하세요"
              style={{ width: "100%", outline: "none" }}
              value={inputs.title}
              onChange={(event) =>
                setInputs({ ...inputs, title: event.target.value })
              }
            />
          </FlexBox>
          <FlexBox alignItems="center">
            <EditorTitle style={{ width: 60 }}>태그</EditorTitle>
            <TitleInput
              placeholder="태그를 활용하여 키워드를 추가하세요. 예시) #선물추천 #신제품소개"
              style={{ width: "100%", outline: "none" }}
              value={inputs.tags}
              onChange={(event) =>
                setInputs({ ...inputs, tags: event.target.value })
              }
            />
          </FlexBox>
        </div>
        <FlexBox
          style={{
            padding: "0px 160px",
            marginTop: 38,
            height: 48,
            backgroundColor: "#FAFAFA",
            border: "1px solid #DBDBDB",
          }}
        >
          <AddButton
            onClick={() => {
              if (
                inputItems.length > 1 &&
                inputItems[inputItems.length - 1].type === 1 &&
                inputItems[inputItems.length - 1].content === ""
              ) {
                const tmp = inputItems;
                tmp.pop();
                setInputItems(tmp);
              }

              setCountInput(countInput + 2);
              const newInput = {
                id: countInput - 1,
                type: 2,
                subtitle: "",
                content: "",
                image: "",
              };
              setInputItems([
                ...inputItems,
                newInput,
                {
                  id: countInput,
                  type: 1,
                  subtitle: "",
                  content: "",
                  image: "",
                },
              ]);
            }}
          >
            <CustomIcons.TitleIcon />
            <AddButtonText>소제목 추가</AddButtonText>
          </AddButton>
          <AddButton
            style={{ borderLeft: "none" }}
            onClick={() => {
              if (
                inputItems.length > 1 &&
                inputItems[inputItems.length - 1].type === 1 &&
                inputItems[inputItems.length - 1].content === ""
              ) {
                const tmp = inputItems;
                tmp.pop();
                setInputItems(tmp);
              }

              setCountInput(countInput + 2);
              const newInput = {
                id: countInput - 1,
                type: 3,
                subtitle: "",
                content: "",
                image: "",
              };
              setInputItems([
                ...inputItems,
                newInput,
                {
                  id: countInput,
                  type: 1,
                  subtitle: "",
                  content: "",
                  image: "",
                },
              ]);
            }}
          >
            <CustomIcons.ImageIcon />
            <AddButtonText>이미지 추가</AddButtonText>
          </AddButton>
        </FlexBox>
        <TextBox style={{ marginBottom: 100 }}>
          {inputItems.map((el, index) => {
            if (el.type === 1) {
              return (
                <div key={index}>
                  <textarea
                    style={{
                      width: "100%",
                      outline: "none",
                      border: "none",
                      resize: "none",
                      fontSize: 20,
                      fontWeight: "500",
                      color: el.content ? "#707070" : "#A9A9A9",
                      lineHeight: "150%",
                    }}
                    ref={textareaRef}
                    value={el.content}
                    onChange={(event) => {
                      changeContentHandler(event, index);
                    }}
                    placeholder={
                      index === 0 ? "본문글을 자유롭게 작성하세요." : ""
                    }
                    onKeyDown={(event) => {
                      if (
                        (48 <= event.keyCode && event.keyCode <= 57) ||
                        (event.keyCode === 8 && el.content.length === 0)
                      ) {
                        const tmp = inputItems.filter((_, i) => i !== index);
                        setInputItems(tmp);
                      }
                    }}
                  />
                </div>
              );
            } else if (el.type === 2) {
              return (
                <div key={index}>
                  <input
                    style={{
                      width: "100%",
                      outline: "none",
                      border: "none",
                      marginTop: 24,
                      marginBottom: 24,
                      fontSize: 24,
                      lineHeight: "150%",
                      fontWeight: "500",
                      color: el.subtitle ? "#707070" : "#A9A9A9",
                    }}
                    value={el.subtitle}
                    onChange={(event) => changeSubtitleHandler(event, index)}
                    placeholder="소제목을 입력하세요."
                    onKeyDown={(event) => {
                      if (
                        (48 <= event.keyCode && event.keyCode <= 57) ||
                        (event.keyCode === 8 && el.content.length === 0)
                      ) {
                        const tmp = inputItems.filter((_, i) => i !== index);
                        setInputItems(tmp);
                      }
                    }}
                  />
                </div>
              );
            } else if (el.type === 3) {
              return (
                <div key={index}>
                  {el.image ? (
                    <ImageDefault>
                      <img
                        src={el.image}
                        alt="post"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </ImageDefault>
                  ) : (
                    <ImageDefault>
                      <UploadIcon />
                      <Typography
                        style={{
                          fontSize: 16,
                          fontWeight: "600",
                          color: "#191919",
                          marginTop: 16,
                          marginBottom: 16,
                        }}
                      >
                        이미지를 추가해보세요.
                      </Typography>
                      <input
                        type="file"
                        hidden
                        ref={fileRef}
                        accept="image/*"
                        onChange={(event) => {
                          event.preventDefault();
                          if (index > inputItems.length) return;

                          if (event.target.files) {
                            const newFileURL = URL.createObjectURL(
                              event.target.files[0]
                            );

                            const test = JSON.parse(JSON.stringify(inputItems));
                            test[index].image = newFileURL;
                            setInputItems(test);
                          }
                        }}
                      />
                      <Button
                        style={{
                          width: 137,
                          height: 34,
                          borderRadius: 10,
                          background: "#202020",
                          color: "white",
                          fontSize: 14,
                        }}
                        onClick={() => {
                          fileRef.current?.click();
                        }}
                      >
                        컴퓨터에서 가져오기
                      </Button>
                    </ImageDefault>
                  )}
                </div>
              );
            }
          })}
        </TextBox>
      </div>
    </>
  );
};

export default PostMagazine;
