import { ReactHTML } from "react";

export type Post = {
  id: string;
  title: string;
  slug: string;
  author: string;
  body: PostBody[];
};

export type PostBody = {
  children: {
    text: string;
    _type: keyof ReactHTML;
  }[]
}