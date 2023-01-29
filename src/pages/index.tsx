import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "components/atoms/template/layout";
import AboutSection from "./_home/about/AboutSection";
import WorkSection from "./_home/work/WorkSection";
import LastArticles from "./_home/last_articles/LastArticles";
import StudiesSection from "./_home/studies/StudiesSection";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Layout>
        <AboutSection />
        <WorkSection />
        <StudiesSection />
        <LastArticles />
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Jan-Kasper</title>;
