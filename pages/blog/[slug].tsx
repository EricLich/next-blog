import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Router from "next/router";
import React from "react";
import client from "../../client";
import { Post } from "../../src/utils/types";

interface BlogPostProps {
  post: Post;
}

const BlogPost: NextPage<BlogPostProps> = ({ post }) => {
  return (
    <>
      <button
        onClick={() => Router.back()}
        className="py-2 px-4 rounded-full bg-slate-800 text-white my-2 border-[1px] border-slate-800 hover:bg-transparent hover:text-black !hover:border-slate-50 duration-300"
      >
        {"<- Go back!"}
      </button>
      <br />
      <h1>{post.title}</h1>
      <span>By {post.author}</span>
      <br />
      {post?.body.map((parts) => {
        let Tag = parts.children[0]._type;
        return (
          <>
            <Tag key={parts.children[0].text}>{parts.children[0].text}</Tag>
            <br />
          </>
        );
      })}
    </>
  );
};

export default BlogPost;

export const getStaticProps: GetStaticProps = async (context) => {
  //@ts-ignore
  const { slug } = context.params;
  const post = await client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0] {
      'id': _id,
      title,
      'slug': slug.current,
      'author': author->name,
      body,
    }
  `,
    { slug }
  );
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug: any) => ({ params: { slug } })),
    fallback: "blocking",
  };
};
