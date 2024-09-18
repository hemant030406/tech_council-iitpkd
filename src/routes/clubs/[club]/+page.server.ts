import { error } from '@sveltejs/kit';

let clubs = {
    'yacc':{
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
    }
}


/** @type {import('./$types').PageLoad} */
    export function load({ params }) {
    if (params.club === 'hello-world') { 
        return { 
            title: 'Hello world!',
            content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
        }; 
    }
    error(404, 'Not found');
}