import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const Wrapper = styled.div`
  display: grid;
  background: tomato;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Wrapper>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Wrapper>
  </Layout>
);

export default IndexPage;
