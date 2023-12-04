import ProductCard from '@components/base/product-card.js'
import FlexBox from '@layouts/flex-box.js'
import PerfumeCharacteristics from '@pages/home/perfume-characteristics.js'
import {CardBox} from './brand.style.js'

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
          <PerfumeCharacteristics firstCategory="강도" />
        </FlexBox>
      ))}
    </CardBox>
  )
}

export default InfoBoxes
