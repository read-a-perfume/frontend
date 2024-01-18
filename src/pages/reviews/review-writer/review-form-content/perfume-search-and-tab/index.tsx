import FormControl from '@mui/material/FormControl'
import PerfumeDurations from './perfume-durations'
import PerfumeSearch from './perfume-search'
import PerfumeDailys from './perfume-dailys'
import PerfumeStrengths from './perfume-strengths'
import PerfumeSeasons from './perfume-seasons'

const PerfumeSearchAndTabs = () => {
  return (
    <>
      <FormControl component="fieldset">
        <PerfumeSearch />
        <PerfumeDailys />
        <PerfumeStrengths />
        <PerfumeDurations />
        <PerfumeSeasons />
      </FormControl>
    </>
  )
}

export default PerfumeSearchAndTabs
