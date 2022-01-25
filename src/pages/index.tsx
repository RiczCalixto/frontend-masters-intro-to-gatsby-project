import * as React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Seo } from '../components/seo';

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
      <Seo />
      <header>
        <Link to="/">{meta?.title}</Link>
      </header>
      <main>
        <Link to="/about">Go about</Link>
      </main>
    </>
  );
}
