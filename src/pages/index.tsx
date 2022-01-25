import * as React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

const getTitleQuery = graphql`
  query GetTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

type GetTitleQueryType = { site: { siteMetadata: { title: string } } };

export default function IndexPage() {
  const data = useStaticQuery<GetTitleQueryType>(getTitleQuery);

  const meta = data?.site?.siteMetadata;

  return (
    <>
      <header>
        <Link to="/">{meta?.title}</Link>
      </header>
      <main>
        <Link to="/about">Go about</Link>
      </main>
    </>
  );
}
