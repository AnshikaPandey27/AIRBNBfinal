import { InputLabel, RadioGroup, Typography,Stack,FormControlLabel,Radio } from "@mui/material"


const Typeofplace = () => {
  return (
    <Stack spacing={1}>
        <InputLabel sx={{
            fontSize:14,
            fontWeight:600,
        }}
        >
            Type Of Place
        </InputLabel>
        <RadioGroup
        row
    aria-labelledby="demo-row-radio-buttons-group-label"
    defaultValue="Any-Type"
    name="row-radio-buttons-group"
  >
    <FormControlLabel value="Any-Type" control={<Radio />} label={
        <Typography variant="subtitle2" sx={{fontSize:13, fontWeight:500}}>
            Any Type
            </Typography>
    }/>
    <FormControlLabel value="Room" control={<Radio />} label={
        <Typography variant="subtitle2" sx={{fontSize:13, fontWeight:500}}>
            Room
            </Typography>
    }/>
    <FormControlLabel value="Entire Home" control={<Radio />} label={
        <Typography variant="subtitle2" sx={{fontSize:13, fontWeight:500}}>
            Entire Home
            </Typography>
    }/>
   
  </RadioGroup>
    </Stack>
  )
}

export default Typeofplace