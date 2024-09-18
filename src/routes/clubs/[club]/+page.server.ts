import { error } from '@sveltejs/kit';
import yacc from '$lib/assets/yacc.webp'
import cognifai from '$lib/assets/cognifai.webp'
import finance from '$lib/assets/finance.webp'
import robotics from '$lib/assets/robotics.webp'
import stellar from '$lib/assets/stellar.webp'
import ydyuthi from '$lib/assets/ydyuthi.webp'
import Nilesh from '$lib/assets/Nilesh.webp'
import Neeraj from '$lib/assets/Neeraj.webp'
import Asad from '$lib/assets/Asad.webp'
import Ashish from '$lib/assets/Ashish.webp'
import Karthikeya from '$lib/assets/Karthikeya.webp'
import Kaushik from '$lib/assets/Kaushik.webp'
import Kevin from '$lib/assets/Kevin.webp'
import Likith from '$lib/assets/Likith.webp'
import Tirumala from '$lib/assets/Tirumala.webp'

type Club = {
    name: string;
    title: string;
    content: string;
    logo: string;
    heads: {
        name: string;
        image: string;
    }[];
};

let clubs: {[key: string]: Club}  = {
    'yacc': {
        name: 'YACC',
        title: 'Coding Club of IIT PALAKKAD',
        content: "YACC (Yet Another Coding Club) is the official coding club of IIT Palakkad. It serves as a platform for students interested in computer programming, algorithms, and software development. The club organizes workshops, hackathons, coding contests, and mentoring sessions to help students enhance their coding skills, explore new technologies, and collaborate on projects. YACC aims to foster a community of enthusiastic coders who can share knowledge, solve problems, and innovate together. Whether you're a beginner or an experienced coder, YACC provides a space for growth, learning, and teamwork in the field of computer science.",
        logo: yacc,
        heads: [
            {
                name: 'Nilesh Jamre',
                image: Nilesh
            },
            {
                name: 'Neeraj Krishna N',
                image: Neeraj
            }
        ]
    },
    'cognifai': {
        name: 'CognifAI',
        title: 'AI-ML Club of IIT PALAKKAD',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus explicabo repellat nam vel adipisci laborum earum, officiis error modi minus quaerat, libero commodi quas eos dolor ratione fugiat ad!',
        logo: cognifai,
        heads: [
            {
                name: 'Likith',
                image: Likith
            },
            {
                name: 'Asad',
                image: Asad
            }
        ]
    },
    'stellar': {
        name: 'Stellar Society',
        title: 'Astronomy Club of IIT PALAKKAD',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus explicabo repellat nam vel adipisci laborum earum, officiis error modi minus quaerat, libero commodi quas eos dolor ratione fugiat ad!',
        logo: stellar,
        heads: [
            {
                name: 'Kevin',
                image: Kevin
            },
        ]
    },
    'finance': {
        name: 'Finance',
        title: 'Finance Club of IIT PALAKKAD',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus explicabo repellat nam vel adipisci laborum earum, officiis error modi minus quaerat, libero commodi quas eos dolor ratione fugiat ad!',
        logo: finance,
        heads: [
            {
                name: 'Ashish Singh',
                image: Ashish
            },
            {
                name: 'Karthikeya',
                image: Karthikeya
            }
        ]
    },
    'robotics': {
        name: 'Robotics',
        title: 'Robotics Club of IIT PALAKKAD',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus explicabo repellat nam vel adipisci laborum earum, officiis error modi minus quaerat, libero commodi quas eos dolor ratione fugiat ad!',
        logo: robotics,
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
        name: 'YDyuthi',
        title: 'YDyuthi Club of IIT PALAKKAD',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus explicabo repellat nam vel adipisci laborum earum, officiis error modi minus quaerat, libero commodi quas eos dolor ratione fugiat ad!',
        logo: ydyuthi,
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