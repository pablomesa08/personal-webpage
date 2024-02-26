import Container from '@mui/material/Container';
import '../Education.css';
import Box from '@mui/material/Box';

function Education(){
  return(
    <>
      <h1 className='edu-title'>Education</h1>
      <Container maxWidth="xl" sx={{padding: 0, display: 'flex', justifyContent: 'center'}}>
          <Box>
            <div className='edu-ele'>
              <div className='edu-left'>
                <h1 className='edu-text'>Systems Engineering and Computing Degree</h1>
                <h4 className='edu-sub'>Universidad EIA. Jan. 2021 - Present Day</h4>
              </div>
              <img src="/buho.png" alt="Logo EIA" className='edu-im'/>
            </div>
            <div className='edu-ele'>
              <div className='edu-left'>
                <h1 className='edu-text'>Scalable Development with Node.js Course</h1>
                <h4 className='edu-sub'>DevTalles Nov. 2023 - Present Day</h4>
              </div>
              <img src="/devtalles.jpg" alt="Dev Talles" className='edu-im'/>
            </div>
            
          </Box>
        </Container>
    </>
  );
}

export default Education;