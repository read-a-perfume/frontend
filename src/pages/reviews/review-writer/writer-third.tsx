import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Input,
  TextareaAutosize,
} from '@mui/material'
import styled from '@emotion/styled'

const data = [
  '자연적인',
  '달달한',
  '여름',
  '상큼한',
  '과일',
  '가을',
  '우아한',
  '고급진',
]

const WriterThird = ({
  formValues,
  handleFormDataChange,
  handleMultipleCheckBox,
}: any) => {
  return (
    <FormControl component="fieldset">
      <OneLineReview>
        <Label>한줄평</Label>
        <Input
          sx={{
            width: ' 363px',
            height: '32px',
            borderRadius: 10,
            border: '1px solid #EDEDED',
            boxSizing: 'border-box',
            fontSize: '14px',
            input: {
              paddingLeft: '10px',
            },
            '&::before': {
              display: 'none',
            },
            '&::after': {
              display: 'none',
            },
          }}
          name="shortReview"
          value={formValues.shortReview}
          onChange={handleFormDataChange}
        />
      </OneLineReview>
      <div>
        <Title>이 향수는 어떤 느낌을 주나요?</Title>
        <TextareaAutosize
          aria-label="minimum height"
          name="feeling"
          minRows={3}
          value={formValues.feeling}
          onChange={handleFormDataChange}
          placeholder="이 향수를 사용하면서 느낀 특징과 매력을 설명해주세요. 특유의 향과 향수의 노트들에 대해 느낀 점이나 어떤 면이 인상적이었는지에 대해 언급해주시면 좋습니다."
          style={{width: 411, height: 205, marginBottom: 84, padding: 20}}
        />
      </div>
      <Title>향수와 어울리는 키워드를 선택해주세요. (최대 3개)</Title>
      <Group>
        {data.map(it => (
          <MuIFormControlLabel
            sx={{
              margin: 0,
            }}
            control={
              <Checkbox
                checked={formValues.tags.includes(`${it}`)}
                onChange={handleMultipleCheckBox}
                value={it}
                key={it}
                name={it}
                sx={{
                  '.MuiCheckbox-root': {
                    display: 'none',
                  },
                  '&.Mui-checked + span': {
                    borderColor: '#fe7156 ',
                  },
                }}
              />
            }
            label={it}
          />
        ))}
      </Group>
    </FormControl>
  )
}

export default WriterThird

const OneLineReview = styled.div({
  marginBottom: '13px',
})

const Title = styled.h3({
  fontSize: '14px',
  paddingBottom: '24px',
})

const Group = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
})

const Label = styled.label({
  marginRight: 5,
  fontSize: 14,
})

const MuIFormControlLabel = styled(FormControlLabel)`
  .MuiCheckbox-root {
    display: none;
  }
  .MuiFormControlLabel-label {
    display: inline-flex;
    padding: 5px 16px;
    border-radius: 17px;
    border: 2px solid #dfdfdf;
    background: #fff;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    font-size: 14px;
    color: #a9a9a9;
    margin: 0;
  }
  &.MuiCheckbox-root.Mui-checked + span {
    border-color: #fe7156 !important;
    color: #fe7156;
  }
`
