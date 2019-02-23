import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const Wrapper = styled.div`
  display: grid;
  background: #ecf0f1;
  height: 100%;
`;

const ImageWrapper = styled.div`
  width: 250px;
  height: 250px;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`london`, `meetup`, `diversity`, `diverse`, `black tech`, `javascript`, `front end`, `back end`, `web development`]} />
    <Wrapper>
      <ImageWrapper>
        <Image />
      </ImageWrapper>
      <Link to="/page-2/">Go to page 2</Link>
    </Wrapper>
  </Layout>
);

export default IndexPage;
