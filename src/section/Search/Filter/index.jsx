import { Box, Card, Button, Stack,Typography, Divider } from "@mui/material";
import Typeofplace from "./Typeofplace";
import PriceRange from "./PriceRange";
import Roomsbedbaths from "./Roomsbedbaths";
import PropertyType from "./PropertyType";
import Ameneties from "./Ameneties";
import Booking from "./Booking";

//used modular programming

const Filter = () => {
  return (
    <Box
      sx={{
        py: 4,
        pl: 1,
      }}
    >
      <Card sx={{width:1 ,pb:3}}>
        <Box
          sx={{
            mb: 2,
            py: 2,
            px: 3,
            //set according to theme color
            bgcolor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[900],
          }}
        >
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Typography variant="subtitle1">Filters</Typography>
                <Button size="small">Clear All Filters</Button>

            </Stack>
        </Box>
        <Stack spacing={2} sx={{px:3}}>
          {/*Type of place*/}
          <Typeofplace/>
          <Divider/>
          {/*Pricerange filter*/}
          <PriceRange/>
          <Divider/>
          {/*No of rooms , baths and beds*/}
          <Roomsbedbaths/>
          <Divider/>
          {/*property type */}
          <PropertyType/>
          <Divider/>
           {/*Ameneties */}
           <Ameneties/>
           <Divider/>
           {/*Booking types*/}
           <Booking/>
        </Stack>
      </Card>
    </Box>
  );
};

export default Filter;
