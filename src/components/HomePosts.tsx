import Link from "next/link";
import React from "react";
import { Post } from "../utils/types";

interface HomePostsProps {
  posts: Post[];
}

const HomePosts: React.FC<HomePostsProps> = ({ posts }) => {
  return (
    <div>
      {posts?.map((post) => (
        <article key={post.id}>
          <Link href={`/blog/${post.slug}`}>
            <a>{post.title}</a>
          </Link>
          <span> by - {post.author}</span>
        </article>
      ))}
    </div>
  );
};

export default HomePosts;
