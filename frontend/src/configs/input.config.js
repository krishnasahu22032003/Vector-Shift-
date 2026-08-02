export const inputConfig = {

    title:"Input",

    size:{

        width:200,

        height:80

    },

    handles:{

        left:[

        ],

        right:[

            {

                id:"value",

                type:"source"

            }

        ]

    },

    fields:[

        {

            id:"inputName",

            label:"Name",

            type:"text",

            defaultSource:"generatedInputName"

        },

        {

            id:"inputType",

            label:"Type",

            type:"select",

            defaultValue:"Text",

            options:[

                {

                    label:"Text",

                    value:"Text"

                },

                {

                    label:"File",

                    value:"File"

                }

            ]

        }

    ]

}