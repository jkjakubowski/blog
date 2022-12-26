import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link } from "gatsby";
import { Layout } from "../components/template/layout";
import Title from "../components/typography/Title";
import DescriptionCard from "../components/molecules/DescriptionCard";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Title text-color-purple>Toto</Title>
      <DescriptionCard></DescriptionCard>
      <Link to="/articles">Articles</Link>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Jan-Kasper</title>;
