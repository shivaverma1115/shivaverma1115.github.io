import React from 'react'
import { AiOutlineHtml5 } from "react-icons/ai"
import { SiCss3 } from "react-icons/si"
import { IoLogoJavascript } from "react-icons/io"
import { FaReact } from "react-icons/fa"
import { IoLogoNodejs } from "react-icons/io"
import { SiRedux } from "react-icons/si"

import { AiFillGithub } from "react-icons/ai"
import { SiNetlify } from "react-icons/si"
import { Box, Divider, Grid, GridItem, Spacer, Text } from '@chakra-ui/react'

const Skills = () => {
  return (
    <Box w={'90%'}m={'auto'} minH={'94vh'} >
      <Box id="skills" w={'90%'} m={'auto'} mt={[10, 10, 2]}>
        <Box w={'fit-content'} m={'auto'} pt={'15vh'} >
          <Text fontSize={30} fontWeight={600}>My Skills</Text>
          <Text fontWeight={800} color={'gray'}>My Knowledge</Text>
        </Box>
        <Grid fontSize={20} textAlign={'center'} templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(5, 1fr)']} gap={0} w={'fit-content'} m={'auto'}>
          <GridItem m={10} outline={'2px solid #1976d2'} p={7} borderRadius={10} style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', }} _hover={{ color: '#1976d2', cursor: 'pointer' }} >
            <AiOutlineHtml5 fontSize={70} />
            <Text>HTML</Text>
          </GridItem>
          <GridItem m={10} outline={'2px solid #1976d2'} p={7} borderRadius={10} style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', }} _hover={{ color: '#1976d2', cursor: 'pointer' }} >
            <SiCss3 fontSize={70} />
            <p>CSS</p>
          </GridItem>
          <GridItem m={10} outline={'2px solid #1976d2'} p={7} borderRadius={10} style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', }} _hover={{ color: '#1976d2', cursor: 'pointer' }} >
            <IoLogoJavascript fontSize={70} />
            <p>JS</p>
          </GridItem>
          <GridItem m={10} outline={'2px solid #1976d2'} p={7} borderRadius={10} style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', }} _hover={{ color: '#1976d2', cursor: 'pointer' }} >
            <FaReact fontSize={70} />
            <p>REACT</p>
          </GridItem>
          <GridItem m={10} outline={'2px solid #1976d2'} p={7} borderRadius={10} style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', }} _hover={{ color: '#1976d2', cursor: 'pointer' }} >
            <SiRedux fontSize={70} />
            <p>Redux</p>
          </GridItem>
          <GridItem m={10} outline={'2px solid #1976d2'} p={7} borderRadius={10} style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', }} _hover={{ color: '#1976d2', cursor: 'pointer' }} >
            <IoLogoNodejs fontSize={70} />
            <p>Node.js</p>
          </GridItem>
        </Grid>
      </Box>


      <Box w={'fit-content'} m={'auto'} >
        <Box w={'fit-content'} m={'auto'} >
          <Text fontSize={30} fontWeight={600}>My Tools</Text>
          <Text fontWeight={800} color={'gray'}>working on...</Text>
        </Box>
        <Grid fontSize={20} textAlign={'center'} templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={6} w={'fit-content'} m={'auto'}>
          <GridItem m={10} outline={'2px solid #1976d2'} p={7} borderRadius={10} style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', }} _hover={{ color: '#1976d2', cursor: 'pointer' }} >
            <AiFillGithub fontSize={70} />
            <Text>Vscode</Text>
          </GridItem>
          <GridItem m={10} outline={'2px solid #1976d2'} p={7} borderRadius={10} style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', }} _hover={{ color: '#1976d2', cursor: 'pointer' }} >
            <AiFillGithub fontSize={70} />
            <p>GitHub</p>
          </GridItem>
          <GridItem m={10} outline={'2px solid #1976d2'} p={7} borderRadius={10} style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', }} _hover={{ color: '#1976d2', cursor: 'pointer' }} >
            <SiNetlify fontSize={70} />
            <p>JS</p>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  )
}

export default Skills
