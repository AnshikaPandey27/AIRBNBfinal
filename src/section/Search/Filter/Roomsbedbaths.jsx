import {
  Stack,
  InputLabel,
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { useState } from "react";

const Roomsbedbaths = () => {
  const [bedroom, setBedroom] = useState("any");
  const handleChangeBedroom = (event, newBedRoom) => {
    if (newBedRoom !== null) {
      setBedroom(newBedRoom);
    }
  }
  
    const [bath, setBath] = useState("any");
    const handleChangeBath= (event, newBath) => {
      if (newBath !== null) {
        setBath(newBath);
      }
    }
   
        const [bed, setBed] = useState("any");
        const handleChangeBed = (event, newBed) => {
          if (newBed !== null) {
            setBed(newBed);
          }
        }

  return (
    <Stack spacing={1}>
      <InputLabel
        sx={{
          fontSize: 14,
          fontWeight: 600,
        }}
      >
        Rooms, Beds and Baths
      </InputLabel>
      <Box>
        <Stack>
          <Typography variant="caption" sx={{ fontSize: 13 }}>
            Bedroom
          </Typography>
          <ToggleButtonGroup
            fullWidth
            color="primary"
            size="small"
            value={bedroom}
            onChange={handleChangeBedroom}
          >
            <ToggleButton value="Any">Any</ToggleButton>
            <ToggleButton value="1">1</ToggleButton>
            <ToggleButton value="2">2</ToggleButton>
            <ToggleButton value="3">3</ToggleButton>
            <ToggleButton value="4">4</ToggleButton>
            <ToggleButton value="5">5</ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Box>
      <Box>
        <Stack>
          <Typography variant="caption" sx={{ fontSize: 13 }}>
            Baths
          </Typography>
          <ToggleButtonGroup
            fullWidth
            color="primary"
            size="small"
            value={bath}
            onChange={handleChangeBath}
          >
            <ToggleButton value="Any">Any</ToggleButton>
            <ToggleButton value="1">1</ToggleButton>
            <ToggleButton value="2">2</ToggleButton>
            <ToggleButton value="3">3</ToggleButton>
            <ToggleButton value="4">4</ToggleButton>
            <ToggleButton value="5">5</ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Box>
      <Box>
        <Stack>
          <Typography variant="caption" sx={{ fontSize: 13 }}>
            Bed
          </Typography>
          <ToggleButtonGroup
            fullWidth
            color="primary"
            size="small"
            value={bed}
            onChange={handleChangeBed}
          >
            <ToggleButton value="Any">Any</ToggleButton>
            <ToggleButton value="1">1</ToggleButton>
            <ToggleButton value="2">2</ToggleButton>
            <ToggleButton value="3">3</ToggleButton>
            <ToggleButton value="4">4</ToggleButton>
            <ToggleButton value="5">5</ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Roomsbedbaths;
