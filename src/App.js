import '@fontsource/roboto/700.css';
import { Typography } from '@mui/material';
import './App.css';
import message from './resource/img/message.jpg';


function App() {
  return (
    <div className="App">
      <div className='Home-Container'>
      <Typography variant="h1" fontWeight='bolder' color='#6A2C70' gutterBottom>
        Remarkable IT Solutions
      </Typography>
      <Typography variant="h2" fontWeight='bold' gutterBottom>
        Welcome!
      </Typography>
      <div className='Image-Container'>
        <img src={message} />
      </div>
      </div>
    </div>
  );
}

export default App;


