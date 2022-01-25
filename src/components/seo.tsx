import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const metadataQuery = graphql`
  query MetadataQuery {
    site {
      siteMetadata {
        description
        description
        siteUrl
        title
      }
    }
  }
`;

type MetaDataQueryType = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      image: string;
      siteUrl: string;
    };
  };
};

export const Seo = (props) => {
  const data = useStaticQuery<MetaDataQueryType>(metadataQuery);

  const defaults = data?.site?.siteMetadata;

  const title = props.title || defaults.title;
  const description = props.description || defaults.description;
  const image = new URL(
    props.image || defaults.image,
    defaults.siteUrl,
  ).toString();
  const url = new URL(props.path || '/', defaults.siteUrl).toString();

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {image && <meta name="image" content={image} />}

      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta name="og:image" content={image} />}
      

    </Helmet>
  );
};
