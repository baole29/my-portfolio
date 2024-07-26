// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  background: ${props => props.theme.colors.background};
`;

const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const Projects = () => (
  <ProjectsSection>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Projects</h2>
      <ProjectList>
        <ProjectCard title={"Project 1"} description={"This is my first project"} />
        <ProjectCard title={"Project 2"} description={"This is my second project"} />
        <ProjectCard title={"Project 2"} description={"This is my second project"} />
        <ProjectCard title={"Project 2"} description={"This is my second project"} />
        <ProjectCard title={"Project 2"} description={"This is my second project"} />
        <ProjectCard title={"Project 2"} description={"This is my second project"} />
        <ProjectCard title={"Project 2"} description={"This is my second project"} />

      </ProjectList>
    </motion.div>
  </ProjectsSection>
);

export default Projects;