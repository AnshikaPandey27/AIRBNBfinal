import { Box, Container, Grid } from "@mui/material";//use of material ui for responsiveness
import { SearchResults } from "../section/Search";//search component
import Filter from "../section/Search/Filter";//filter component
const Home = () => {//functional component
  return (//returns a container
    <Container maxWidth="xl">{/*centered content for clear and organised screen (extra large)*/}
      <Box>
        <Grid container>{/*container denotes parent and item denotes children*/}
          <Grid item md={3} xs={12}>{/*md for medium and large and xs for extra small (mobile) no. of columns*/}
            {/*Filter*/}
            <Filter />
          </Grid>
          <Grid item md={9} xs={12}>
            {/* Search Results*/}
            <SearchResults />
            </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
