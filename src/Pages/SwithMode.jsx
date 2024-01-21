import { Flex } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa';
import { AuthContext } from '../ContextAPI/ContextProvider';

const SwithMode = () => {
    // ---------- MODE TOGGLE ----------
    const {Toggle,setToggle} = useContext(AuthContext) ;
    return (
        <Flex justifyContent={'center'} cursor={'pointer'} onClick={() => setToggle(!Toggle)} color={'white'} my={'auto'} fontSize={25} mr={5} >
            {
                Toggle ? <FaMoon /> : <FaSun />
            }
        </Flex>
    )
}

export default SwithMode
