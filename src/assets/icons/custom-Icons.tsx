import {createSvgIcon} from '@mui/material/utils'

interface IconProps {
  size?: string
  color?: string
  fill?: string
  stroke?: string
  strokeWidth?: string
}

const CommentIcon: React.FC<IconProps> = ({size = '21', color = '#E7E7E7'}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5716 16.2675C15.6207 16.2675 19.7144 12.6355 19.7144 8.50681C19.7144 4.37815 15.6207 1.31787 10.5716 1.31787C5.52243 1.31787 1.42871 4.6646 1.42871 8.79326C1.42871 10.4047 2.05271 11.8978 3.11443 13.1177L2.00014 18.1842L6.47557 15.4779C7.77243 16.0041 9.16535 16.2726 10.5716 16.2675Z"
        fill={color}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const CommentIcon2: React.FC<IconProps> = ({
  size = '20',
  color = '#DBDBDB',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M2 2H18V14H3.17L2 15.17V2ZM2 0C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0H2ZM4 10H12V12H4V10ZM4 7H16V9H4V7ZM4 4H16V6H4V4Z"
        fill={color}
      />
    </svg>
  )
}

const SearchIcon: React.FC<IconProps> = ({size = '25', color = '#202020'}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.7495 20.937L16.0855 15.273C17.4466 13.639 18.1253 11.5431 17.9805 9.42145C17.8356 7.29975 16.8784 5.31557 15.3079 3.88166C13.7374 2.44775 11.6745 1.67453 9.54844 1.72284C7.42236 1.77115 5.39674 2.63727 3.89298 4.14103C2.38922 5.64479 1.5231 7.6704 1.47479 9.79649C1.42648 11.9226 2.19971 13.9854 3.63361 15.556C5.06752 17.1265 7.0517 18.0837 9.1734 18.2285C11.2951 18.3733 13.391 17.6946 15.025 16.3335L20.689 21.9975L21.7495 20.937ZM2.99948 9.99752C2.99948 8.6625 3.39536 7.35746 4.13706 6.24742C4.87876 5.13739 5.93296 4.27223 7.16636 3.76134C8.39976 3.25044 9.75696 3.11677 11.0663 3.37722C12.3757 3.63767 13.5784 4.28055 14.5224 5.22455C15.4665 6.16856 16.1093 7.37129 16.3698 8.68066C16.6302 9.99004 16.4966 11.3472 15.9857 12.5806C15.4748 13.814 14.6096 14.8682 13.4996 15.6099C12.3895 16.3516 11.0845 16.7475 9.74948 16.7475C7.95987 16.7455 6.24414 16.0337 4.9787 14.7683C3.71326 13.5029 3.00146 11.7871 2.99948 9.99752Z"
        fill={color}
      />
    </svg>
  )
}

