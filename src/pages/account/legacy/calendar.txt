import {InputProps} from './index.js'
import './calendar.styles.css'

// const months = [
//   '01',
//   '02',
//   '03',
//   '04',
//   '05',
//   '06',
//   '07',
//   '08',
//   '09',
//   '10',
//   '11',
//   '12',
// ]

// const CalendarTitle = styled(Typography)({
//   fontSize: 18,
//   fontWeight: '700',
//   color: 'black',
// })

// const MonthChangeBtn = styled(Button)({
//   background: 'transparent',
// })

// const CustomDateInput = styled.input({
//   width: 240,
//   height: 38,
//   borderRadius: 10,
//   border: '1px solid #EDEDED',
//   background: 'white',
//   padding: '8px 20px',
//   fontSize: 14,
//   fontWeight: '500',
//   letterSpacing: 0.28,
//   outline: 'none',
//   cursor: 'pointer',
// })

interface CalendarProps {
  inputs: InputProps
  setInputs: React.Dispatch<React.SetStateAction<InputProps>>
}

const Calendar: React.FC<CalendarProps> = () => {
  // const [date, setDate] = useState<Date>(new Date())
  // const years = new Array(50)
  //   .fill(0)
  //   .map((_, i) => i + (new Date().getFullYear() - 50 + 1))

  return (
    // <ReactDatePicker
    //   formatWeekDay={nameOfDay => nameOfDay.slice(0, 1)}
    //   customInput={<CustomDateInput />}
    //   onSelect={date =>
    //     setInputs({...inputs, birth: date.toISOString().split('T')[0]})
    //   }
    //   shouldCloseOnSelect={false}
    //   renderCustomHeader={({
    //     date,
    //     changeYear,
    //     changeMonth,
    //     decreaseMonth,
    //     increaseMonth,
    //     prevMonthButtonDisabled,
    //     nextMonthButtonDisabled,
    //   }) => (
    //     <div style={{background: 'white'}}>
    //       <FlexBox justifyContent="space-between" alignItems="center">
    //         {/* 이전 월로 이동하는 버튼 */}
    //         <MonthChangeBtn
    //           onClick={decreaseMonth}
    //           disabled={prevMonthButtonDisabled}
    //         >
    //           <CustomIcons.BeforeIconBlack />
    //         </MonthChangeBtn>
    //         {/* 현재 날짜 */}
    //         <FlexBox>
    //           <CalendarTitle>
    //             {Number(date.toISOString().split('T')[0].split('-')[1])}월{' '}
    //           </CalendarTitle>
    //           <CalendarTitle>
    //             &nbsp;{date.toISOString().split('T')[0].split('-')[0]}
    //           </CalendarTitle>
    //         </FlexBox>
    //         {/* 다음 월로 이동하는 버튼 */}
    //         <MonthChangeBtn
    //           onClick={increaseMonth}
    //           disabled={nextMonthButtonDisabled}
    //         >
    //           <CustomIcons.AfterIconBlack />
    //         </MonthChangeBtn>
    //       </FlexBox>
    //       <FlexBox
    //         justifyContent="center"
    //         gap="10"
    //         style={{height: 20, marginBottom: 10}}
    //       >
    //         <div className="custom-react-datepicker__select-item">
    //           <select
    //             value={months[getMonth(date)]}
    //             onChange={({target: {value}}) =>
    //               changeMonth(months.indexOf(value))
    //             }
    //           >
    //             {months.map(option => (
    //               <option key={option} value={option}>
    //                 {option}
    //               </option>
    //             ))}
    //           </select>
    //           <span>월</span>
    //         </div>
    //         <div className="custom-react-datepicker__select-item">
    //           <select
    //             value={getYear(date)}
    //             onChange={({target: {value}}) => changeYear(Number(value))}
    //           >
    //             {years.map(option => (
    //               <option key={option} value={option}>
    //                 {option}
    //               </option>
    //             ))}
    //           </select>
    //           <span>년</span>
    //         </div>
    //       </FlexBox>
    //     </div>
    //   )}
    //   showPopperArrow={false}
    //   locale={'ko'}
    //   dateFormat="yyyy.MM.dd"
    //   selected={new Date(date)}
    //   onChange={date => {
    //     if (date) {
    //       setDate(date)
    //     }
    //   }}
    // />

    null
  )
}

export default Calendar
