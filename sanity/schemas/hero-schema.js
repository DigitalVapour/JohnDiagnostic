const herosection = {
    name: 'herosection',
    title: 'Hero Section',
    type: 'document',
    fields: [
        {
            name: "heading",
            title: "Heading",
            type: "string",
        },
        {
            name: "paragraph",
            title: "Paragraph",
            type: "text",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            fields: [
                {
                name: "alt",
                title: "Alternative Text",
                type: "string",
                }
            ]
        }
    ]
}

export default herosection;