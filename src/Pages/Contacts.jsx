import { Box, Flex, Input, Text, Textarea, WrapItem } from '@chakra-ui/react'
import React from 'react'

const Contacts = () => {
  return (
    < >
      <Box id='contacts' w={'fit-content'} m={'auto'}  >
        <Text fontSize={30} fontWeight={600}pt={'15vh'}>Contact Me</Text>
        <Text fontWeight={800} color={'gray'}>Meet you soon ...</Text>
      </Box>
    <Box >
      <Box m={'auto'} w={['90%','80%','50%']} >
        <form action='https://formspree.io/f/xaygoyka' method='POST' >
            <Input outline={'2px solid gray'} my={5} type={'text'}name='username'placeholder="username" required />
            <Input outline={'2px solid gray'} my={5} type={'email'}name='Email'placeholder="Email" required />
            <Textarea outline={'2px solid gray'} my={5} name='message' placeholder='Send message' cols={30}rows={6}required />
            <Box m={'auto'} w={'30%'}>
            <Input color={'white'} bg={'#1976d2'} outline={'2px solid gray'} cursor={'pointer'} my={5} type={'submit'} value={'Send'} />
            </Box>
        </form>
      </Box>
      <Box  m={'auto'}  w={'90%'} >
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.869565388498!2d82.9964572260068!3d25.30858602717887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2e0218bf7da5%3A0xc0b41fcef2056aff!2sLuxa%2C%20Varanasi%2C%20Uttar%20Pradesh%20221001!5e0!3m2!1sen!2sin!4v1692428678228!5m2!1sen!2sin"
         width="100%" 
         height="300" 
         style={{ border: 0,marginTop:"30px" ,marginBottom:"30px"}} 
         allowFullScreen="" 
         loading="lazy" 
         />
      </Box>
    </Box>
    </>
  )
}

export default Contacts
