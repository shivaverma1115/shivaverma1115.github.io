import React, { useContext } from 'react';

import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import GitHubSubmission from './Pages/GitHubSubmission';
import Contacts from './Pages/Contacts';
import { Stack } from '@chakra-ui/react';
import { AuthContext } from './ContextAPI/ContextProvider';

function App() {
  const {Toggle,setToggle} = useContext(AuthContext) ;
  return (
    <Stack bg={Toggle?'black':'white'}color={Toggle?'white':'black'} >
      <Home />
      <About/>
      <Skills/>
      <Projects/>
      <GitHubSubmission/>
      <Contacts/>
      <Navbar />
    </Stack>
  );
}

export default App;
