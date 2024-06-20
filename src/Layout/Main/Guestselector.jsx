import {
  Divider,
  IconButton,
  Popover,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {  MinusCircle, PlusCircle } from "@phosphor-icons/react";
import { useState } from "react";

const Guestselector = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [guests, setGuests] = useState({
    adults: 2,
    Children: 1,
    infants: 1,
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleGuestsChange = (type, value) => {
    setGuests((prevGuests) => ({
      ...prevGuests,
      [type]: Math.max(0, prevGuests[type] + value), //ensure that the minimum value is zero
    }));
  };
  const displayGuests = `${guests.adults} Adults, ${guests.Children} Children,${guests.infants} Infants`;
  return (
    <>
      <TextField
        onClick={handleClick}
        fullWidth
        value={displayGuests}
        placeholder="Enter Guest Details"
        variant="standard"
        InputProps={{
          disableUnderline: true,
          readOnly: true,
        }}
      />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Stack spacing={2} sx={{ px: 4, py: 2 }}>
          <Stack spacing={2}>
            <Stack
              sx={{ width: 300 }}
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack spacing={0.5}>
                <Typography sx={{ fontWeight: 600, color: "text.secondary" }}>
                  Adults
                </Typography>
                <Typography variant="caption ">Ages 13 or Above</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton
                  color="primary"
                  onClick={() => handleGuestsChange("adults", -1)}
                  disabled={guests.adults === 0}
                >
                  <MinusCircle />
                </IconButton>
                <TextField
                  disabled
                  value={guests.adults}
                  type="number"
                  style={{ width: "40px", textAlign: "center" }}
                />
                <IconButton
                  color="primary"
                  onClick={() => handleGuestsChange("adults", 1)}
                >
                  <PlusCircle />
                </IconButton>
              </Stack>
            </Stack>
            <Divider />
            <Stack
              sx={{ width: 300 }}
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack spacing={0.5}>
                <Typography sx={{ fontWeight: 600, color: "text.secondary" }}>
                  Children
                </Typography>
                <Typography variant="caption ">Ages 2 - 12</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton
                  color="primary"
                  onClick={() => handleGuestsChange("Children", -1)}
                  disabled={guests.Children === 0}
                >
                  <MinusCircle />
                </IconButton>
                <TextField
                  disabled
                  value={guests.Children}
                  type="number"
                  style={{ width: "40px", textAlign: "center" }}
                />
                <IconButton
                  color="primary"
                  onClick={() => handleGuestsChange("Children", 1)}
                >
                  <PlusCircle />
                </IconButton>
              </Stack>
            </Stack>
            <Divider />
            <Stack
              sx={{ width: 300 }}
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack spacing={0.5}>
                <Typography sx={{ fontWeight: 600, color: "text.secondary" }}>
                  Infants
                </Typography>
                <Typography variant="caption ">Under 2</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton
                  color="primary"
                  onClick={() => handleGuestsChange("infants", -1)}
                  disabled={guests.infants === 0}
                >
                  <MinusCircle />
                </IconButton>
                <TextField
                  disabled
                  value={guests.infants}
                  type="number"
                  style={{ width: "40px", textAlign: "center" }}
                />
                <IconButton
                  color="primary"
                  onClick={() => handleGuestsChange("infants", 1)}
                >
                  <PlusCircle />
                </IconButton>
              </Stack>
            </Stack>
            <Divider />
          </Stack>
          {/*Display total guests*/}
          <Typography variant="caption" sx={{ fontWeight: 600 }}>
            {displayGuests}
          </Typography>
        </Stack>
      </Popover>
    </>
  );
};

export default Guestselector;
