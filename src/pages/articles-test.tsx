import React from "react";
import { graphql, useStaticQuery } from "gatsby";

type BlogPostProps = {
  node: {
    title: string;
    id: string;
  };
};

const Blog: React.FC = () => {
  const data = useStaticQuery(graphql`
    {
      allNotion {
        edges {
          node {
            title
            id
          }
        }
      }
    }
  `);

  const blogPosts = data.allNotion.edges;
  console.log(blogPosts);

  return (
    <>
      {blogPosts.map((blogPost: BlogPostProps) => (
        <p key={`${blogPost.node.id}`}>{blogPost.node.title}</p>
      ))}
    </>
  );
};
export default Blog;
