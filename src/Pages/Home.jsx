import React, { useContext, useState } from 'react'
import TypeWriterReact from './TypeWriterReact'
import { Image, Box, Flex } from "@chakra-ui/react";
import { AuthContext } from '../ContextAPI/ContextProvider';
import codingImg from '../Assets/coding.gif'
import codingImgDark from '../Assets/codingImgDark.gif'
const Home = () => {
  const { Toggle } = useContext(AuthContext);
  
  return (
    <Flex mt={'5vh'} id='home' display={['block', 'block', 'flex']} minH={['50vh', '94vh', '94vh']} >
      <Box w={['100%', '100%', '50%']} m={'auto'} p={[10, 10, 0]} >
        <TypeWriterReact />
      </Box>
      <Box w={'fit-content'} m={'auto'} p={5} >
        {
        Toggle ? <Image src={codingImgDark}/>:<Image src= {codingImg} />
        }
      </Box>
    </Flex>
  )
}

export default Home
