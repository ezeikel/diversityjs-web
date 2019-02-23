import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  background: #2c3e50;
`;

const Footer = () => (
  <Wrapper>
    &copy; {new Date().getFullYear()}, Built with Love by 1188
  </Wrapper>
);

export default Footer;
