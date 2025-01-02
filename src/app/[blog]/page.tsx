import React from "react";
import Image from "next/image";
const Shirts = () => {
  return (
    <div>
      <div className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
        {/* Blog Title */}
        <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
          HAPPY NEW YEAR! New Years Eve: Regular Hours | New Years Day: 11AM-7PM
          (Sales Only)
        </h1>
        {/* Featured Image */}
        <Image
          src={"/images/Frame 34.png"}
          width={500}
          height={500}
          alt="Shirt for everyone"
          className="rounded"
        />
        {/* Blog Summary Section */}
        <section>
          <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
            Summary
          </h2>
          <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            aliquid?Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cupiditate, aliquid?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Cupiditate, aliquid?
          </p>
        </section>
        {/* Author Section (Image & Bio) */}
        <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
          <Image
            src={"/images/gmb.jpg"}
            width={200}
            height={200}
            alt="author-mustafa"
            className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
          />
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-bold text-dark dark:text-light">
              Mustafa
            </h3>
            <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </section>

        {/* Main Body of Blog */}
        <p className="text-lg leading-normal text-dark/80 dark:text-light/80">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          enim voluptas totam tempore similique impedit cum autem, iure dolor
          sint maiores non officia molestias iusto accusamus voluptate
          reprehenderit dolorum? Ullam!
        </p>
      </div>
    </div>
  );
};

export default Shirts;
