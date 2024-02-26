import '../Projects.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container, Box } from '@mui/material';
import Link from '@mui/material/Link'

const projList: string[] = [
  "WIP Company", "Ningiri", "Nest-Pokedex", "MysteryRestAPI"
]

function Projects(){
  return(
    <>
      <section id="projects">
        <h1 className='proj-title'>Projects</h1>
        <Container maxWidth="xl" sx={{padding: 0, display: 'flex', justifyContent: 'center'}}>
            <Box>
            <div className='proj-ele'>
                <div className='edu-left'>
                  <Link href="https://github.com/pablomesa08/WIPCompany" underline="none" target="_blank" rel="noreferrer">
                    <Card sx={{ maxWidth: 500 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="180"
                          image="/wip.svg"
                          alt="WIP Company Project"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div" 
                            sx={{textAlign: 'center', fontFamily: 'Roboto mono'}}
                          >
                            {projList[0]}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{textAlign: 'center', fontFamily: 'Roboto mono'}}>
                            Frontend using HTML, CSS and JavaScript to show the software products developed by the company.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Link>
                </div>
                <Link href="https://github.com/Cecilio0/Ningiri" underline="none" target="_blank" rel="noreferrer">
                  <Card sx={{ maxWidth: 500 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="180"
                          image="/ningiri.svg"
                          alt="Ningiri Project"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div" 
                            sx={{textAlign: 'center', fontFamily: 'Roboto mono'}}
                          >
                            {projList[1]}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{textAlign: 'center', fontFamily: 'Roboto mono'}}>
                            Metroidvania and platformer 2D videogame created using C# and Unity. Based on Japanese Culture.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                </Link>
            </div>
            <div className='proj-ele'>
                <div className='edu-left'>
                  <Link href="https://github.com/pablomesa08/nest-pokedex" underline="none" target="_blank" rel="noreferrer">
                    <Card sx={{ maxWidth: 500}}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="180"
                          image="/nest-pokedex.svg"
                          alt="Nest-Pokedex Project"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div" 
                            sx={{textAlign: 'center', fontFamily: 'Roboto mono'}}
                            >
                            {projList[2]}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{textAlign: 'center', fontFamily: 'Roboto mono'}}>
                            Backend project inspired in Pokemon. Created using Nestjs, Mongoose and Docker.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Link>
                </div>
                <Link href="https://github.com/pablomesa08/MysteryRestAPI-SpringBoot" underline="none" target="_blank" rel="noreferrer">
                  <Card sx={{ maxWidth: 500 }}>
                    <CardActionArea>
                      <CardMedia
                          component="img"
                          height="180"
                          image="/mystery.svg"
                          alt="MysteryRestApi Project"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" 
                            sx={{textAlign: 'center', fontFamily: 'Roboto mono'}}
                          >
                            {projList[3]}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{textAlign: 'center', fontFamily: 'Roboto mono'}}>
                            Basic RestAPI using Java and SpringBoot, based on a given case.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
                
            </div>
            </Box>
          </Container>
      </section>
    </>
  );
}

export default Projects;