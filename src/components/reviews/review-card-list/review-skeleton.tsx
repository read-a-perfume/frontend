import SkeletonCard from '@components/skeleton-card'
import FlexBox from '@layouts/flex-box'

interface IfProps {
  skeletons: number[]
}

const ReviewSkeleton = ({skeletons}: IfProps) => {
  return (
    <FlexBox
      gap="24px"
      style={{marginTop: '24px', flexWrap: 'wrap', width: '1200px'}}
    >
      {skeletons.map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </FlexBox>
  )
}

export default ReviewSkeleton
