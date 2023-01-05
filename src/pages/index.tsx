import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "components/atoms/template/layout";
import AboutSection from "./_home/about/AboutSection";
import WorkSection from "./_home/work/WorkSection";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <AboutSection />
      <WorkSection />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Jan-Kasper</title>;
