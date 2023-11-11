import {Box, Checkbox, Typography, styled} from '@mui/material'
import {theme} from '../../theme'

type Props = {
  label: string
  name?: string
  checked: boolean
  required?: boolean
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => void

  subText?: string
}

const CheckBoxContainer = styled(Box)(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  fontSize: theme.typography.body3.fontSize,
  marginRight: 8,
}))

export default function RadioTerm(props: Props) {
  const {checked, name, label, subText, required, onChange} = props
  return (
    <li>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <CheckBoxContainer>
            <Checkbox
              id={name}
              checked={checked}
              name={name}
              onChange={onChange}
            />
            <label
              htmlFor={name}
              style={{
                fontSize: theme.typography.body3.fontSize,
                cursor: 'pointer',
              }}
            >
              {label}
            </label>
          </CheckBoxContainer>
          {subText && (
            <Typography variant="body5" color={theme.palette.grey[400]}>
              {subText}
            </Typography>
          )}
          {required ? (
            <Typography variant="body5" color={theme.palette.primary.main}>
              (*필수)
            </Typography>
          ) : (
            !subText && (
              <Typography variant="body5" color={theme.palette.grey[500]}>
                (선택)
              </Typography>
            )
          )}
        </Box>
        {/*       
      <ButtonBase>
        <KeyboardArrowRightIcon style={{color: theme.palette.grey[300]}} />
      </ButtonBase> */}
      </Box>
    </li>
  )
}
