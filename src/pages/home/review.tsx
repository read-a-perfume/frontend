import FlexBox from "../../layouts/flex-box";
import { Button, Select, MenuItem, styled } from "@mui/material";
import { SectionSubTitle, SectionTitle } from "./index.style";
import { useState } from "react";
import CustomIcons from "../../assets/icons/custom-Icons";
import ReviewCard from "./review-card";
const Review = () => {
  const [filtered, setFiltered] = useState<string>("all");

  return (
    <div>
      <SectionTitle>향수 리뷰</SectionTitle>
      <SectionSubTitle>다양한 향수 리뷰를 피드에서 살펴보세요</SectionSubTitle>
      <FlexBox justifyContent="space-between">
        <FlexBox style={{ gap: 12 }}>
          <OrderButton
            clicked={filtered === "all"}
            onClick={() => setFiltered("all")}
          >
            ALL
          </OrderButton>
          <OrderButton
            clicked={filtered === "note"}
            onClick={() => setFiltered("note")}
          >
            향수 노트별
          </OrderButton>
          <OrderButton
            clicked={filtered === "brand"}
            onClick={() => setFiltered("brand")}
          >
            브랜드별
          </OrderButton>
          <OrderButton
            clicked={filtered === "mood"}
            onClick={() => setFiltered("mood")}
          >
            분위기별
          </OrderButton>
        </FlexBox>
        <FlexBox style={{ gap: 20 }}>
          <DetailOrder
            defaultValue="help"
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#202020",
              },
            }}
          >
            <MenuItem value="help">도움순</MenuItem>
          </DetailOrder>
          <FilterButton>
            필터 <CustomIcons.FilterIcon style={{ marginLeft: 10 }} />
          </FilterButton>
        </FlexBox>
      </FlexBox>
      <FlexBox style={{ marginTop: 48, flexWrap: "wrap", gap: 32 }}>
        {new Array(6).fill(0).map((el) => (
          <ReviewCard key={el} />
        ))}
      </FlexBox>
    </div>
  );
};

export default Review;
const OrderButton = styled(Button)(({ clicked }: { clicked: boolean }) => ({
  height: 42,
  borderRadius: 21,
  fontSize: 16,
  fontWeight: "600",
  color: clicked ? "white" : "#A9A9A9",
  background: clicked ? "#FE7156" : "#F1F1F5",
  padding: "8px 13px",
}));

const DetailOrder = styled(Select)({
  width: 108,
  height: 42,
  background: "white",
  borderRadius: 10,
  color: "#202020",
  fontSize: 16,
  fontWeight: "500",
});

const FilterButton = styled(Button)({
  width: 91,
  height: 42,
  borderRadius: 10,
  border: "1px solid #202020",
  background: "white",
  fontSize: 16,
  fontWeight: "500",
  color: "#202020",
});
