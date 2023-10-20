import FlexBox from '@layouts/flex-box'
import styled from '@emotion/styled'
import {Button, Switch, Typography} from '@mui/material'
import {Link} from 'react-router-dom'
import CustomIcons from '@assets/icons/custom-Icons'
import Step from '@assets/constants/step'
import {theme} from '@theme/index'

// Banner

export const Banner = styled.div({
  width: '100%',
  height: '470px',
  background: '#F1F1F5',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const BannerImage = styled.img({
  width: '100%',
  height: '470px',
  objectFit: 'fill',
  position: 'absolute',
  zIndex: 0,
  imageRendering: '-webkit-optimize-contrast',
  backfaceVisibility: 'hidden',
})

export const AddImageButton = styled(Button)(
  ({imageurl}: {imageurl: string}) => ({
    backgroundColor: imageurl ? 'white' : '#202020',
    color: imageurl ? '#191919' : 'white',
    fontSize: theme.typography.body3.fontSize,
    width: '137px',
    height: '34px',
    borderRadius: '10px',
    zIndex: 1,
    position: 'absolute',
    '&:hover': {
      background: '#202020',
    },
  }),
)

export const Blur = styled.div({
  width: '100%',
  height: '470px',
  background:
    'linearGradient(0deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.45) 100%)',
  zIndex: 0,
  position: 'absolute',
})

export const AddBannerSpan = styled(Typography)(
  ({imageurl}: {imageurl: string}) => ({
    fontSize: theme.typography.body2.fontSize,
    fontWeight: 600,
    color: imageurl ? 'white' : '#191919',
    marginBottom: '80px',
    zIndex: 1,
    position: 'absolute',
  }),
)

// Brand Information

export const BrandInfoBlock = styled.div({
  width: '100%',
  paddingLeft: '160px',
  display: 'flex',
})

export const BrandInfo = styled.div({
  marginTop: '31px',
  marginLeft: '30px',
  display: 'flex',
  flexDirection: 'column',
})

export const BrandProfile = styled.img({
  width: '104px',
  height: '104px',
  borderRadius: '194.5px',
  background: 'white',
  marginTop: '-17px',
  zIndex: 1,
})

export const BrandTitle = styled(Typography)({
  fontSize: theme.typography.h3.fontSize,
  color: '#191919',
  textTransform: 'uppercase',
})

export const BrandSubTitle = styled(Typography)({
  fontSize: theme.typography.body2.fontSize,
  color: '#606060',
  marginTop: '6px',
})

export const BrandURL = styled(Link)({
  fontSize: theme.typography.body3.fontSize,
  color: '#FE7156',
  textDecoration: 'none',
  marginBottom: '16px',
})

export const BrandSettings = styled(Button)({
  width: '92px',
  height: '33px',
  border: '1px solid #DBDBDB',
  borderRadius: '10px',
  background: '#FFF',
  fontSize: theme.typography.body3.fontSize,
  color: '#191919',
  fontWeight: 600,
})

export const Follows = styled(Typography)(({color}: {color?: string}) => ({
  fontSize: theme.typography.body2.fontSize,
  color: color === 'red' ? '#FE7156' : '#A9A9A9',
  fontWeight: color === 'red' ? 600 : 400,
  marginLeft: color === 'red' ? '17px' : '2px',
}))

export const BrandContents = styled.div({
  marginTop: '80px',
  width: '100%',
  padding: '0px 160px',
  display: 'flex',
})

// Tabs
export const Tabs = styled.div({
  width: '100%',
  hegith: '64px',
  borderBottom: '1px solid #DCDCDC',
  display: 'flex',
  justifyContent: 'space-between',
})

export const Tab = styled.div(({current}: {current: boolean}) => ({
  fontFamily: 'AritaBuri !important',
  fontSize: theme.typography.h3.fontSize,
  color: '#191919',
  fontWeight: 600,
  borderBottom: current ? '1px solid black' : 'none',
  textAlign: 'center',
  width: '172px',
  padding: '20px 0px',
  cursor: 'pointer',
  position: 'relative',
  marginBottom: '-1px',
}))

export const AddProductButton = styled(Button)({
  width: '101px',
  height: '34px',
  borderRadius: '10px',
  background: '#FE7156',
  fontSize: theme.typography.body3.fontSize,
  color: 'white',
  '&:hover': {
    background: '#FE7156',
  },
})

export const WriteMagazine = styled(Button)({
  width: '137px',
  height: '34px',
  borderRadius: '10px',
  background: '#202020',
  fontSize: theme.typography.body3.fontSize,
  color: 'white',
  '&:hover': {
    background: '#202020',
  },
})

// Products & Magazine

export const CardBox = styled.div({
  flexWrap: 'wrap',
  marginTop: '44px',
  padding: '0px 160px',
  display: 'flex',
  justifyContent: 'space-around',
  rowGap: '60px',
  marginBottom: '60px',
})

export const Card = styled.div(
  ({width, height}: {width: string; height: string}) => ({
    height: height,
    width: width,
    borderRadius: '16px',
    border: '1px solid #EDEDED',
  }),
)

export const CardImage = styled.img(({height}: {height: string}) => ({
  height: height,
  width: '100%',
  objectFit: 'cover',
  overflow: 'hidden',
  borderRadius: '16px 16px 0px 0px',
}))

export const MagazineInfo = styled.div({
  width: '100%',
  padding: '0px 24px',
})

export const EditorProfile = styled.img({
  width: '40px',
  height: '40px',
  borderRadius: '40px',
  objectFit: 'cover',
})

export const CardTitle = styled(Typography)({
  fontFamily: 'AritaBuri !important',
  fontSize: theme.typography.h4.fontSize,
  color: '#131313',
  fontWeight: 500,
  marginBottom: '16px',
})

export const CardSpan = styled(Typography)({
  fontSize: theme.typography.body2.fontSize,
  color: '#707070',
  marginBottom: '8px',
})

export const HashTags = styled(Typography)({
  fontSize: theme.typography.body3.fontSize,
  color: '#FE7156',
})

export const BrandName = styled(Typography)({
  fontSize: theme.typography.body3.fontSize,
  color: '#131313',
  marginBottom: '8px',
})

export const ProductName = styled(Typography)({
  fontSize: theme.typography.body1.fontSize,
  color: '#131313',
  fontWeight: 600,
})

export const InfoBox = styled.div({
  width: '375px',
  height: '46px',
  borderRadius: '10px',
  background: '#F1F1F1',
  display: 'flex',
  alignItems: 'center',
})

export const BoxContent = styled.div(({left}: {left: boolean}) => ({
  width: '188px',
  borderRight: left ? '1px solid #BDBDBD' : 'none',
  paddingLeft: left ? '32px' : '28px',
  display: 'flex',
}))

export const Categories = styled(Typography)(
  ({color = '#949494'}: {color?: string}) => ({
    color: color,
    fontSize: theme.typography.body3.fontSize,
    fontWeight: 500,
  }),
)

export const Types = styled(Typography)({
  color: '#333',
  fontSize: theme.typography.body3.fontSize,
  fontWeight: 500,
  marginLeft: '16px',
})

export const Divider = styled.hr({
  width: '190px',
  height: '2px',
  background: '#DBDBDB',
  border: 'none',
})

export const DetailedInfoBox = styled(FlexBox)({
  width: '375px',
  height: '113px',
  borderRadius: '10px',
  background: '#F1F1F1',
  padding: '13px 32px',
})

export const Dot = styled.div(({marginLeft}: {marginLeft: Step}) => ({
  width: '10px',
  height: '10px',
  background: '#202020',
  position: 'absolute',
  zIndex: 0,
  borderRadius: '100%',
  marginTop: '-15px',
  marginLeft: marginLeft,
}))

export const PerfumeHamburger = styled(CustomIcons.HamburgerIcon)({
  position: 'absolute',
  marginTop: '24px',
  marginRight: '24px',
  cursor: 'pointer',
})

// BrandSettings

export const Section = styled.div({
  width: '100%',
  display: 'flex',
  background: '#FAFAFA',
  paddingBottom: '100px',
})

export const SettingsNav = styled.div({
  width: '568px',
  height: '100%',
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: 'column',
  paddingRight: '127px',
  marginTop: '88px',
})

export const SettingsTitle = styled(Typography)({
  fontSize: theme.typography.h1.fontSize,
  fontWeight: 700,
  marginBottom: '40px',
})

export const SettingsNavItems = styled(Typography)(
  ({clicked}: {clicked: boolean}) => ({
    fontSize: theme.typography.body1.fontSize,
    paddingLeft: '11px',
    cursor: 'pointer',
    lineHeight: '20px',
    fontWeight: clicked ? 600 : 400,
    color: clicked ? '#FE7156' : '#191919',
    borderLeft: clicked ? '2px solid #FE7156' : '2px solid white',
    textAlign: 'left',
  }),
)

export const FormBlock = styled.div({
  marginTop: '170px',
})

export const Profile = styled.div({
  width: '104px',
  height: '104px',
  borderRadius: '194.5px',
  border: '1px solid black',
  background: 'white',
})

export const EditProfileButton = styled(Button)({
  border: '1px solid #DBDBDB',
  borderRadius: '10px',
  background: 'white',
  width: '88px',
  height: '33px',
  color: '#191919',
  fontSize: theme.typography.body3.fontSize,
  fontWeight: 600,
})

export const CategoryTitle = styled(Typography)(
  ({marginTop}: {marginTop: string}) => ({
    fontSize: theme.typography.body1.fontSize,
    fontWeight: 600,
    color: '#191919',
    marginBottom: '25px',
    marginTop: marginTop,
  }),
)

export const Label = styled(Typography)({
  fontSize: theme.typography.body3.fontSize,
  color: '#303030',
  fontWeight: 500,
  marginBottom: '6px',
})

export const Input = styled.input(({full}: {full?: boolean}) => ({
  width: full ? '719px' : '344px',
  height: '50px',
  paddingLeft: '15px',
  borderRadius: '11px',
  background: 'white',
  fontSize: theme.typography.body3.fontSize,
  fontWeight: 500,
  border: '1px solid #EDEDED',
  outline: '0 !important',
  '&:focus': {
    border: '1px solid #FF5838 !important',
  },
}))

export const AlertSpan = styled(Typography)({
  color: '#303030',
  fontSize: theme.typography.body3.fontSize,
  fontWeight: 500,
})

export const BannerBlur = styled.div(
  ({opacity = 0.45}: {opacity?: number}) => ({
    background:
      'linear-gradient(0deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.45) 100%), url(<path-to-image>), lightgray 0px -12.524px / 100% 172.34% no-repeat',
    opacity: opacity,
    position: 'absolute',
    width: '100%',
    height: '470px',
    zIndex: 1,
  }),
)

export const Styledswitch = styled(Switch)({
  width: 65,
  height: 26,
  padding: 0,
  display: 'flex',
  marginLeft: '15px',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 24,
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    color: '#FE7156',
    '&.Mui-checked': {
      transform: 'translateX(40px)',
      color: '#D9D9D9',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: 'white',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 24,
    height: 24,
    marginTop: '-1.5px',
    marginLeft: '-1.5px',
    borderRadius: '100%',
    transition: theme.transitions.create(['width'], {
      duration: 100,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: '12px',
    opacity: 1,
    backgroundColor: 'white',
    border: '1px solid #DBDBDB',
  },
})
