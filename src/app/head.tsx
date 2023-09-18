import React from 'react';
import NextHead from 'next/head';

interface HeadProps {
  title: string;
  description?: string;
}

const head: React.FC<HeadProps> = ({ title, description }) => {
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {/* Add other meta tags, stylesheets, scripts, etc., as needed */}
    </NextHead>
  );
};

export default head;