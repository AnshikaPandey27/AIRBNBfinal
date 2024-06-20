import { Box, Tab, Tabs } from "@mui/material";
import {
  Park,
  CastleTurret,
  Umbrella,
  Bed,
  SwimmingPool,
} from "@phosphor-icons/react";
import PropTypes from "prop-types";
import Properties from "./Properties";

CardView.propTypes = {
  value: PropTypes.number,
  handleChangeTab: PropTypes.func,
  view: PropTypes.string,
};

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  children: PropTypes.node,
};

export default function CardView(props) {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={props.value}
          onChange={props.handleChangeTab}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
        >
          <Tab label="National Parks" icon={<Park size={20} />} />
          <Tab icon={<CastleTurret size={20} />} label="Castle" />
          <Tab icon={<Umbrella size={20} />} label="Beach" />
          <Tab icon={<Bed size={20} />} label="Rocks" />
          <Tab icon={<SwimmingPool size={20} />} label="Amazing Pool" />
        </Tabs>
      </Box>
      <CustomTabPanel value={props.value} index={0}>
        <Properties view={props.view}/>
      </CustomTabPanel>
    </Box>
  );
}