const DefaultCheckIcon: React.FC<IconProps> = ({
  size = '20',
  color = '#707070',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.625 11.125L8.875 13.375L14.5 7.75"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const YellowCheckIcon = ({
  size = '20',
  color = '#FF3B3B',
  stroke = '#131313',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.625 11.125L8.875 13.375L14.5 7.75"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const ArrowLeftIcon: React.FC<IconProps> = ({color = '#131313'}) => {
  return (
    <svg
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.499 1.49707L0.5 5.49907L4.5 9.50007M13.5 5.50007H0.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const HamburgerIcon: React.FC<IconProps> = ({
  size = '24',
  color = '#131331',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"
      />
    </svg>
  )
}

const ImageUploadIcon: React.FC<IconProps> = ({color = '#B4B4B4'}) => {
  return (
    <svg width="61" height="55" viewBox="0 0 61 55" fill="none">
      <path
        d="M61 33.1117V51.0713C61 52.1133 60.591 53.1125 59.863 53.8493C59.1351 54.5861 58.1477 55 57.1182 55H3.88182C2.8523 55 1.86494 54.5861 1.13696 53.8493C0.408976 53.1125 0 52.1133 0 51.0713V33.1117C0 32.0697 0.408976 31.0704 1.13696 30.3337C1.86494 29.5969 2.8523 29.183 3.88182 29.183H17.1909C17.6321 29.183 18.0553 29.3604 18.3673 29.6761C18.6793 29.9919 18.8545 30.4201 18.8545 30.8667C18.8545 31.3132 18.6793 31.7415 18.3673 32.0573C18.0553 32.373 17.6321 32.5504 17.1909 32.5504H3.88182C3.73474 32.5504 3.59369 32.6095 3.4897 32.7148C3.3857 32.82 3.32727 32.9628 3.32727 33.1117V51.0713C3.32727 51.2202 3.3857 51.3629 3.4897 51.4682C3.59369 51.5734 3.73474 51.6326 3.88182 51.6326H57.1182C57.2653 51.6326 57.4063 51.5734 57.5103 51.4682C57.6143 51.3629 57.6727 51.2202 57.6727 51.0713V33.1117C57.6727 32.9628 57.6143 32.82 57.5103 32.7148C57.4063 32.6095 57.2653 32.5504 57.1182 32.5504H43.8091C43.3679 32.5504 42.9447 32.373 42.6327 32.0573C42.3207 31.7415 42.1455 31.3132 42.1455 30.8667C42.1455 30.4201 42.3207 29.9919 42.6327 29.6761C42.9447 29.3604 43.3679 29.183 43.8091 29.183H57.1182C58.1477 29.183 59.1351 29.5969 59.863 30.3337C60.591 31.0704 61 32.0697 61 33.1117ZM18.3665 16.3418L28.8364 5.74842V30.8667C28.8364 31.3132 29.0116 31.7415 29.3236 32.0573C29.6356 32.373 30.0588 32.5504 30.5 32.5504C30.9412 32.5504 31.3644 32.373 31.6764 32.0573C31.9884 31.7415 32.1636 31.3132 32.1636 30.8667V5.74842L42.6335 16.3418C42.9488 16.6392 43.3659 16.8011 43.7969 16.7934C44.2279 16.7857 44.6392 16.609 44.944 16.3006C45.2488 15.9921 45.4234 15.5759 45.431 15.1397C45.4386 14.7035 45.2786 14.2813 44.9847 13.9622L31.6756 0.492409C31.3637 0.177104 30.9409 0 30.5 0C30.0591 0 29.6363 0.177104 29.3244 0.492409L16.0153 13.9622C15.7214 14.2813 15.5614 14.7035 15.569 15.1397C15.5766 15.5759 15.7512 15.9921 16.056 16.3006C16.3608 16.609 16.7721 16.7857 17.2031 16.7934C17.6341 16.8011 18.0512 16.6392 18.3665 16.3418ZM49.9091 42.0915C49.9091 41.5365 49.7465 40.9939 49.4418 40.5324C49.1371 40.071 48.7041 39.7113 48.1974 39.4989C47.6908 39.2865 47.1333 39.2309 46.5954 39.3392C46.0576 39.4475 45.5635 39.7148 45.1757 40.1072C44.788 40.4997 44.5239 40.9997 44.4169 41.544C44.3099 42.0884 44.3648 42.6526 44.5747 43.1654C44.7846 43.6781 45.1399 44.1164 45.5959 44.4248C46.0519 44.7331 46.588 44.8977 47.1364 44.8977C47.8717 44.8977 48.577 44.602 49.097 44.0758C49.617 43.5495 49.9091 42.8357 49.9091 42.0915Z"
        fill={color}
      />
    </svg>
  )
}

const TitleIcon: React.FC<IconProps> = ({size = '24', color = 'black'}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M5 5V8H10.5V20H13.5V8H19V5H5Z" fill={color} />
    </svg>
  )
}

const ImageIcon: React.FC<IconProps> = ({size = '24', color = '#191919'}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z"
        fill={color}
      />
    </svg>
  )
}

const TagIcon: React.FC<IconProps> = ({size = '24', color = 'black'}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 10V8H16V4H14V8H10V4H8V8H4V10H8V14H4V16H8V20H10V16H14V20H16V16H20V14H16V10H20ZM14 14H10V10H14V14Z"
        fill={color}
      />
    </svg>
  )
}

const BeforeIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M13.9806 6L15.3906 7.41L10.8106 12L15.3906 16.59L13.9806 18L7.98062 12L13.9806 6Z"
      fill="#B4B4B4"
    />
  </svg>,
  'BeforeIcon',
)

