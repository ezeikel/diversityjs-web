import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  background: #1abc9c;
`;

const Title = styled.h1`
  margin: 0;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Title>
      <StyledLink to="/">
        {siteTitle}
      </StyledLink>
    </Title>
  </Wrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
