import { Stack,InputLabel, Typography, Switch } from "@mui/material"
const Booking = () => {
  return (
    <Stack spacing={1}>
      <InputLabel
        sx={{
          fontSize: 13,
          fontWeight: 600,
        }}
      >
        Booking Options
      </InputLabel>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="caption" sx={{ fontSize:13}}>
            Instant Book
        </Typography>
        <Switch defaultChecked/>
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="caption" sx={{ fontSize:13}}>
            Self-CheckIn
        </Typography>
        <Switch/>
      </Stack>
      </Stack>
  );
};

export default Booking