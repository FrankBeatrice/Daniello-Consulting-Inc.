import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> We're <br /> Daniello Consulting.
        </BigTitle>
        <Subtitle> We are creating noice web experiences, desgins and strategic plans for the next generation of consumer-facing companies.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="HoneySuckle Magazine"
            link="https://www.behance.net/gallery/58937147/Freiheit"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Webesite for Honeysuckle Magazine.
          </ProjectCard>
          <ProjectCard
            title="Delta Flora"
            link="https://deltaflora.co"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"

          >
            Website For a Smart New Jersey Based HortiCulture Company.
          </ProjectCard>
         
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Daniello Consulting" />
          <AboutSub>
          Digital Agency for the Largest Niche and Speciality Demographic <br />
          "We are an experienced team of interdisciplinary individuals who will make your vision real."
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          You know the way you feel when you see a picture of two otters holding hands? That's how you're gonna feel
          every day. My mother cried the day I was born because she knew she’d never be prettier than me. You should
          make me your campaign manager. I was born for politics. I have great hair and I love lying. Captain? The kids
          want to know where Paulie the Pigeon is. I told them he got sucked up into an airplane engine, is that all
          right?

          Daniello was named after the Great-Grandfather of our founder. Frankie insvisioned this company to have integrity, he named it for a man that had a spark that was clearly unique. 
          By doing so, he would never let our reputation or standard drop or be considered sub-par. When you invision what we do think of the 
          Looney Tunes episode with Mel Blance directly inverneing in his cartoon. Daniello spawns creativity from the white of blank pages.

        
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:contact@danilleoconsulting.com">Hi</a> or find us on:{' '}
            <a href="https://www.facebook.com/Daniello-Consulting-516958655461970/">Facebook</a> &{' '}
            <a href="https://www.instagram.com/danielloconsulting/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; Daniello Consulting Inc. 2019 
          <a href=""></a> {' '}
          <a href=""></a>
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
