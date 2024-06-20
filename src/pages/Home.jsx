import { Box, Container, Grid } from "@mui/material";
import { SearchResults } from "../section/Search";
import Filter from "../section/Search/Filter";
const Home = () => {
  return (
    <Container maxWidth="xl">
      <Box>
        <Grid container>
          <Grid item md={3} xs={12}>
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
