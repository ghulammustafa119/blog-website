
import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import CommentBox from "@/components/comment";
import { Blog } from "@/app/type";


const Page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const query = `*[_type == 'blog' && slug.current == "${slug}"][0]{
    title, description, image, content,
    author -> { bio, image, name }
  }`;

  const data: Blog | null = await client.fetch(query);

  if (!data) {
    return <p className="text-center text-red-500">Blog post not found.</p>;
  }

  return (
    <div>
      <div className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
        {/* Blog Title */}
        <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
          {data.title}
        </h1>

        {/* Featured Image */}
        {data.image && (
          <Image
            src={urlFor(data.image).url()}
            width={500}
            height={500}
            alt={data.title}
            className="rounded"
          />
        )}

        {/* Blog Summary Section */}
        <section>
          <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
            Summary
          </h2>
          <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
            {data.description}
          </p>
        </section>

        {/* Author Section */}
        {data.author && (
          <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
            {data.author.image && (
              <Image
                src={urlFor(data.author.image).url()}
                width={200}
                height={200}
                alt={`Author - ${data.author.name}`}
                className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
              />
            )}
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-bold text-dark dark:text-light">
                {data.author.name}
              </h3>
              <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
                {data.author.bio}
              </p>
            </div>
          </section>
        )}

        {/* Main Body of Blog */}
        <section className="text-lg leading-normal text-dark/80 dark:text-light/80">
          <PortableText value={data.content} />
          <CommentBox />
        </section>
      </div>
    </div>
  );
};

export default Page;
