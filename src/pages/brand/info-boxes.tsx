import FlexBox from "@layouts/flex-box";
import {
  BoxContent,
  BrandName,
  Card,
  CardBox,
  CardImage,
  Categories,
  InfoBox,
  PerfumeHamburger,
  ProductName,
  Types,
} from "./brand.style";

const InfoBoxes = ({ enterprise }: { enterprise: boolean }) => {
  const productData = new Array(8).fill(0).map((_, i) => i + 1);

  return (
    <CardBox>
      {productData.map((el) => (
        <FlexBox
          gap="32px"
          direction="column"
          style={{ flexWrap: "wrap" }}
          key={el}
        >
          <Card width="376px" height="426px">
            {enterprise && (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <PerfumeHamburger />
              </div>
            )}
            <CardImage src="/images/perfume.png" alt="product" height="341px" />
            <FlexBox alignItems="center" style={{ flexDirection: "column" }}>
              <BrandName>탬버린즈</BrandName>
              <ProductName>퍼퓸 카모</ProductName>
            </FlexBox>
          </Card>
          <FlexBox direction="column" gap="12px">
            <InfoBox>
              <BoxContent left={true}>
                <Categories>강도</Categories>
                <Types color="#333">적당한 향</Types>
              </BoxContent>
              <BoxContent left={false}>
                <Categories>지속력</Categories>
                <Types color="#333">3시간-6시간</Types>
              </BoxContent>
            </InfoBox>
          </FlexBox>
        </FlexBox>
      ))}
    </CardBox>
  );
};

export default InfoBoxes;
