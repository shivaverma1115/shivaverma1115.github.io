import { Box, Button, Grid, GridItem, Image, Link, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import Pharamacy from "../Essentials/pharmacy.png"
import Alcazar from "../Essentials/Alcazar.png"
import Adventure from "../Essentials/Adventure.png"
import DownlordHub from "../Essentials/downlordhub.png"
import { AiFillGithub } from 'react-icons/ai';
import { RiNavigationLine } from 'react-icons/ri';

const Projects = () => {
  const projects = [
    { img: DownlordHub, githubLink:"https://github.com/shivaverma1115/DownloadHubFrontened",live:"https://create-react-app-seven-teal-51.vercel.app/", title: "DownlordHub", desc: "DownloadHub based on MERN stack web application that allows users to browse, search, and download movies in high quality. It has an extensive library of movies to choose from, including new releases, classic films, and foreign films. DownloadHub is easy to use and navigate, and it offers a variety of features to help users find the perfect movie .", },
    { img: Pharamacy, githubLink:"https://github.com/kuntalkumar/Unit_4_Project_Pharmeasy",live:"https://6466188149da42083e1781f6--cerulean-basbousa-d1f219.netlify.app/", title: "PHARMEASY WEBSITE", desc: "PharmEasy is a consumer healthcare “super app” that provides consumers with on-demand, home delivered access to a wide range of prescription, OTC pharmaceutical, other consumer healthcare products, comprehensive diagnostic test services, and teleconsultations thereby serving their healthcare needs.", },
    { img: Alcazar, githubLink:"https://github.com/Dibakardebnath/Alcazar-project",live:"https://neon-marshmallow-b4a4c9.netlify.app/", title: "TRAVEL AGENCY", desc: "Trusted by 80 million Travelers. Aalcazar is the worlds most comprehensive travel, flight and accommodation provider. very easy to access on your smarttree and desktop.", },
    { img: Adventure, githubLink:"https://github.com/monurajputrko/Adventour",live:"https://adventour-e3im-git-booking-monurajputrko.vercel.app/", title: "ADEVENTURE", desc: "Trusted by 80 million Travelers. Aalcazar is the worlds most comprehensive travel, flight and accommodation provider. very easy to access on your smarttree and desktop.", },
  ]
  return (
    <Box>
      <Box id="projects" w={'80%'} m={'auto'} mt={[10, 10, 2]}>
        <Box w={'fit-content'} m={'auto'} >
          <Text fontSize={30} fontWeight={600} pt={'15vh'}>My Projects</Text>
          <Text fontWeight={800} color={'gray'}>with 5 team mates</Text>
        </Box>
        <Grid fontSize={20} templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)']} gap={0} w={'fit-content'} m={'auto'}>
          {
            projects.map((ele, i) => {
              return (
                <GridItem className="project-card" p={5} key={i} m={[2, 5, 10]} outline={'2px solid #1976d2'} borderRadius={10} style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', }} >
                  <Image src={ele.img} />
                  <Text className="project-title" fontSize={25} fontWeight={800} mt={5} >{ele.title}</Text>
                  <Text className="project-description">{ele.desc}</Text>
                  <Box m={'auto'} w={'fit-content'} >
                    <Button className="project-github-link" mr={[2, 2, 10, 10, 40]} style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', }} _hover={{ cursor: 'pointer' }} leftIcon={<AiFillGithub />} colorScheme='purple' variant='solid'>
                      <Link target='_blank' href={ele.githubLink} >GitHub</Link>
                    </Button>
                    <Button className="project-deployed-link" target='_blank' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', }} _hover={{ cursor: 'pointer' }} leftIcon={<RiNavigationLine />} colorScheme='facebook' variant='solid'>
                      <Link target='_blank' href={ele.live} >Live</Link>
                    </Button>
                  </Box>
                </GridItem>
              )
            })
          }
        </Grid>
      </Box>
    </Box>
  )
}

export default Projects
