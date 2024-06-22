import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import useResponsive from "../../hooks/useResponsive";// determine if the view is desktop or not
import CardView from "./CardView";//display in card format
//The Grid system is used to layout the components.
//Typography is used to display the text with proper styling.
//Stack is used for vertical spacing, and Box is used for wrapping content, Chip is small badge component

const Result = () => {
  const {view} = useState("card");
  const isDesktop = useResponsive("up", "md");

  const [value, setValue] = useState(0);

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };
{/*Stack component uses flex with inline styling and padding with respect to x and y axis */}
//pixels  x8
  return (
    <Stack sx={{ px: 3, py: 2 }} spacing={2}>
      <Box>
        <Grid container>
          <Grid item md={6} xs={12}>
            <Typography
              variant="body2"
              textAlign={{ xs: "center", md: "start" }}
              sx={{ fontWeight: 600 }}
            >
              Found 100 more results based on your search
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent={isDesktop ? "flex-end" : "center"}
            md={6}
            xs={12}
          >
              <Chip
                sx={{ p: 1 }}
                color="primary"
                label={<Typography variant="subtitle2">Airbnb your home</Typography>}
              />
          </Grid>
        </Grid>
      </Box>
        <Box sx={{ width: "100%" }}>
          
            <Grid item md={6} xs={12}>
              {/* card view*/}
              {/*Card view component is placed below */}
            </Grid>
        </Box>
      <CardView
                view={view}
                value={value}
                handleChangeTab={handleChangeTab}
              />
    </Stack>
  );
};

export default Result;
