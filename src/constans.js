import { nodejs, reactjs, docker, javascript, typescript, mongodb, tailwind, git, netcore, css, html, dockerSS, blockchain, authentication, crypto, postgre, rateLimit, microservice, projectStructer } from './assets/index'
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
        title: 'Full Stack Developer',
        company: 'StarSoft',
        technologies: ["Node.Js", "React", "Payment", "MongoDB", "PostgreSQL", "Docker", "Nginx"],
        date: '02/2024 - 10/2024',
        details:
            [
                "Spearheaded the development of a large-scale real-time e-ticketing platform, optimizing system architecture for high performance and scalability. Leveraged Node.js and Express microservices, with Nginx for load balancing and RabbitMQ for asynchronous message processing.",
                "Streamlined data management by integrating MongoDB and Redis, ensuring seamless deployment and management via Docker-based containerization.",
                "Delivered a full-stack web solution for an e-commerce platform, employing Node.js for backend API development and React for a responsive frontend. Managed the entire project lifecycle, ensuring timely delivery and budget adherence."
            ]
    },
    {
        id: 2,
        title: 'Freelance - Full Stack Web Developer',
        company: 'F&S Yazılım Bilişim',
        technologies: ['Node.Js', 'Socket.io', 'Payment', 'MongoDB', 'React'],
        date: '12/2023 - 04/2024',
        details:
            [
                "Developed the backend architecture for a taxi service app, integrating real-time socket communication and payment systems using Node.js. Designed secure and efficient API structures to facilitate smooth interaction between the mobile app and server.",
                "Built a React-based frontend with a focus on performance optimization and user experience, applying component-based architecture for scalability and maintainability."
            ]
    },
    {
        id: 3,
        title: 'Backend Developer',
        company: 'Intellium',
        technologies: ['.NET Core', 'Restful API', 'PostgreSQL', 'React'],
        date: '10/2023 - 01/2024',
        details:
            [
                "Contributed to the Intellium Portal project using .NET Core to enhance system functionality. Added new modules and features to boost user engagement and system efficiency.",
                "Managed end-to-end feature implementation, including technical analysis, requirement gathering, and solution design, resulting in improved system performance and user satisfaction."
            ]
    },
    {
        id: 4,
        title: 'Intern Software Engineer',
        company: 'Digital Transformation Office of the Presidency of the Republic of Turkey',
        technologies: ['Node.Js', 'Restful API', 'Socket.io', 'Blockchain', 'Solidity'],
        date: '07/2023 - 08/2023',
        details:
            [
                "Developed a blockchain-based solution from the ground up using Node.js, building two key applications—‘blockchain’ and ‘miner’—with socket-based communication and Proof-of-Work (PoW) implementation.",
                "Showcased strong expertise in blockchain technologies, demonstrating seamless integration and communication between distributed systems."
            ]
    },
    {
        id: 5,
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
    const NodejsProjectStructer = await getProjectByName("nodejs-project-structer")
    const Blockchain = await getProjectByName('Blockchain')
    const BasicMicroserviceECommerce = await getProjectByName('Basic-Microservice-E-Commerce')
    const NestBasicMicroservice = await getProjectByName('nest-basic-microservice')
    const NestjsRateLimitLoggerService = await getProjectByName('nestjs-rate-limit-logger-service') 
    const Authentication = await getProjectByName('Authentication')
    const Crypto = await getProjectByName('Crypto-Website-Project')

    return [
        {
            id: Blockchain?.id,
            project_detail: Blockchain,
            project_image: blockchain
        },
        {
            id: BasicMicroserviceECommerce?.id,
            project_detail: BasicMicroserviceECommerce,
            project_image: dockerSS
        },
        {
            id: NodejsProjectStructer?.id,
            project_detail: NodejsProjectStructer,
            project_image: projectStructer
        },
        {
            id: NestBasicMicroservice?.id,
            project_detail: NestBasicMicroservice,
            project_image: microservice
        },
        {
            id: NestjsRateLimitLoggerService?.id,
            project_detail: NestjsRateLimitLoggerService,
            project_image: rateLimit
        },
        {
            id: Authentication?.id,
            project_detail: Authentication,
            project_image: authentication
        },
        {
            id: Crypto?.id,
            project_detail: Crypto,
            project_image: crypto
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