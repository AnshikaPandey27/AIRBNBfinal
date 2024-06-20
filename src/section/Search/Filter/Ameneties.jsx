import {
    Stack,
    InputLabel,
    Box,
    Grid,
    Typography,
    Checkbox,
  } from "@mui/material";

  
  const Ameneties = () => {
    return (
      <Stack spacing={1}>
        <InputLabel
          sx={{
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          Ameneties
        </InputLabel>
        <Box>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Stack spacing={1} direction="row" alignItems="center">
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: 13,
                    }}
                  >
                    Wifi
                  </Typography>
                </Stack>
              <Checkbox size="small"></Checkbox>
              </Stack>
            </Grid>
            <Grid item md={6}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Stack spacing={1} direction="row" alignItems="center">
        
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: 13,
                    }}
                  >
                    Kitchen
                  </Typography>
                </Stack>
              <Checkbox size="small"></Checkbox>
              </Stack>
            </Grid>
            <Grid item md={6}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Stack spacing={1} direction="row" alignItems="center">
            
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: 13,
                    }}
                  >
                   Parking
                  </Typography>
                </Stack>
              <Checkbox size="small"></Checkbox>
              </Stack>
            </Grid>
            <Grid item md={6}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Stack spacing={1} direction="row" alignItems="center">
                
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: 13,
                    }}
                  >
                    Playground
                  </Typography>
                </Stack>
             
              <Checkbox size="small"></Checkbox>
              </Stack>
            </Grid>
            <Grid item md={6}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Stack spacing={1} direction="row" alignItems="center">
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: 13,
                    }}
                  >
                    Swimming Pool
                  </Typography>
                </Stack>
              <Checkbox size="small"></Checkbox>
              </Stack>
            </Grid>
            <Grid item md={6}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Stack spacing={1} direction="row" alignItems="center">
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: 13,
                    }}
                  >
                    Gym
                  </Typography>
                </Stack>
              <Checkbox size="small"></Checkbox>
              </Stack>
            </Grid>
            <Grid item md={6}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Stack spacing={1} direction="row" alignItems="center">
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: 13,
                    }}
                  >
                    Dryer
                  </Typography>
                </Stack>
              <Checkbox size="small"></Checkbox>
              </Stack>
            </Grid>
            <Grid item md={6}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Stack spacing={1} direction="row" alignItems="center">
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: 13,
                    }}
                  >
                    Washer
                  </Typography>
                </Stack>
              <Checkbox size="small"></Checkbox>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    );
  };
  
  export default Ameneties;
  