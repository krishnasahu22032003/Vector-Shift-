export const inputConfig = {

    title:"Output",

    size:{

        width:200,

        height:80

    },

    handles:{

        left:[

         {
            id:"value" , 
            type:"target"       
        }
            

        ],

        right:[]

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