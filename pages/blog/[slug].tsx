import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Router from "next/router";
import React from "react";
import client, { urlFor } from "../../client";
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

      <div className="relative w-full h-[70vh]">
        <Image
          src={
            post.mainImage ? urlFor(post.mainImage).url() : "/assets/code.jpg"
          }
          alt=""
          layout="fill"
          quality={100}
          objectFit="cover"
          placeholder="blur"
          blurDataURL="/assets/blur.png"
        />
      </div>

      <h1>{post.title}</h1>
      <span>By {post.author}</span>
      <br />
      {post?.body.map((parts) => {
        let Tag = parts.children[0]._type;
        return (
          <div key={parts.children[0].text}>
            <Tag>{parts.children[0].text}</Tag>
            <br />
          </div>
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
      mainImage,
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
