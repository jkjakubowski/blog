import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import { Layout } from "components/atoms/template/layout";
import Title from "components/atoms/typography/Title";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Title>Romain</Title>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Articles</title>;
