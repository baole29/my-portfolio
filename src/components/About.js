// src/components/About.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled(motion.section)`
  padding: ${props => props.theme.spacing.large};
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: ${props => props.theme.spacing.medium};
  color: ${props => props.theme.colors.text};
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: ${props => props.theme.colors.text};
`;

// Define animation variants
const pageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const pageTransition = {
  duration: 0.5,
  ease: "easeInOut",
};

const About = () => (
  <Section
    initial="hidden"
    animate="visible"
    variants={pageVariants}
    transition={pageTransition}
  >
    <Heading>About Me</Heading>
    <Paragraph>
    My name is Bao, and I have three years of experience as a software developer.
    I specialize in developing both websites and mobile applications.
    I am proficient in Python, Java, and JavaScript, and have extensive experience working with frameworks such as Django and React.
    My background includes successfully delivering projects that meet client needs and enhance user experiences.
    I enjoy solving complex problems and continuously learning new technologies to improve my skills.
    </Paragraph>
    {/* Add more content as needed */}
  </Section>
);

export default About;
