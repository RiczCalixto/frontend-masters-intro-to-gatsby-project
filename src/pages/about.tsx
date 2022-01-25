import { Link } from 'gatsby';
import * as React from 'react';
import { Seo } from '../components/seo';

export default function AboutPage() {
  return (
    <>
      <Seo title="About this Site" description="More info about this site" />
      <main>
        <h1>About page da silva sauro</h1>
        <Link to="/">Go home</Link>
      </main>
    </>
  );
}
