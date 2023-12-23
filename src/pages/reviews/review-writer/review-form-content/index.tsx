import PerfumeSearchAndTabs from './perfume-search-and-tab'
import PhotoUpload from './photo-upload'
import ReviewAndKeywords from './review-and-keywords'

const ReviewFormContent = ({prograss}: {prograss: number}) => {
  return (
    <>
      {prograss === 0 && <PhotoUpload />}
      {prograss === 1 && <PerfumeSearchAndTabs />}
      {prograss === 2 && <ReviewAndKeywords />}
    </>
  )
}

export default ReviewFormContent
