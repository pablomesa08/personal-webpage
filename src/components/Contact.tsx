import Container from '@mui/material/Container';
import '../Contact.css';
import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { blue } from '@mui/material/colors';
import Link from '@mui/material/Link';

function Contact(){
    return(
      <>
        <section id="contact">
          <h1 className='cont-title'>Contact</h1>
          <a href="mailto:pablitomesa08@gmail.com" className='a-link'><h4 className='cont-sub'>pablitomesa08@gmail.com</h4></a>
          <Container maxWidth="xl" sx={{margin: 0, padding: 0, marginBottom: 5, display: 'flex', justifyContent: 'center'}}>
            <Box>
              <div className='cont-info'>
                <Link href="https://www.linkedin.com/in/pablo-mesa-hernández" underline="none" target="_blank" rel="noreferrer">
                  <LinkedInIcon sx={{ fontSize: 110, color: blue[900], display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
                </Link>
              </div>
              <div className='cont-info'>
                <Link href="https://github.com/pablomesa08" underline="none" target="_blank" rel="noreferrer">
                  <GitHubIcon sx={{ fontSize: 110, color: blue[900], display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
                </Link>
              </div>
            </Box>
          </Container>
        </section>
      </>
    );
}

export default Contact;