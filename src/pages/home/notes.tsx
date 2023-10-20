import FlexBox from "../../layouts/flex-box";
import { SectionSubTitle, SectionTitle } from "./index.style";
import { useState } from "react";
import CustomIcons from "../../assets/icons/custom-Icons";
import { noteData } from "./constants";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const Notes = () => {
  const [clickedNote, setClickedNote] = useState<string>("fruit");
  // 인라인스타일 주지말것.
  return (
    <Wrapper>
      <SectionTitle>노트별 향수 추천</SectionTitle>
      <SectionSubTitle>
        사랑받고 있는 노트별 향수를 추천해드려요!
      </SectionSubTitle>
      <FlexBox alignItems="center">
        <CustomIcons.BeforeIcon
          style={{ marginRight: 36, cursor: "pointer" }}
        />
        <FlexBox style={{ gap: "5.8%", width: "100%", marginRight: 36 }}>
          {noteData.map((note) => (
            <FlexBox
              key={note.name}
              style={{ flexDirection: "column", alignItems: "center" }}
            >
              <NoteImage
                clicked={clickedNote === note.name}
                onClick={() => setClickedNote(note.name)}
              >
                {/* <img src="" alt="note" /> */}
              </NoteImage>
              <NoteName clicked={clickedNote === note.name}>
                {note.name.toUpperCase()}
              </NoteName>
            </FlexBox>
          ))}
        </FlexBox>
        <CustomIcons.AfterIcon
          style={{ marginLeft: 36, cursor: "pointer", marginRight: "3%" }}
        />
      </FlexBox>
      <FlexBox style={{ marginTop: 74, gap: 32 }}>
        <NoteBox>
          <img
            src="images/note_bg.png"
            alt="note"
            style={{
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.35) 100%), lightgray 50% / cover no-repeat",
              borderRadius: 16,
              position: "absolute",
            }}
          />
          <NoteTitle>
            {clickedNote.toUpperCase()}
            <br />
            NOTE
          </NoteTitle>
          <NoteSubTitle>
            나무 향을 의미하며,
            <br />
            건조하고 성숙한 느낌을 전달합니다.
          </NoteSubTitle>
        </NoteBox>
        <ProductLayout>
          {new Array(6).fill(0).map((el) => (
            <ProductBox key={el}>
              <img
                src="images/perfume_test.png"
                alt="product"
                style={{ objectFit: "contain", width: "100%", height: 206 }}
              />
              <ProductInfoBox>
                <ProductName>오드퍼퓸 플레르드뽀 750ml</ProductName>
                <BrandName>딥디크</BrandName>
              </ProductInfoBox>
            </ProductBox>
          ))}
        </ProductLayout>
      </FlexBox>
    </Wrapper>
  );
};

export default Notes;

const Wrapper = styled.div`
  margin-top: 122px;
`;

const NoteName = styled(Typography)(({ clicked }: { clicked: boolean }) => ({
  fontFamily: "AritaBuri, sans-serif, Arial !important",
  fontSize: 18,
  fontWeight: "500",
  marginTop: 16,
  color: clicked ? "#FE7156" : "black",
}));

const NoteImage = styled(Typography)(({ clicked }: { clicked: boolean }) => ({
  width: 104,
  height: 104,
  borderRadius: "100%",
  backgroundColor: "#F1F1F5",
  border: "3px solid white",
  outline: clicked ? "1px solid #FE7156" : "1px solid #F1F1F5",
  cursor: "pointer",
}));

const NoteTitle = styled(Typography)({
  fontFamily: "AritaBuri, sans-serif, Arial !important",
  color: "white",
  fontSize: 32,
  fontWeight: "500",
  position: "absolute",
  paddingLeft: 32,
  paddingTop: 53,
  marginBottom: 20,
});

const NoteSubTitle = styled(Typography)({
  fontSize: 18,
  color: "white",
  position: "absolute",
  paddingLeft: 32,
  paddingTop: 53,
  marginTop: 100,
});

const ProductLayout = styled.div({
  display: "flex",
  flex: 1,
  height: 600,
  gap: 32,
  flexWrap: "wrap",
  marginBottom: 136,
});

const ProductBox = styled.div({
  width: "31%",
  height: 284,
  borderRadius: 16,
  background: "white",
  border: "1px solid #DBDBDB",
  overflow: "hidden",
});

const ProductInfoBox = styled.div({
  paddingLeft: 24,
  marginTop: -6,
  height: 78,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  borderTop: "1px solid #EDEDED",
});

const NoteBox = styled.div({
  height: 600,
  width: 376,
  borderRadius: 16,
  overflow: "hidden",
});

const ProductName = styled(Typography)({
  color: "#191919",
  fontSize: 18,
  fontWeight: "500",
});

const BrandName = styled(Typography)({
  color: "#A9A9A9",
  fontSize: 14,
});
