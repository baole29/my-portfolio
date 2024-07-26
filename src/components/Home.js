// src/components/Home.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background: ${props => props.theme.colors.background};
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

const SubHeading = styled.p`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text};
`;

const Home = () => (
  <HeroSection>
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Heading>Welcome to Bao's Portfolio</Heading>
      <SubHeading>I'm Bao, a Software Developer.</SubHeading>
    </motion.div>
  </HeroSection>
);

export default Home;
