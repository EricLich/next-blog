import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import client from "../client";
import HomePosts from "../src/components/HomePosts";
import { Post } from "../src/utils/types";

interface HomeProps {
  posts: Post[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <div>
      <HomePosts posts={posts} />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const posts = await client.fetch(`*[_type == 'post'] {
    'id': _id,
    title,
    'slug': slug.current,
    'author': author->name,
  }`);
  return {
    props: {
      posts,
    },
  };
};
