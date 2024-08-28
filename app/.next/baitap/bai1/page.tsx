import React from 'react';

const PostsPage = ({ posts }) => {
  return (
    <div>
      <h1>Danh Sách Bài Viết</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Sử dụng getServerSideProps để lấy dữ liệu SSR
export async function getServerSideProps(post:any) {
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default PostsPage;