import {
    FaBolt,
    FaBootstrap,
    FaCheckCircle,
    FaCss3,
    FaDatabase,
    FaFacebook,
    FaHtml5,
    FaKey,
    FaLaravel,
    FaLinkedin,
    FaNodeJs,
    FaReact,
    FaRoute
} from 'react-icons/fa';

import { BiLogoJavascript } from 'react-icons/bi';
import { FaGitAlt, FaXTwitter } from 'react-icons/fa6';
import { SiExpress, SiMongodb, SiMysql } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

import Edemy from '../assets/images/Edemy.png';
import Taskify from '../assets/images/taskify.png';
import Chatverse from '../assets/images/chatverse.png';

export const MENU_LINKS = [
    { id: "01", label: "Home", offset: -100, to: "hero" },
    { id: "02", label: "Skills", offset: -80, to: "skills" },
    { id: "03", label: "About Me", offset: -80, to: "about" },
    { id: "04", label: "Projects", offset: -80, to: "projects" },
    { id: "05", label: "Contact", offset: -80, to: "contact" },
];


export const STATS = [
    { id: "01", count: "100+", label: "Problems\nSolved" },
    { id: "04", count: "3.84", label: "CGPA\n(out of 4.0)" },
];

export const SKILL_TABS = [
    { id: "01", label: "All", value: "all" },
    { id: "02", label: "Frontend", value: "frontend" },
    { id: "03", label: "Backend", value: "backend" },
    { id: "04", label: "Tools", value: "tools" },
    { id: "05", label: "Database", value: "database" },
]


export const SKILLS = [
    {
        id: "01",
        icon: FaReact,
        skill: "React.js",
        progress: 90,
        type: "frontend",
        description: "Proficient in building scalable, component-driven web applications using React.js.",
    },
    {
        id: "02",
        icon: FaHtml5,
        skill: "HTML5",
        progress: 98,
        type: "frontend",
        description: "Expert in structuring semantic and accessible HTML5 markup.",
    },
    {
        id: "03",
        icon: FaCss3,
        skill: "CSS3 & Tailwind CSS",
        progress: 90,
        type: "frontend",
        description: "Strong understanding of modern CSS techniques, including Flexbox, Grid, and Tailwind CSS.",
    },
    {
        id: "04",
        icon: BiLogoJavascript,
        skill: "JavaScript",
        progress: 92,
        type: "frontend",
        description: "Experienced in writing efficient and optimized JavaScript code.",
    },

    // Backend Skills
    {
        id: "05",
        icon: FaNodeJs,
        skill: "Node.js",
        progress: 85,
        type: "backend",
        description: "Proficient in building RESTful APIs and server-side applications with Node.js.",
    },
    {
        id: "06",
        icon: SiExpress,
        skill: "Express.js",
        progress: 80,
        type: "backend",
        description: "Experienced in creating fast and scalable backend applications using Express.js.",
    },
    {
        id: "07",
        icon: FaLaravel,
        skill: "Laravel",
        progress: 70,
        type: "backend",
        description: "Basic knowledge of building web applications using Laravel.",
    },

    // Database Skills
    {
        id: "08",
        icon: SiMongodb,
        skill: "MongoDB",
        progress: 80,
        type: "database",
        description: "Skilled in designing NoSQL databases and working with MongoDB for data storage.",
    },
    {
        id: "09",
        icon: SiMysql,
        skill: "SQL",
        progress: 75,
        type: "database",
        description: "Knowledgeable in relational databases and SQL query optimization.",
    },
    
    // Tools Skills
    {
        id: "10",
        icon: FaGitAlt,
        skill: "Git",
        progress: 85,
        type: "tools",
        description: "Experienced in version control and collaboration using Git.",
    },
    {
        id: "11",
        icon: VscVscode,
        skill: "VS Code",
        progress: 95,
        type: "tools",
        description: "Expert in using Visual Studio Code for efficient coding and debugging.",
    },

    // Additional Skills
    {
        id: "12",
        icon: FaBootstrap,
        skill: "Bootstrap",
        progress: 80,
        type: "frontend",
        description: "Skilled in responsive design and UI components using Bootstrap.",
    },
    {
        id: "13",
        icon: FaReact,
        skill: "Zustand",
        progress: 85,
        type: "frontend",
        description: "Efficiently managing global state with a minimalistic and scalable approach.",
    },
    {
        id: "14",
        icon: FaRoute,
        skill: "React Router DOM",
        progress: 90,
        type: "frontend",
        description: "Proficient in client-side routing with dynamic and nested routes.",
    },{
        id: "15",
        icon: FaDatabase,
        skill: "Context API",
        progress: 88,
        type: "frontend",
        description: "Expertise in managing application state without prop drilling using React Context API.",
    },
    {
        id: "16",
        icon: FaReact,
        skill: "Redux",
        progress: 90,
        type: "frontend",
        description: "Expert in managing complex state efficiently with Redux and middleware like Redux Thunk.",
    },
    {
        id: "17",
        icon: FaCheckCircle,
        skill: "express-validator",
        progress: 85,
        type: "backend",
        description: "Validating and sanitizing request data in Express applications efficiently.",
    },
    {
        id: "18",
        icon: FaBolt,
        skill: "Socket.IO",
        progress: 90,
        type: "backend",
        description: "Building real-time, bidirectional communication using WebSockets with Socket.IO.",
    },
    {
        id: "19",
        icon: FaKey,
        skill: "jsonwebtoken",
        progress: 88,
        type: "backend",
        description: "Implementing secure authentication and authorization with JWT in Node.js applications.",
    },
    
    
];


