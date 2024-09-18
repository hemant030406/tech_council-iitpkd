import { error } from '@sveltejs/kit';

type Club = {
    name: string;
    title: string;
    content: string;
    heads: {
        name: string;
        image: string;
    }[];
};

let clubs: {[key: string]: Club}  = {
    'yacc': {
        name: 'YACC',
        title: 'Coding Club of IIT PALAKKAD',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus explicabo repellat nam vel adipisci laborum earum, officiis error modi minus quaerat, libero commodi quas eos dolor ratione fugiat ad!',
        heads: [
            {
                name: 'Nilesh Jamre',
                image: ''
            },
            {
                name: 'Neeraj Krishna N',
                image: ''
            }
        ]
    },
    'cognifai': {
        name: 'CognifAI',
        title: 'AI-ML Club of IIT PALAKKAD',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus explicabo repellat nam vel adipisci laborum earum, officiis error modi minus quaerat, libero commodi quas eos dolor ratione fugiat ad!',
        heads: [
            {
                name: 'Nilesh Jamre',
                image: ''
            },
            {
                name: 'Neeraj Krishna N',
                image: ''
            }
        ]
    },
    'stellar': {
        name: 'Stellar Society',
        title: 'Astronomy Club of IIT PALAKKAD',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus explicabo repellat nam vel adipisci laborum earum, officiis error modi minus quaerat, libero commodi quas eos dolor ratione fugiat ad!',
        heads: [
            {
                name: 'Nilesh Jamre',
                image: ''
            },
            {
                name: 'Neeraj Krishna N',
                image: ''
            }
        ]
    },
    'finance': {
        name: 'Finance',
        title: 'Finance Club of IIT PALAKKAD',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus explicabo repellat nam vel adipisci laborum earum, officiis error modi minus quaerat, libero commodi quas eos dolor ratione fugiat ad!',
        heads: [
            {
                name: 'Nilesh Jamre',
                image: ''
            },
            {
                name: 'Neeraj Krishna N',
                image: ''
            }
        ]
    },
    'robotics': {
        name: 'YACC',
        title: 'Coding Club of IIT PALAKKAD',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus explicabo repellat nam vel adipisci laborum earum, officiis error modi minus quaerat, libero commodi quas eos dolor ratione fugiat ad!',
        heads: [
            {
                name: 'Nilesh Jamre',
                image: ''
            },
            {
                name: 'Neeraj Krishna N',
                image: ''
            }
        ]
    },
    'ydyuthi': {
        name: 'YACC',
        title: 'Coding Club of IIT PALAKKAD',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus explicabo repellat nam vel adipisci laborum earum, officiis error modi minus quaerat, libero commodi quas eos dolor ratione fugiat ad!',
        heads: [
            {
                name: 'Nilesh Jamre',
                image: ''
            },
            {
                name: 'Neeraj Krishna N',
                image: ''
            }
        ]
    },
}


/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    if (Object.keys(clubs).indexOf(params.club) == -1) {
        error(404, 'Not Found');
    }
    return clubs[params.club];
}