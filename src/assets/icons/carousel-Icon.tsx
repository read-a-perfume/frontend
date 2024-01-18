const CarouselIcon = ({clicked}: {clicked: boolean}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="49"
      height="2"
      viewBox="0 0 49 2"
      fill="none"
    >
      <path
        d="M1 0C0.447715 4.82823e-08 -4.82823e-08 0.447715 0 1C4.82823e-08 1.55228 0.447715 2 1 2L1 0ZM1 2L49 2L49 -4.19629e-06L1 0L1 2Z"
        fill={clicked ? '#Fe7156' : '#DBDBDB'}
      />
    </svg>
  )
}

export default CarouselIcon
