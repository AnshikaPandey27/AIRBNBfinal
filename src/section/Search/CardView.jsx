import { Box, Tab, Tabs } from "@mui/material";//Box (a layout component), Tab (a tab item), and Tabs (a container for multiple Tab items).
import {
  Park,
  CastleTurret,
  Umbrella,
  Bed,
  SwimmingPool,
} from "@phosphor-icons/react";//import icons
import PropTypes from "prop-types";//for type-checking the props passed to the components.
import Properties from "./Properties";

CardView.propTypes = {
  value: PropTypes.number,// a number representing the current selected tab index.
  handleChangeTab: PropTypes.func,//a function to handle tab changes.
  view: PropTypes.string,// a string representing the current view type.
};

//functional component that renders its children only if value matches index. 
function CustomTabPanel(props) {
  {/*children: The content to be rendered inside the tab panel.
    value: The currently selected tab index.
    index: The index of this particular CustomTabPanel.
    ...other: Any other props that are passed to the component. */}
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
          value={props.value}//currently selected tab
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
