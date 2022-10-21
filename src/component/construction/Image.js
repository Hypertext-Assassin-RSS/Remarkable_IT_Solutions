import { Grid } from "@mui/material";
import construction from "../../resource/img/Construction.jpg";


const img_container = {
  width: "100%",
};

export default function Image() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Grid item>
        <img src={construction} style={img_container}/>
      </Grid>
    </Grid>
  );
}
