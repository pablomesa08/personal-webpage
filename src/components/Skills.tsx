import Container from '@mui/material/Container';
import '../Skills.css';
import Box from '@mui/material/Box';
import ChatIcon from '@mui/icons-material/Chat';
import TranslateIcon from '@mui/icons-material/Translate';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import SearchIcon from '@mui/icons-material/Search';
import { blue } from '@mui/material/colors';

const skillsList: string[] = [
    "Communication", "English", "Team Work", "Learning Capacity", "Observation"
]

function Skills(){
  return(
    <>
      <h1 className='skill-title'>Skills</h1>
      <Container maxWidth="xl" sx={{margin: 0, padding: 0}}>
          <Box>
            <div className='skill-info'>
              <h1 className='skill-text'>{skillsList[0]}</h1>
              <ChatIcon sx={{ fontSize: 110, color: blue[900] ,display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
            </div>
            <div className='skill-info'>
              <h1 className='skill-text'>{skillsList[1]}</h1>
              <TranslateIcon sx={{fontSize: 110, color: blue[900], display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
            </div>
            <div className='skill-info'>
              <h1 className='skill-text'>{skillsList[2]}</h1>
              <GroupsIcon sx={{ fontSize: 110, color: blue[900], display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
            </div>
            <div className='skill-info'>
              <h1 className='skill-text'>{skillsList[3]}</h1>
              <LocalLibraryIcon sx={{ fontSize: 110, color: blue[900] ,display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
            </div>
            <div className='skill-info'>
              <h1 className='skill-text'>{skillsList[4]}</h1>
              <SearchIcon sx={{ fontSize: 110, color: blue[900], display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
            </div>
          </Box>
        </Container>
    </>
  );
}   

export default Skills;