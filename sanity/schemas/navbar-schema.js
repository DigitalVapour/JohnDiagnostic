const navItem = {
    name: "navItem",
    title: "Nav Items",
    type: "document",
    fields: [
        {
            name: "logo",
            title: "Logo",
            type: "image",
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string"
                }
            ]
        },
        {
            name: "companyName",
            title: "Company Name",
            type: "string"
        },
        {
            name: "phoneNumber",
            title: "Phone Number",
            type: "string"
        }

    ]
}

export default navItem;