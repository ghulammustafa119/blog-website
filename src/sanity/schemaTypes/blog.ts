import { defineType, defineField,defineArrayMember} from "sanity";

export const blog = defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        defineArrayMember
        ({
          type: "block",
        }),
      ],
    }),
    defineField({
      name:"author",
      type:"reference",
      title:"Author",
      to:[
        {
        type:"author",
        }
      ]
    })
  ],
});
