import { Box, Stack } from "@mui/material"
import { Outlet } from "react-router-dom";
import Header from "./Header";


const MainLayout= () => {
  return (
    <Stack spacing={2}>
       {/*headrer*/}
       <Header/>
       <Box sx={{overflow:"scroll", height:"Calc(100vh-150px)"}}>
        {/* */}
        <Outlet/>
        </Box> 
    </Stack>
  );
};

export default MainLayout