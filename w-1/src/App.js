import './App.css';
import ButtonAppBar from './Components/ButtonAppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Card from './Components/Card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';


function App() {
  return (
    <>
      <CssBaseline />
      <ButtonAppBar />
      <Container sx={{mt : 5}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {Array.from(Array(5)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Card />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default App;
