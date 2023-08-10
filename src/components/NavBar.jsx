import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function NavBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate();
  return (
    // <nav>
    //   <ul>
    //     <li>
    //       <HashLink to="/">Home</HashLink>
    //     </li>
    //     <li>
    //       <HashLink to="#about-me"> About Me</HashLink>
    //     </li>
    //     <li>
    //       <HashLink to="#project"> Projects</HashLink>
    //     </li>
    //     <li>
    //       <HashLink to="#contacts"> Contacts</HashLink>
    //     </li>
    //   </ul>
    // </nav>
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
       
        <Tab component={HashLink} to="#about-me" label="About Me" />
        <Tab component={HashLink} to="#project" label="Project" />
        <Tab component={HashLink} to="#contacts" label="Contact" />
      </Tabs>
    </Box>
    
   
  )
}

export default NavBar