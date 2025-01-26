import React from 'react';
import PageTemplate from './PageTemplate';
import ReactMarkdown from 'react-markdown';
import posts from './posts.json';

const Blog = () => {
  return (
    <PageTemplate title='Blog'>
      {posts.map(post => (
        <ReactMarkdown key={post.filename} children={post.content} />
      ))}
    </PageTemplate>
  );
};

export default Blog;
