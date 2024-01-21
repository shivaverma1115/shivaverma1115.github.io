import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const GitHubSubmission = () => {
    return (
        <>
            <Box w={'fit-content'} m={'auto'} my={10} >
                <Text fontSize={30} fontWeight={600}>Github Submission</Text>
                <Text fontWeight={800} color={'gray'}>Do you have any work</Text>
            </Box>
            <Box className="react-activity-calendar" w={'fit-content'} m={'auto'} my={10}>
                <Image id="github-stats-card" className="react-activity-calendar"my={5} src='https://github-readme-stats.vercel.app/api?username=shivaverma1115&show_icons=true&locale=en' />
                <Image  id="github-streak-stats"  src='https://github-readme-streak-stats.herokuapp.com/?user=shivaverma1115&' />
                <Image  id="github-top-langs" my={5} src='https://github.com/users/shivaverma1115/contributions' />
            </Box>
        </>
    )
}

export default GitHubSubmission
