import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import { Layout } from "../components/template/layout";
import Title from "../components/typography/Title";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Title>Romain</Title>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Articles</title>;
