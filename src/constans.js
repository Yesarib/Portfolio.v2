import { nodejs, reactjs, docker, javascript, typescript, mongodb, tailwind, git, netcore, css, html, zenpods, dockerSS, blockchain, authentication, crypto, tcr, postgre } from './assets/index'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa'
import axios from 'axios'

export const myTechs = [
    {
        id: 1,
        title: 'Node.Js',
        img: nodejs
    },
    {
        id: 2,
        title: 'ReactJs',
        img: reactjs
    },
    {
        id: 3,
        title: 'Docker',
        img: docker
    },
    {
        id: 4,
        title: 'JavaScript',
        img: javascript
    },
    {
        id: 5,
        title: 'TypeScript',
        img: typescript
    },
    {
        id: 6,
        title: 'MongoDB',
        img: mongodb
    },
    {
        id: 7,
        title: '.NET Core',
        img: netcore
    },
    {
        id: 8,
        title: 'PostgreSQL',
        img: postgre
    },
    {
        id: 9,
        title: 'Tailwind CSS',
        img: tailwind
    },
    {
        id: 10,
        title: 'Git',
        img: git
    },
    {
        id: 11,
        title: 'CSS',
        img: css
    },
    {
        id: 12,
        title: 'HTML',
        img: html
    },
]


export const links = [
    {
        id: 1,
        title: 'Mail',
        icon: FaEnvelope,
        link: 'mailto:yesaribaris23@gmail.com'
    },
    {
        id: 2,
        title: 'Github',
        icon: FaGithub,
        link: 'https://github.com/Yesarib'
    },
    {
        id: 3,
        title: 'Linkedin',
        icon: FaLinkedin,
        link: 'https://www.linkedin.com/in/barisyesari/'
    },
    {
        id: 4,
        title: 'Twitter',
        icon: FaTwitter,
        link: 'https://twitter.com/yesaribariss'
    },
    {
        id: 5,
        title: 'Instagram',
        icon: FaInstagram,
        link: 'https://www.instagram.com/barisyesari/'
    },

]

export const experiences = [
    {
        id: 1,
        title: 'Taxi App Backend Service',
        company: 'F&S Yazılım Bilişim',
        technologies: ['Node.Js', 'Socket.io', 'Payment', 'MongoDB', 'React'],
        date: '12/2023 - Current',
        details:
            [
                "As a freelance developer, I successfully implemented the backend for a taxi application using Node.js. I integrated socket communication, payment systems, and API functionalities. I enhanced real-time communication, integrated secure payment systems, and developed user-friendly APIs to ensure seamless interaction with the mobile application",
                "In addition to my backend expertise, I also work with React to create an efficient admin panel and have experience in developing static websites. This combination of skills allows me to provide end-to-end solutions, ensuring both robust functionality and an engaging user experience across various aspects of web development."
            ]
    },
    {
        id: 2,
        title: 'Intern Backend Developer',
        company: 'Intellium',
        technologies: ['.NET Core', 'Restful API', 'PostgreSQL', 'React'],
        date: '10/2023 - 01/2024',
        details:
            [
                "Worked on the Intellium Portal project using .NET Core in the backend to add new features to the company's existing technology infrastructure. My responsibilities included developing various new modules and functionalities to enhance the user experience and improve system performance. Within the scope of the project, I successfully managed steps such as analyzing feature requests, identifying technical requirements and creating appropriate solutions. I also performed regular code reviews to ensure the maintainability of the existing application and improve code quality."
            ]
    },
    {
        id: 3,
        title: 'Intern Software Engineer',
        company: 'Digital Transformation Office of the Presidency of the Republic of Turkey',
        technologies: ['Node.Js', 'Restful API', 'Socket.io', 'Blockchain', 'Solidity'],
        date: '07/2023 - 08/2023',
        details:
            [
                "Using Node.js, I developed a blockchain system from scratch that includes two applications - a 'blockchain' and a 'miner' - that communicate through sockets and implement the Proof-of-Work (PoW) algorithm. I demonstrated hands-on experience in building and integrating blockchain components by establishing seamless communication between these applications."
            ]
    },
    {
        id: 4,
        title: 'Intern Software Engineer',
        company: 'Emeltek Biomedical R&D Consulting',
        technologies: ['Unity', 'C#'],
        date: '08/2022 - 09/2022',
        details:
            [
                "While at Emeltek Biomedical R&D Consultancy, I contributed to a mobile dart game project. I employed algorithms for accurate shot calculations, dynamic target tracking, and adaptive difficulty levels to provide users with an entertaining experience while enhancing cognitive skills."
            ]
    },
]


export const getProjects = async () => {
    const response = await axios.get("https://api.github.com/users/Yesarib/repos")
    return response.data
}

const getProjectByName = async (projectName) => {
    const projects = await getProjects();

    return projects.find(project => project.name === projectName);
}

export const getProjectsArray = async () => {
    const ZenPods = await getProjectByName('ZenPods')
    const Blockchain = await getProjectByName('Blockchain')
    const BasicMicroserviceECommerce = await getProjectByName('Basic-Microservice-E-Commerce')
    const Authentication = await getProjectByName('Authentication')
    const Crypto = await getProjectByName('Crypto-Website-Project')
    const MovieApp = await getProjectByName("MovieApp-Token-Cache-Redis")

    return [
        {
            id: BasicMicroserviceECommerce?.id,
            project_detail: BasicMicroserviceECommerce,
            project_image: dockerSS
        },
        {
            id: ZenPods.id,
            project_detail: ZenPods,
            project_image: zenpods
        },
        {
            id: Blockchain.id,
            project_detail: Blockchain,
            project_image: blockchain
        },
        {
            id: Authentication.id,
            project_detail: Authentication,
            project_image: authentication
        },
        {
            id: Crypto.id,
            project_detail: Crypto,
            project_image: crypto
        },
        {
            id: MovieApp.id,
            project_detail: MovieApp,
            project_image: tcr
        },
    ]
}

export const getQuotes = async () => {
    const response = await axios.get('https://api.api-ninjas.com/v1/quotes?category=hope', {
        headers: {
            'X-Api-Key': 'HyAi9cOs9KdD+XlnNi9DNw==jKk4XwPNmqlWRihu'
        }
    });

    return response.data;
}

// const quote = await getQuotes();

// export const quates = {
//     quote: quote
// }