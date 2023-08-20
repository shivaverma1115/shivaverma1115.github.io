import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const GitHubSubmission = () => {
    return (
        <>
            <Box w={'fit-content'} m={'auto'} my={10} >
                <Text fontSize={30} fontWeight={600}>Github Submission</Text>
                <Text fontWeight={800} color={'gray'}>Do you have any work</Text>
            </Box>
            <Box id="github-stats-card" w={'fit-content'} m={'auto'} my={10}>
                <Image  id="github-top-langs" className="react-activity-calendar" w={'90vh'} my={5} src='https://github-readme-stats.vercel.app/api?username=shivaverma1115&show_icons=true&locale=en' />
                <Image  id="github-streak-stats" w={'100%'} src='https://github-readme-streak-stats.herokuapp.com/?user=shivaverma1115&' />
            </Box>
        </>
    )
}

export default GitHubSubmission
