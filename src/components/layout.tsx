import { graphql, Link, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { Seo } from './seo';

type LayoutProps = {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
};

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  description,
  image,
  path,
}) => {
  const data = useStaticQuery<GetTitleQueryType>(getTitleQuery);

  const meta = data?.site?.siteMetadata;

  return (
    <>
      <Seo title={title} description={description} image={image} path={path} />

      <header>
        <Link to="/">{meta.title}</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <main>{children}</main>
    </>
  );
};

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

export default Layout;