export const ABOUT_ME = {
    content: `I'm a dedicated MERN Stack Developer with a strong foundation in building scalable and user-friendly web applications. 

    I hold a BSc in Computer Science and Engineering from Premier University with a CGPA of 3.84. My expertise includes JavaScript, React, Node.js, Express.js, MongoDB, and Tailwind CSS. I focus on creating efficient, high-performance web solutions.

    I'm passionate about problem-solving, having solved 100+ coding challenges across various online judges. My goal is to continuously enhance my skills and contribute to impactful projects in web development.`,

    socialLinks: [
        { id: "01", label: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/ajoypal.raj" },
        { id: "03", label: "Twitter", icon: FaXTwitter, link: "https://x.com/1725_b56335" },
        { id: "04", label: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/rajesh-pal25" },
        { id: "05", label: "GitHub", icon: FaGitAlt, link: "https://github.com/rajpuc" },
    ],

    email: "ajoypal.raj@gmail.com",
    phone: "+880 1839764101",
    website: "https://github.com/rajpuc",
};


// export const PROJECTS = [
//     {
//         id: 1,
//         title: "SkillTrack-LMS | Learning Management System",
//         image: Edemy, // Replace with actual image import or path
//         tags: ["React", "Clerk", "Tailwind CSS", "React Router DOM"],
//         description: "A modern Learning Management System (LMS) that allows users to manage and track their learning progress efficiently.",
//         github: "https://github.com/rajpuc/SkillTrack-LMS", // Replace with actual link if available
//         liveDemo: "https://learning-management-system-orcin.vercel.app/", // Replace with live link if deployed
//     },
//     {
//         id: 2,
//         title: "Taskify | Todo App with custom Authentication",
//         image: Taskify, // Replace with actual image import or path
//         tags: ["Express.js", "MongoDB", "EJS", "Tailwind CSS", "Flowbite"],
//         description: "A feature-rich todo app with user authentication, task management, and email verification.",
//         github: "https://github.com/rajpuc/Taskify", // Replace with actual link if available
//          // Replace with live link if deployed
//     },
//     {
//         id: 3,
//         title: "Prosis | Project & Thesis Management System",
//         image: 'https://picsum.photos/id/872/200/300', // Replace with actual image import or path
//         tags: ["MERN", "Bootstrap", "MongoDB"],
//         description: "A platform for managing project and thesis workflows, enabling students and faculty to collaborate effectively.",
//         // github: "#", // Replace with actual link if available
//         // liveDemo: "#", // Replace with live link if deployed
//     },
//     {
//         id: 4,
//         title: "Smart Enrollment Management System",
//         image: 'https://picsum.photos/id/873/200/300', // Replace with actual image import or path
//         tags: ["MERN", "SQL"],
//         description: "An enrollment management system designed to streamline student registration and course selection.",
//         // github: "#", // Replace with actual link if available
//         // liveDemo: "#", // Replace with live link if deployed
//     },
//     {
//         id: 5,
//         title: "Automatic Image Captioning in Bengali",
//         image: 'https://picsum.photos/id/874/200/300', // Replace with actual image import or path
//         tags: ["Python", "CNN", "Transformer"],
//         description: "A deep learning project that generates Bengali captions for images using CNN and Transformer models.",
//         github: "#", // Replace with actual link if available
//         liveDemo: "#", // Replace with live link if deployed
//     }
// ];
export const PROJECTS = [
    {
        id: 1,
        title: "ChatVerse | Real-Time Chat Application",
        image: Chatverse, 
        tags: ["React", "Tailwind CSS", "Express", "Node.js", "MongoDB", "Zustand", "Socket.io"],
        description: "A feature-rich real-time chat application with user authentication, private messaging, and group chats.",
        github: "https://github.com/rajpuc/RealTimeChattingApp", 
        liveDemo: "https://chatverse-nmaf.onrender.com/", 
    },
    {
        id: 2,
        title: "SkillTrack-LMS | Learning Management System",
        image: Edemy, // Replace with actual image import or path
        tags: ["React", "Clerk", "Tailwind CSS", "React Router DOM"],
        description: "A modern Learning Management System (LMS) that allows users to manage and track their learning progress efficiently.",
        github: "https://github.com/rajpuc/SkillTrack-LMS", // Replace with actual link if available
        liveDemo: "https://learning-management-system-orcin.vercel.app/", // Replace with live link if deployed
    },
    {
        id: 3,
        title: "Taskify | Todo App with custom Authentication",
        image: Taskify, // Replace with actual image import or path
        tags: ["Express.js", "MongoDB", "EJS", "Tailwind CSS", "Flowbite"],
        description: "A feature-rich todo app with user authentication, task management, and email verification.",
        github: "https://github.com/rajpuc/Taskify", // Replace with actual link if available
    },
    {
        id: 4,
        title: "Prosis | Project & Thesis Management System",
        image: 'https://picsum.photos/id/872/200/300', // Replace with actual image import or path
        tags: ["MERN", "Bootstrap", "MongoDB"],
        description: "A platform for managing project and thesis workflows, enabling students and faculty to collaborate effectively.",
    },
    {
        id: 5,
        title: "Smart Enrollment Management System",
        image: 'https://picsum.photos/id/873/200/300', // Replace with actual image import or path
        tags: ["MERN", "SQL"],
        description: "An enrollment management system designed to streamline student registration and course selection.",
    },
    {
        id: 6,
        title: "Automatic Image Captioning in Bengali",
        image: 'https://picsum.photos/id/874/200/300', // Replace with actual image import or path
        tags: ["Python", "CNN", "Transformer"],
        description: "A deep learning project that generates Bengali captions for images using CNN and Transformer models.",
        github: "#", // Replace with actual link if available
        liveDemo: "#", // Replace with live link if deployed
    }
];

