import { PortableTextBlock } from "next-sanity";



 type SanityImage = {
  asset: {
    _ref: string;
    _type: "reference";
  };
};

export type Blog = {
  title: string;
  description: string;
  image: SanityImage; 
  slug: string;
  content: PortableTextBlock[]; 
  author: {
    name: string;
    bio: string;
    image: SanityImage;
  };
};