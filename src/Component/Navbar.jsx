import { Box, ChakraProvider, Flex, Spacer, theme, useColorMode, Button, Link as ResumeLink } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { ColorModeSwitcher } from '../ColorModeSwitcher'
import { BiDownload } from 'react-icons/bi';
import { Link } from "react-scroll";
import DrawerChakra from '../Pages/DrawerChakra';
import Resume from "../Essentials/Shiva-Verma- Resume (2).pdf"

const Navbar = () => {
  const links = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "skills", title: "Skills" },
    { id: "projects", title: "Projects" },
    { id: "contacts", title: "Contacts" },
  ]

  return (
    <Flex bg={'#60a5fa'} w={'100%'} color={'white'} position={'sticky'} top={0} >
      <Box fontSize={30} fontWeight={700} ml={[3, 10, 10]} cursor={'pointer'} >
        Shiva Verma
      </Box>
      <Spacer />
      <Box my={'auto'} fontSize={20} display={['none', 'none', 'block']} cursor={'pointer'}  >
        {links.map((ele, i) => {
          return (
            <Link key={i} to={ele.id} style={{ marginLeft: "30px" }} spy={true} smooth={true} offset={50} duration={500} ><a>{ele.title}</a></Link>
          )
        })}
        <Button fontSize={20} colorScheme='#60a5fa' leftIcon={<BiDownload />} ml={5} >
        <h5><a href={Resume} target='_blank' download={"Shiva_Verma_Resume.pdf"}>RESUME </a></h5>
          {/* <ResumeLink href={Resume} target='_blank' download={"Shiva_Verma_Resume.pdf"} >RESUME</ResumeLink> */}
        </Button>
        <ChakraProvider theme={theme} >
          <ColorModeSwitcher justifySelf="flex-end" />
        </ChakraProvider>
      </Box>
      <Box display={['block', 'block', 'none']} fontSize={30} m={'auto'} mr={[1, 10, 10]} color={'white'}>
        <DrawerChakra links={links} />
      </Box>
    </Flex>
  )
}

export default Navbar
