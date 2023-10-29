import ProductCard from '@components/base/product-card.js'
import FlexBox from '@layouts/flex-box.js'
import {BoxContent, CardBox, Categories, InfoBox, Types} from './brand.style.js'

const InfoBoxes = ({enterprise}: {enterprise: boolean}) => {
  const productData = new Array(8).fill(0).map((_, i) => i + 1)

  return (
    <CardBox>
      {productData.map(el => (
        <FlexBox
          gap="32px"
          direction="column"
          style={{flexWrap: 'wrap'}}
          key={el}
        >
          <ProductCard
            brandName={'탬버린즈'}
            productName={'퍼퓸 카모'}
            isEditor={enterprise}
          />
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
  )
}

export default InfoBoxes
