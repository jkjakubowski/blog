import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "components/atoms/template/layout";
import AboutSection from "./_home/about/AboutSection";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <AboutSection />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Jan-Kasper</title>;
