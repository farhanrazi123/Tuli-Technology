import { Grid } from '@mui/material';
import React from 'react';


const data = [
    {
      backgroundColor: '#3C4867',
      width: '260px',
      height: '162px',
      padding: '32px',
      borderRadius: '10px',
      imgSrc: 'https://www.webbuds.co.uk/wp-content/uploads/2023/05/prcs-ico1.svg',
      text: 'Kick-off Meeting',
    },
    {
      backgroundColor: '#F7BE00',
      width: '520px',
      height: '162px',
      padding: '32px',
      borderRadius: '10px',
      imgSrc: 'https://www.webbuds.co.uk/wp-content/uploads/2023/05/prcs-ico2-1.svg',
      text: 'Proposal Planning & Submission',
    },
    {
      backgroundColor: '#83C5BE',
      width: '390px',
      height: '162px',
      padding: '32px',
      borderRadius: '10px',
      imgSrc: 'https://www.webbuds.co.uk/wp-content/uploads/2023/05/prcs-ico3.svg',
      text: 'Agreement & Signing',
    },
  ];

const AgileProcess = () => {
  const mainStyle = {
    backgroundColor: '#1B2338',
    fontFamily: 'Arial, Helvetica, sans-serif',
    paddingBottom: '5rem',
    color: 'white',
  };

  const h4Style = {
    paddingLeft: '0.6rem',
    fontSize: '1.5rem',
    paddingTop: '3rem',
    fontWeight: 300,
    marginBottom: '0.5rem',
  };

  const colStyle = {
    padding: '2rem',
    borderRadius: '10px',
  };

  const iconStyle = {
    fontSize: '2.5rem',
    color: 'white',
  };

  const pStyle = {
    marginTop: '1.5rem',
    fontSize: '1.4rem',
    fontWeight: 700,
  };

  return (
    <Grid className="p-4" style={mainStyle} sx={{padding: "96px 0"}}>
      <h1>We stay ahead with <br /> our Agile working <br /> process<span>.</span></h1>
      <h4 style={h4Style}>On-boarding</h4>
      <Grid className="" display={'flex'} alignItems={'center'}>
        <Grid className="" style={{ backgroundColor: '#3C4867', width: "260px", height: "162px", padding: "32px", borderRadius: "10px"  }}>
          <img src="https://www.webbuds.co.uk/wp-content/uploads/2023/05/prcs-ico1.svg" alt="imgg" />
          <p>Kick-off Meeting</p>
        </Grid>
        <Grid className="" style={{padding: "10px"}}>
          <img src="https://www.webbuds.co.uk/wp-content/uploads/2023/05/h-line.svg" alt="imgg" />
        </Grid>
        <Grid className="" style={{  backgroundColor: '#F7BE00', width: "520px", height: "162px", padding: "32px", borderRadius: "10px"  }}>
        <img src="https://www.webbuds.co.uk/wp-content/uploads/2023/05/prcs-ico2-1.svg" alt="imgg" />
          <p>Proposal Planning & Submission</p> 
        </Grid>
        <Grid className="" style={{padding: "10px"}}>
          <img src="https://www.webbuds.co.uk/wp-content/uploads/2023/05/h-line.svg" alt="imgg" />
        </Grid>
        <Grid className="" style={{  backgroundColor: '#83C5BE', width: "390px" , height: "162px", padding: "32px", borderRadius: "10px"  }}>
        <img src="https://www.webbuds.co.uk/wp-content/uploads/2023/05/prcs-ico3.svg" alt="imgg" />
          <p>Agreement & Signing</p>
        </Grid>
      </Grid>
      <h4 style={h4Style}>On-boarding</h4>
      <Grid className="" display={'flex'} alignItems={'center'}>
        <Grid className="" style={{ backgroundColor: '#f9844a', width: "325px", height: "162px", padding: "32px", borderRadius: "10px"  }}>
          <img src="https://www.webbuds.co.uk/wp-content/uploads/2023/05/prcs-ico4.svg" alt="imgg" />
          <p>Kick-off Meeting</p>
        </Grid>
        <Grid className="" style={{padding: "10px"}}>
          <img src="https://www.webbuds.co.uk/wp-content/uploads/2023/05/h-line.svg" alt="imgg" />
        </Grid>
        <Grid className="" style={{  backgroundColor: '#52b69a', width: "260px", height: "162px", padding: "32px", borderRadius: "10px"  }}>
        <img src="https://www.webbuds.co.uk/wp-content/uploads/2023/05/prcs-ico5.svg" alt="imgg" />
          <p>Proposal Planning & Submission</p> 
        </Grid>
        <Grid className="" style={{padding: "10px"}}>
          <img src="https://www.webbuds.co.uk/wp-content/uploads/2023/05/h-line.svg" alt="imgg" />
        </Grid>
        <Grid className="" style={{  backgroundColor: '#83c5be', width: "585px" , height: "162px", padding: "32px", borderRadius: "10px"  }}>
        <img src="https://www.webbuds.co.uk/wp-content/uploads/2023/05/prcs-ico6.svg" alt="imgg" />
          <p>Agreement & Signing</p>
        </Grid>
      </Grid>

      <h4 style={h4Style}>On-boarding</h4>
      <Grid className="" display={'flex'} alignItems={'center'}>
        <Grid className="" style={{ backgroundColor: '#f94144', width: "585px", height: "162px", padding: "32px", borderRadius: "10px"  }}>
          <img src="https://www.webbuds.co.uk/wp-content/uploads/2023/05/prcs-ico7.svg" alt="imgg" />
          <p>Kick-off Meeting</p>
        </Grid>
        <Grid className="" style={{padding: "10px"}}>
          <img src="https://www.webbuds.co.uk/wp-content/uploads/2023/05/h-line.svg" alt="imgg" />
        </Grid>
        <Grid className="" style={{  backgroundColor: '#555b6e', width: "260px", height: "162px", padding: "32px", borderRadius: "10px"  }}>
        <img src="https://www.webbuds.co.uk/wp-content/uploads/2023/05/prcs-ico8.svg" alt="imgg" />
          <p>Proposal Planning & Submission</p> 
        </Grid>
        <Grid className="" style={{padding: "10px"}}>
          <img src="https://www.webbuds.co.uk/wp-content/uploads/2023/05/h-line.svg" alt="imgg" />
        </Grid>
        <Grid className="" style={{  backgroundColor: '#55a630', width: "325px" , height: "162px", padding: "32px", borderRadius: "10px"  }}>
        <img src="https://www.webbuds.co.uk/wp-content/uploads/2023/05/prcs-ico9.svg" alt="imgg" />
          <p>Agreement & Signing</p>
        </Grid>
      </Grid>
    </Grid>
  );
  
};

export default AgileProcess;
