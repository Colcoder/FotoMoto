import * as React from 'react';
import { useState } from 'react';
import MyAccount from './MyAccount';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        FotoMoto
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Posts() {

    const [uploadForm,setUploadForm] = useState(false);
    const showUploadForm = ()=> setUploadForm(!uploadForm);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar className='app-bar' position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2, color:'#14d9d9' }} />
          <Typography variant="h6" color="inherit" noWrap>
            FotoMoto
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Posts
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Share your experience
            </Typography>
            <Stack
              sx={{ pt: 4, mb: 7 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" id='upload-btn' onClick={showUploadForm}>Upload Post</Button>
            </Stack>
           {uploadForm ? <MyAccount/> : ''} {/*conditional render of the form upload form in the MyAccount component */}
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography>
                     Picture description
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Like</Button>
                    <Button size="small">Dislike</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}