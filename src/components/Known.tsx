import Container from '@mui/material/Container';
import '../Known.css';
import Box from '@mui/material/Box';


const knownList: string[] = [
  "Java", "TypeScript", "NestJS", "PostgreSQL", "HTML5", "Postman"
]
function Known(){
    return(
      <>
        <h1 className='known-title'>Knowledge</h1>
        <Container maxWidth="xl" sx={{margin: 0, padding: 0}}>
          <Box>
            <div className='known-info'>
                <h1 className='known-text'>{knownList[0]}</h1>
                <img className='knownim' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
            </div>
            <div className='known-info'>
              <h1 className='known-text'>{knownList[1]}</h1>
              <img className='knownim' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
            </div>
            <div className='known-info'>
              <h1 className='known-text'>{knownList[2]}</h1>
              <img className='knownim' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" />
            </div>
            <div className='known-info'>
              <h1 className='known-text'>{knownList[3]}</h1>
              <img className='knownim' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
            </div>
            <div className='known-info'>
              <h1 className='known-text'>{knownList[4]}</h1>
              <img className='knownim' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
            </div>
            <div className='known-info'>
              <h1 className='known-text'>{knownList[5]}</h1>
              <img className='knownim' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />
            </div>
          </Box>
        </Container>
      </>
    );
}

export default Known;