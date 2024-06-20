/* eslint-disable no-undef */
import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import useResponsive from "../../hooks/useResponsive";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { styled } from "@mui/material/styles";
import LocationSearch from "./LocationSearch";
import {
  DateRangePicker,
  MobileDateRangePicker,
} from "@mui/x-date-pickers-pro";
import { useState } from "react";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro";
import Guestselector from "./Guestselector";

const StyledIconButton = styled(IconButton)(({ theme }) => {
  return {
    background: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  };
});

const shortcutItems = [
  
];
const Input = () => {
  const isMobile = useResponsive("down", "md");

  const [value, setValue] = useState();

  return (
    <Box sx={{ px: { xs: 2, md: 0 } }}>
      <Card sx={{ borderRadius: isMobile ? 2 : 10, py: 2, px: 4 }}>
        <Stack
          direction={isMobile ? "column" : "row"}
          alignItems="center"
          spacing={2}
        >
          <Box>
            <Grid container sx={{ width: isMobile ? "80vw" : 720 }} spacing={2}>
              <Grid item md={4} xs={12}>
                <Stack spacing={{ xs: 1, md: 0 }}>
                  <Typography variant="subtitle2">Destiny</Typography>
                  {/*Location Search*/}
                  <LocationSearch />
                </Stack>
              </Grid>
              <Grid item md={5} xs={12}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  spacing={0.2}
                >
                  {!isMobile && (
                    <Divider orientation="vertical" sx={{ height: 40 }} />
                  )}

                  <Stack spacing={{ xs: 1, md: 0 }}>
                    <Typography variant="subtitle2">Check-in-out</Typography>
                    {isMobile ? (
                      <MobileDateRangePicker
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                    renderInput=
                    {(startProps, endProps) => (
                      <>
                        <TextField {...startProps} label="" />
                        <TextField {...endProps} label="" />
                      </>
                    )}
                    />
                     ) : (
                    <DateRangePicker
                      slots={{
                        field: SingleInputDateRangeField,
                        textField: TextField,
                      }}
                      slotProps={{
                        shortcuts: {
                          items: shortcutItems,
                        },
                        textField: {
                          fullWidth: true,
                          variant: "standard",
                          InputProps: {
                            disableUnderline: true,
                          },
                        },
                      }}
                      sx={{ width: 220 }}
                      disablePast
                      name="allowedRange"
                    />
                    )}
                  </Stack>
                  {!isMobile && (
                    <Divider orientation="vertical" sx={{ height: 40 }} />
                  )}
                </Stack>
              </Grid>
              <Grid item md={3} xs={12}>
                <Stack spacing={{ xs: 1, md: 0 }}>
                  <Typography variant="subtitle2">Guests</Typography>
                  <Guestselector />
                  {/*guest selector*/}
                </Stack>
              </Grid>
            </Grid>
          </Box>
          {isMobile ? (
            <Button
              fullWidth
              variant="contained"
              startIcon={<MagnifyingGlass />}
            >
              Search
            </Button>
          ) : (
            <StyledIconButton>
              <MagnifyingGlass style={{ color: "white" }} />
            </StyledIconButton>
          )}
        </Stack>
      </Card>
    </Box>
  );
};

export default Input;