const BeforeIconBlack: React.FC<IconProps> = ({
  size = '24',
  color = 'black',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M13.9806 6L15.3906 7.41L10.8106 12L15.3906 16.59L13.9806 18L7.98062 12L13.9806 6Z"
        fill={color}
      />
    </svg>
  )
}

const AfterIcon: React.FC<IconProps> = ({size = '24', color = '#B4B4B4'}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10.0194 6L8.60938 7.41L13.1894 12L8.60938 16.59L10.0194 18L16.0194 12L10.0194 6Z"
        fill={color}
      />
    </svg>
  )
}

const AfterIconBlack: React.FC<IconProps> = ({
  size = '24',
  color = 'black',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10.0194 6L8.60938 7.41L13.1894 12L8.60938 16.59L10.0194 18L16.0194 12L10.0194 6Z"
        fill={color}
      />
    </svg>
  )
}

const FilterIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <line x1="2" y1="4.5" x2="22" y2="4.5" stroke="black" />
    <line x1="2" y1="18.5" x2="22" y2="18.5" stroke="black" />
    <line x1="2" y1="11.5" x2="22" y2="11.5" stroke="black" />
    <circle cx="16.5" cy="11.5" r="2" fill="white" stroke="black" />
    <circle cx="6.5" cy="4.5" r="2" fill="white" stroke="black" />
    <circle cx="6.5" cy="18.5" r="2" fill="white" stroke="black" />
  </svg>,
  'FilterIcon',
)

const HeartIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
      fill="#FB196A"
    />
  </svg>,
  'HeartIcon',
)

const PencilIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.94395 11.7905C3.96033 11.6855 4.00972 11.5885 4.08495 11.5135L14.163 1.43546C14.2567 1.34172 14.3839 1.28906 14.5165 1.28906C14.649 1.28906 14.7762 1.34172 14.87 1.43546L18.76 5.32546C18.8534 5.41918 18.9058 5.54612 18.9058 5.67846C18.9058 5.81079 18.8534 5.93773 18.76 6.03146L8.67995 16.1105C8.60481 16.1853 8.5078 16.2344 8.40295 16.2505L3.80795 16.9565C3.73037 16.9684 3.65108 16.9618 3.57649 16.9374C3.50191 16.9129 3.43412 16.8713 3.37862 16.8158C3.32313 16.7603 3.28147 16.6925 3.25703 16.6179C3.23259 16.5433 3.22606 16.464 3.23795 16.3865L3.94295 11.7925L3.94395 11.7905ZM4.90795 12.1045L4.33095 15.8645L8.08995 15.2865L17.698 5.67846L14.517 2.49646L4.90795 12.1045Z"
      fill="#131313"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.4721 8.17355L11.9351 4.64355L12.6421 3.93555L16.1781 7.46555L15.4721 8.17355Z"
      fill="#131313"
    />
  </svg>,
  'PencilIcon',
)

const CalendarIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <path
      d="M14.25 3H12.75V2.25C12.75 2.05109 12.671 1.86032 12.5303 1.71967C12.3897 1.57902 12.1989 1.5 12 1.5C11.8011 1.5 11.6103 1.57902 11.4697 1.71967C11.329 1.86032 11.25 2.05109 11.25 2.25V3H6.75V2.25C6.75 2.05109 6.67098 1.86032 6.53033 1.71967C6.38968 1.57902 6.19891 1.5 6 1.5C5.80109 1.5 5.61032 1.57902 5.46967 1.71967C5.32902 1.86032 5.25 2.05109 5.25 2.25V3H3.75C3.15326 3 2.58097 3.23705 2.15901 3.65901C1.73705 4.08097 1.5 4.65326 1.5 5.25V14.25C1.5 14.8467 1.73705 15.419 2.15901 15.841C2.58097 16.2629 3.15326 16.5 3.75 16.5H14.25C14.8467 16.5 15.419 16.2629 15.841 15.841C16.2629 15.419 16.5 14.8467 16.5 14.25V5.25C16.5 4.65326 16.2629 4.08097 15.841 3.65901C15.419 3.23705 14.8467 3 14.25 3ZM15 14.25C15 14.4489 14.921 14.6397 14.7803 14.7803C14.6397 14.921 14.4489 15 14.25 15H3.75C3.55109 15 3.36032 14.921 3.21967 14.7803C3.07902 14.6397 3 14.4489 3 14.25V9H15V14.25ZM15 7.5H3V5.25C3 5.05109 3.07902 4.86032 3.21967 4.71967C3.36032 4.57902 3.55109 4.5 3.75 4.5H5.25V5.25C5.25 5.44891 5.32902 5.63968 5.46967 5.78033C5.61032 5.92098 5.80109 6 6 6C6.19891 6 6.38968 5.92098 6.53033 5.78033C6.67098 5.63968 6.75 5.44891 6.75 5.25V4.5H11.25V5.25C11.25 5.44891 11.329 5.63968 11.4697 5.78033C11.6103 5.92098 11.8011 6 12 6C12.1989 6 12.3897 5.92098 12.5303 5.78033C12.671 5.63968 12.75 5.44891 12.75 5.25V4.5H14.25C14.4489 4.5 14.6397 4.57902 14.7803 4.71967C14.921 4.86032 15 5.05109 15 5.25V7.5Z"
      fill="#191919"
    />
  </svg>,
  'CalendarIcon',
)

