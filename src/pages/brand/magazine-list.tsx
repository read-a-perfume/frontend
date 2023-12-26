import BrandListContainer from "./brand-list-container"

interface proptype{
    brandId:string
}

const MagazineList = ({brandId}:proptype) => {

    console.log(brandId)

    return(
        <BrandListContainer col={3}>
            아직 api 없음
        </BrandListContainer>
    )
}

export default MagazineList