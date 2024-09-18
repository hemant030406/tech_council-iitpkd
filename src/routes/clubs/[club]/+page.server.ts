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
        content: 'CognifAI aims to provide a platform for students to explore, learn, and create with AI, empowering them to understand and contribute to these transformative technologies shaping our world. Our mission is to cultivate a thriving AI culture within IIT Palakkad, where exploration and innovation know no bounds',
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
        content: 'The Stellar Society - Astronomy Club of IIT Palakkad is a student-led club dedicated to exploring the wonders of the universe. Through stargazing sessions, discussions, and workshops, the club provides a platform for students to delve into astronomy, astrophysics, and space exploration. It fosters curiosity and scientific inquiry, inspiring a deeper understanding of the cosmos.',
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
        content: 'The Finance Club of IIT Palakkad is dedicated to enhancing financial literacy and fostering a deeper understanding of finance and economics among students. The club organizes workshops, seminars, and competitions on topics like investment strategies, financial markets, and personal finance management, providing a platform for members to develop analytical skills and engage with real-world financial challenges.',
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
        content: 'The Robotics Club of IIT Palakkad is a student-driven initiative aimed at fostering innovation and hands-on learning in the field of robotics. The club provides a platform for students to explore and develop robotics projects, participate in competitions, and collaborate on cutting-edge technologies, helping members gain practical skills in electronics, mechanics, and programming.',
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
        title: 'Electrical Club of IIT PALAKKAD',
        content: 'Y-dyuthi is the official electrical club of IIT Palakkad, it is a place for students to explore their curiosity regarding all things circuits be it analog or digital. The students and members of the club get together to have club discussions about a variety of projects and workshops. Some of the the workshops conducted so far include: (a) Familiarising with the use of DSO. (b) State space modeling- An introduction to control systems. (c) Introduction to designing PCBs using KiCAD. (d) Modeling of DC-DC Buck Convertor using Matlab.',
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