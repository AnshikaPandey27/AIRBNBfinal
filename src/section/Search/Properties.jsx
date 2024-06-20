/* eslint-disable react/prop-types */
import {
  Box,
  CardMedia,
  Grid,
  Card,
  Chip,
  IconButton,
  CardContent,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import { Heart, MapPin, Star ,Bed, Bathtub} from "@phosphor-icons/react";
import { alpha, useTheme } from "@mui/material/styles";

const images = [
  "https://t4.ftcdn.net/jpg/03/70/64/43/360_F_370644357_MDF4UXLAXTyyi2OyuK66tWW9cA2f8svL.jpg",
  "https://media.istockphoto.com/id/1424381581/photo/large-villa-with-two-floors-and-garden-in-ed.jpg?s=612x612&w=0&k=20&c=a_jIm_vR31sYxRlADFKiqOiti8I3XLWau1581GRtnNU=",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3BUFxwC6qCJxawdYY0Oidnx4D8jvCSlc3HozJEj5TmWWVzgoZsr8bF1QQ8Pi4_4wpu-8&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQISupu8zTICPmBKO1URYzMlzcO-G52dcrIJ62BZR5QnROaVHJ5De2xTcqVNUBQFBklLto&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT4Ami_b2QoMxGNGBRPw1fz8B_oy2nSXns6HIHRiF93F7Ie1L74o20zNH8lkmjPh-0RBM&usqp=CAU",
  "https://media.istockphoto.com/id/506903162/photo/luxurious-villa-with-pool.jpg?s=612x612&w=0&k=20&c=Ek2P0DQ9nHQero4m9mdDyCVMVq3TLnXigxNPcZbgX2E=",
  "https://luxurystays.in/villas/riverhouse/_04A6969.jpg",
  "https://blog.saffronstays.com/wp-content/uploads/2022/01/Eden-1-min-scaled.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Villa_Medici_a_Fiesole_1.jpg/640px-Villa_Medici_a_Fiesole_1.jpg"
];
const Properties = ({view}) => {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={2}>
        {[...Array(9)].map((elm, index) =>(
             <Grid xs={12} md={6} item key={index}>
            <Card>
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  sx={{ height: 320 }}
                  title="Villa"
                  image={images[index]}
                />
                <Chip
                  sx={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    color: theme.palette.common.white,
                    bgcolor: alpha(theme.palette.common.black, 0.4),
                  }}
                  icon={
                    <Star
                      style={{
                        color: theme.palette.warning.dark,
                      }}
                      weight="fill"
                    />
                  }
                  label={4.5}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                  }}
                >
                  <Heart
                    style={{
                      color: theme.palette.error.main,
                    }}
                  />
                </IconButton>
              </Box>
              <CardContent>
                <Stack spacing={1}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 600,
                        fontSize: 16,
                        color: "text.secondary",
                      }}
                    >
                      Place to Stay
                    </Typography>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                    <Typography variant="subtitle1" sx={{
                        fontWeight:500, fontSize:18, color: "text.secondary",
                        textDecoration:"line-through"
                    }}>
                        Rs.800
                    </Typography>
                    <Stack direction="row" alignItems="center">
                    <Typography variant="subtitle2" sx={{
                        fontSize:18, color:"text.secondary"
                    }}>
                        Rs.670
                    </Typography>
                    <Typography variant="caption">
                        /Night
                    </Typography>
                    </Stack>
                    <Divider orientation="vertical" sx={{
                        height:20}}/>
                    <Typography variant="subtitle1">
                        Rs.100 Total
                    </Typography>  
                    </Stack>
                  </Stack>
                  <Stack spacing={1} direction="row" alignItems="center">
                        <MapPin weight="bold"/>
                        <Typography variant="subtitle2">
                            Kolkata, India
                        </Typography>
                  </Stack>
                  <Divider/>
                  <Stack direction="row" alignItems="center" spacing={2}>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Bed size={20} weight="bold" style={{
                                color:theme.palette.grey[600],}}/>
                            <Typography variant="subtitle2" sx={{color:"text.secondary"}}>
                            6 Beds
                            </Typography>
                        </Stack>
                       
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Divider orientation="vertical" sx={{height:15}}/>
                            <Bathtub size={20} weight="bold" style={{
                                color:theme.palette.grey[600],}}/>
                            <Typography variant="subtitle2" sx={{color:"text.secondary"}}>
                            3 BathTubs
                            </Typography>
                        </Stack>

                        <Stack direction="row" spacing={1} alignItems="center">
                            <Divider orientation="vertical" sx={{height:15}}/>
                            <Bed size={20} weight="bold" style={{
                                color:theme.palette.grey[600],}}/>
                            <Typography variant="subtitle2" sx={{color:"text.secondary"}}>
                            3 BedRooms
                            </Typography>
                        </Stack>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
        </Grid>
        ))}
        </Grid>
       </Box>
  );
};

export default Properties;
