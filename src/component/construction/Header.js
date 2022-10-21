import { Grid } from "@mui/material";
import ReactiveButton from "reactive-button";
import {FaPaperPlane} from "react-icons/fa";



const Name = {
  fontSize: "3.5vw",
  color: "white",
  margin: 0,
};

const Greating = {
  fontFamily: "Bebas Neue",
  fontSize: "4vw",
  color: "black",
  margin: 0,
};

const Coming_soon = {
  fontSize: "2.5vw",
  fontFamily: "Fredoka One",
  margin: 0,
  color:'#BEBEC3'
};

const btn = {
  margin: '1rem',
}


export default function Hader() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      bgcolor="blue"
      height="100vh"
    >
      <h3 style={Greating}>WELCOME TO</h3>
      <h1 style={Name}>REMARKABLE IT SOLUTIONS</h1>
      <ReactiveButton
      rounded
      style={btn}
      //buttonState={state}
      idleText={
        <span>
          Contact Us <FaPaperPlane />
        </span>
      }
      loadingText="Loading"
      successText="Done"
      color="green"
      //onClick={onClickHandler}
    />
    </Grid>
  );
}
