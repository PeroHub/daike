import { Box } from '@mui/material';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextareaAutosize from '@mui/base/TextareaAutosize';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export  function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: "1px solid #969696",
            borderRadius: "8px",
            padding: '30px'
          }}
        >
          <Typography component="h1" variant="h5">
            Contact Us
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }} >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
              <textarea id="txtid" name="txtname" rows="4" cols="50" style={{width: "100%", border: "1px solid gray"}} maxlength="200" />
              </Grid>
              {/* <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              // variant="contained"
              sx={{ 
                mt: 3, 
                mb: 2, 
                background: "#E4CE85",
                border: " 1px solid #E4CE85",
                borderRadius: "8px",
                color: "#E4CE85"
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    background: '#FFFCF6',
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
    // background: '#FFFCF6',
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
  {...props}
    expandIcon={<ExpandMoreIcon sx={{ fontSize: '0.9rem' }} />}
  />
))(({ theme }) => ({
  // backgroundColor:
  //   theme.palette.mode === 'dark'
  //     ? 'rgba(255, 255, 255, .05)'
  //     : 'rgba(0, 0, 0, .03)',
  // flexDirection: 'row-reverse',
  border: 0,
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  // borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export  function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Quality Corporate Services</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Kejoo app can be used for monitoring on-site employees, remote employees, 
          WFH employees, field teams, sales teams and marketing teams.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>More Practical and Productive</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            ........
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Good Training On Tech Skills</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           ......
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

function Main() {
    return ( 
        <Box>
            <Box sx={{padding: {xs: "50px 10px", md: "50px 10px", lg: "50px 223px"}, marginTop: "30px", background: "#fff"}}>
                <seection>
                    <h3 style={{
                        fontWeight: "700",
                        lineHeight: "46px",
                        fontSize: "25px",
                        color: "#424242",
                        textAlign: "center"
                    }}>Our Services</h3>
                    <p style={{
                        fontWeight: "400",
                        lineHeight: "20px",
                        fontSize: "16px",
                        color: "#969696",
                        textAlign: "center",
                        marginTop: "10px"
                    }}>DAIKESGLOBAL  provides many training and corporate servicesand  make it easier for people to access.</p>
                </seection>
                <section>
                <div class="max-w-2xl m-auto">
                    <div id="default-carousel" class="relative mb-4 mt-4 ml-4" data-carousel="static">
                        {/* Carousel wrapper */}
                        <div class="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
                            {/* Item 1  */}
                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
                                <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                            </div>
                            {/* Item 2  */}
                            <div class="hidden duration-700 ease-in-out" data-carousel-item> /
                                <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                            </div>
                            {/* Item 3  */}
                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                            </div>
                        </div>
                        {/* Slider indicators  */}
                        <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                        </div>
                        {/* Slider controls  */}
                        <button type="button" class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
                            <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                                <span class="hidden">Previous</span>
                            </span>
                        </button>
                        <button type="button" class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
                            <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                                <span class="hidden">Next</span>
                            </span>
                        </button>
                    </div>
                </div>
                </section>
                <section style={{marginBottom: {md: "20px"}}}>
                    <h3 style={{
                        fontWeight: "700",
                        lineHeight: "46px",
                        fontSize: "25px",
                        color: "#424242",
                        textAlign: "center",
                        marginTop: "25px"
                    }}>About Us</h3>
                    <p style={{
                        fontWeight: "400",
                        lineHeight: "20px",
                        fontSize: "16px",
                        color: "#969696",
                        textAlign: "center",
                        marginTop: "10px"
                    }}>
                        DAIKESGLOBAL  provides many training and corporate services and  make it easier for people to 
                        access.Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of 
                        a document or a typeface without relying on meaningful content. Lorem ipsum may be used as
                        a placeholder before final copy is available. It is also used to temporarily replace text in
                        a process called greeking, which allows designers to consider the form of a webpage or publica…
                    </p>
                </section>

            </Box>
            <Box sx={{display: {md: "flex"}, background: "#FFFCF6", padding: {xs: "50px 10px", md: "50px 10px", lg: "90px 223px"}, justifyContent: "space-around" }}>
                <section style={{width: "65%"}}>
                    <h2 style={{
                       fontWeight: "700",
                       lineHeight: "30px",
                       fontSize: "25px",
                       color: "#424242",
                      //  textAlign: "center",
                      //  marginTop: "25px"
                    }}>DAIKESGLOBAL has several <br /> benefits for your you</h2>
                    <p style={{
                      fontWeight: "400",
                      lineHeight: "20px",
                      fontSize: "16px",
                      color: "#969696",
                      // textAlign: "center",
                      marginTop: "20px"
                    }}>DAIKESGLOBAL's complete features make it easier for <br/> people to 
                        manage and increase employee productivity in <br/> various locations. Save time and money.
                    </p>
                    <button 
                    style={{
                        padding: "15px 25px",
                        alignSelf: "flex-start",
                        borderRadius: "8px",
                        background: "#E4CE85",
                        display: "flex",
                        marginTop: "20px",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "18px",
                        lineHeight: "24px",
                        fontWeight: "500",
                        color: "#A7882D"
                    }}>Contact Us</button>
                </section>
                <section style={{width: "50%"}}>
                    <CustomizedAccordions />
                </section>
            </Box>
            <Box sx={{padding: {xs: "50px 10px", md: "50px 10px", lg: "50px 223px"}, background: "#fff", display: {md: "flex"}, justifyContent: "space-between", gap: "20px"}}>
              <Box sx={{
                width: {md: "40%"},
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px"
                }}>
                <h3 style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#424242",
                  marginBottom: "30px"
                  }}>People are Saying About DAIKESGLOBAL</h3>
                <Stack spacing={2} 
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                >
                  <Avatar alt="Remy Sharp" sx={{width: 120, height: 120}} src="/images/man2.png" />
                  <h4 style={{fontSize: "18px", fontWeight: "600", color: "#969696"}}>John Smith</h4>
                  <p style={{textAlign: "center", color: "#969696"}}>Kejoo app can be used for monitoring on-site employees, remote employees, WFH</p>
                </Stack>
              </Box>
              <Box sx={{width: {md: "50%"}}}>
                <SignUp/>
              </Box>
            </Box>
        </Box>
     );
}

export default Main;