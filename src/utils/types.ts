import { ReactHTML } from "react";

export type Post = {
  id: string;
  title: string;
  slug: string;
  author: string;
  body: PostBody[];
  mainImage?: any;
};

export type PostBody = {
  children: {
    text: string;
    _type: keyof ReactHTML;
  }[]
}