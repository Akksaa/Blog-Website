import { defineField, defineType } from "sanity";

export const postType = defineType({
    name: 'Blog', //for identification
    title: 'New Blog',
    type: 'document',
    fields: [
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            description: 'The Image of your Blog Post.',
        }),
        defineField({
            name: "authorimage",
            title: "Author Image",
            type: "image",
            description: 'The Image of the Author of your Blog Post.',
        }),
        defineField({
            name: "authorname",
            title: "Author Name",
            type: "string",
            description: 'The Name of the Author of your Blog Post.',
        }),
        defineField({
            name: 'title',
            title: 'Blog Title',
            type: 'string',
            description: 'The Title of your Blog Post.'
        }),
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
            description: 'The Heading of your Blog Post.'
        }),
        defineField({
            name: 'content',
            title: 'Blog Content',
            type: 'string',
            description: 'The Content of your Blog Post.'
        }),
        defineField({
            name: "slug",
            title: "slug",
            type: "slug",
            description: 'The Slug of your Blog Post (slug should be like this e.g. blog-1, blog-2 etc).',
        })

    ]
})
