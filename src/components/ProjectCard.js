// src/components/ProjectCard.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background: ${props => props.theme.colors.cardBackground};
  border: 1px solid ${props => props.theme.colors.cardBorder};
  border-radius: 8px;
  padding: ${props => props.theme.spacing.medium};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.h3`
  margin-top: 0;
  color: ${props => props.theme.colors.projectTitle};
`;

const Description = styled.p`
  color: ${props => props.theme.colors.text};
`;

// Define animation variants
const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: 0 },
    visible: { opacity: 1, scale: 1, rotate: 0 },
    hover: { scale: 1.05, rotate: 0 }
  };
  
  const ProjectCard = ({ title, description }) => (
    <Card
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      transition={{ duration: 0.3 }}
    >
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
  

export default ProjectCard;