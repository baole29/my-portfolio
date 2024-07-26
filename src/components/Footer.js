// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 1rem;
  background: #2d2d2d;
  color: #fff;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const Footer = () => (
  <FooterContainer>
    &copy; 2024 My Portfolio. All rights reserved.
  </FooterContainer>
);

export default Footer;
