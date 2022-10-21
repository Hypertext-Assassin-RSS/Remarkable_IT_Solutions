import "@fontsource/roboto/700.css";
import { Grid, Typography } from "@mui/material";
import "./App.css";
import message from "./resource/img/message.jpg";
import construction from "./resource/img/Construction.jpg";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./component/construction/Header";
import Image from "./component/construction/Image";

function App() {
  const theme = createTheme();

  return (
    <div className="App">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={12} md={6} lg={6} ><Header /></Grid>
        <Grid item xs={12} sm={12}  md={6} lg={6} ><Image /></Grid>
      </Grid>
    </div>
  );
}

export default App;