const RadioUnchecked = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M3 12C3 10.8181 3.23279 9.64778 3.68508 8.55585C4.13738 7.46392 4.80031 6.47177 5.63604 5.63604C6.47177 4.80031 7.46392 4.13738 8.55585 3.68508C9.64778 3.23279 10.8181 3 12 3C13.1819 3 14.3522 3.23279 15.4442 3.68508C16.5361 4.13738 17.5282 4.80031 18.364 5.63604C19.1997 6.47177 19.8626 7.46392 20.3149 8.55585C20.7672 9.64778 21 10.8181 21 12C21 14.3869 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.3869 21 12 21C9.61305 21 7.32387 20.0518 5.63604 18.364C3.94821 16.6761 3 14.3869 3 12Z"
      stroke="#707070"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  'RadioUnchecked',
)

const RadioChecked = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8Z"
      fill="#131313"
    />
  </svg>,
  'RadioChecked',
)

const ShowPassword: React.FC<IconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="20"
      height="20"
    >
      <rect width="256" height="256" fill="none" />
      <line
        x1="48"
        y1="40"
        x2="208"
        y2="216"
        fill="none"
        stroke="#B4B4B4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <path
        d="M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6"
        fill="none"
        stroke="#B4B4B4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <path
        d="M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6"
        fill="none"
        stroke="#B4B4B4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <path
        d="M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7"
        fill="none"
        stroke="#B4B4B4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <path
        d="M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5"
        fill="none"
        stroke="#B4B4B4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
    </svg>
  )
}

const HidePassword: React.FC<IconProps> = ({
  size = '21',
  color = '#B4B4B4',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 21 21"
      fill="none"
    >
      <path
        d="M6.211 6.26C4.727 7.173 3.323 8.587 2 10.5C4.537 14.167 7.37 16 10.5 16C11.923 16 13.285 15.62 14.585 14.863M16.173 13.723C17.153 12.88 18.095 11.807 19 10.5C16.463 6.833 13.63 5 10.5 5C9.67 5 8.86 5.13 8.071 5.387M4 4L17 17.071"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const Dot: React.FC<IconProps> = ({size = '4', color = '#D9D9D9'}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 4 4"
      fill="none"
    >
      <circle cx="2" cy="2" r="2" fill={color} />
    </svg>
  )
}

const CustomIcons = {
  CommentIcon,
  CommentIcon2,
  SearchIcon,
  DefaultCheckIcon,
  YellowCheckIcon,
  ArrowLeftIcon,
  HamburgerIcon,
  ImageUploadIcon,
  TitleIcon,
  ImageIcon,
  TagIcon,
  BeforeIcon,
  AfterIcon,
  FilterIcon,
  HeartIcon,
  PencilIcon,
  CalendarIcon,
  RadioUnchecked,
  RadioChecked,
  ShowPassword,
  HidePassword,
  Dot,
  BeforeIconBlack,
  AfterIconBlack,
}

export default CustomIcons
