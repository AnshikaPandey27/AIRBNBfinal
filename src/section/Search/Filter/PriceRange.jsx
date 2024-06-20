import { InputLabel, Slider, Stack, TextField } from "@mui/material";
import { useState } from "react";

const PriceRange = () => {
  const [value, setValue] = useState([20, 75]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={1}>
      <InputLabel
        sx={{
          fontSize: 13,
          fontWeight: 600,
        }}
      >
        Price Range
      </InputLabel>
      <Slider
        valueLabelDisplay="auto"
        value={value}
        onChange={handleChange}
      ></Slider>
      <Stack direction="row" alignItems="center" spacing={2}>
        <TextField
          size="small"
          label="minimum"
          type="number"
          value={value[0]}
          onChange={(e) => {
            setValue((prev) => {
              return [e.target.value, prev[1]];
            });
          }}
        />
        <TextField
          size="small"
          label="maximum"
          type="number"
          value={value[1]}
          onChange={(e) => {
            setValue(() => {
              return [e.target.value];
            });
          }}
        />
      </Stack>
    </Stack>
  );
};

export default PriceRange;
