import { Box, Button, Flex, Grid, GridItem, Image, Link, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import Pharamacy from "../Essentials/pharmacy.png"
import Alcazar from "../Essentials/Alcazar.png"
import Adventure from "../Essentials/Adventure.png"
import DownlordHub from "../Essentials/downlordhub.png"
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineApi } from 'react-icons/ai';
import { RiNavigationLine } from 'react-icons/ri';
import SkilTags from './SkilTags'

const Projects = () => {
  const projects = [
    {
      img: DownlordHub,
      githubLink: "https://github.com/shivaverma1115/DownloadHubFrontened",
      live: "https://create-react-app-seven-teal-51.vercel.app/",
      title: "DownlordHub",
      desc: "DownloadHub based on MERN stack web application that allows users to browse, search, and download movies in high quality. It has an extensive library of movies to choose from, including new releases, classic films, and foreign films. DownloadHub is easy to use and navigate, and it offers a variety of features to help users find the perfect movie .",
      tags: [
        { title: "HTML" },
        { title: "CSS" },
        { title: "JS" },
        { title: "React.js" },
        { title: "Express.js" },
        { title: "Node.js" },
        { title: "MongoDB" },
        { title: "ChakraUI" },
        { title: "GitHub" },
      ],
      api: "https://downlordhubmongodb-production.up.railway.app/movies",
    },
    {
      img: Adventure,
      githubLink: "https://github.com/monurajputrko/Adventour",
      live: "https://adventour-e3im-git-booking-monurajputrko.vercel.app/",
      title: "ADEVENTURE",
      desc: "Adventour is a MERN stack Adventure booking and hotel reservation application. Offering a booking platform for hotel rooms and exploring details about various hotels in various locations. Along with many options for adventures available in area.This is a modern and user-friendly travel app built with React, designed to help users plan and organize their travel adventures with ease.",
      tags: [
        { title: "HTML" },
        { title: "CSS" },
        { title: "JS" },
        { title: "React.js" },
        { title: "Node.js" },
        { title: "Express.js" },
        { title: "ChakraUI" },
        { title: "FireBase" },
        { title: "GitHub" },
      ],
      api:"",
    },
    {
      img: Pharamacy,
      githubLink: "https://github.com/kuntalkumar/Unit_4_Project_Pharmeasy",
      live: "https://6466188149da42083e1781f6--cerulean-basbousa-d1f219.netlify.app/",
      title: "PHARMEASY WEBSITE",
      desc: "PharmEasy is a consumer healthcare “super app” that provides consumers with on-demand, home delivered access to a wide range of prescription, OTC pharmaceutical, other consumer healthcare products, comprehensive diagnostic test services, and teleconsultations thereby serving their healthcare needs.",
      tags: [
        { title: "HTML" },
        { title: "CSS" },
        { title: "JS" },
        { title: "Local Storage" },
        { title: "GitHub" },
      ],
      api:"",
    },
    {
      img: Alcazar,
      githubLink: "https://github.com/Dibakardebnath/Alcazar-project",
      live: "https://neon-marshmallow-b4a4c9.netlify.app/",
      title: "TRAVEL AGENCY",
      desc: "Trusted by 80 million Travelers. Aalcazar is the worlds most comprehensive travel, flight and accommodation provider. very easy to access on your smarttree and desktop.",
      tags: [
        { title: "HTML" },
        { title: "CSS" },
        { title: "JS" },
        { title: "API" },
        { title: "Local Storage" },
        { title: "GitHub" },
      ],
      api:"",
    },
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
                  <Box m={'auto'} w={'fit-content'}>
                    <Grid templateColumns={['repeat(3, 1fr)', 'repeat(5, 1fr)', 'repeat(5, 1fr)', 'repeat(5, 1fr)', 'repeat(6, 1fr)', 'repeat(6, 1fr)', 'repeat(7, 1fr)']} w={'fit-content'} textAlign={'center'} >
                      {
                        ele.tags.map((ele, i) => {
                          return (
                            <GridItem>
                              <SkilTags tags={ele.title} key={i} />
                            </GridItem>
                          )
                        })
                      }
                    </Grid>
                  </Box>
                  < Flex w={'fit-content'}m={'auto'} my={3} >
                    <Button w={['100%','50%','100%']} my={1} mx={1} className="project-github-link" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', }} _hover={{ cursor: 'pointer' }} leftIcon={<AiFillGithub />} colorScheme='purple' variant='solid'>
                      <Link target='_blank' href={ele.githubLink} >GitHub</Link>
                    </Button>
                    <Spacer />
                    <Button w={['100%','50%','100%']} my={1} mx={1} className="project-deployed-link" target='_blank' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', }} _hover={{ cursor: 'pointer' }} leftIcon={<RiNavigationLine />} colorScheme='facebook' variant='solid'>
                      <Link target='_blank' href={ele.live} >Live</Link>
                    </Button>
                  </Flex>
                    {
                      ele.api != "" ? (
                        <Box m={'auto'} w={'fit-content'} >
                          < Button my={1} mx={1} className="project-github-link" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', }} _hover={{ cursor: 'pointer' }} leftIcon={<AiOutlineApi />} colorScheme='linkedin' variant='solid'>
                            <Link target='_blank' href={ele.api} >API Link</Link>
                          </Button>
                          <Spacer />
                        </Box>
                      ):""
                    }
                </GridItem>
              )
            })
          }
        </Grid >
      </Box >
    </Box >
  )
}

export default Projects
