import {
    FaReact,
    FaHtml5,
    FaCss3,
    FaNodeJs,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLaravel,
    FaBootstrap
} from 'react-icons/fa';

import { BiLogoJavascript} from 'react-icons/bi'
import { SiExpress, SiMongodb, SiMysql, SiWebpack} from 'react-icons/si'
import  { VscVscode, VscCommentUnresolved, VscTerminalPowershell} from 'react-icons/vsc'
import  { FaGitAlt,FaXTwitter,FaDribbble} from 'react-icons/fa6'
import  { MdDescription, MdGroups3} from 'react-icons/md'

import Edemy from '../assets/images/Edemy.png'
import Taskify from '../assets/images/Taskify.png'

export const MENU_LINKS = [
    { id: "01", label: "Home", offset: -100, to: "hero" },
    { id: "02", label: "Skills", offset: -80, to: "skills" },
    { id: "03", label: "About Me", offset: -80, to: "about" },
    { id: "04", label: "Projects", offset: -80, to: "projects" },
    { id: "05", label: "Contact", offset: -80, to: "contact" },
];

// export const STATS = [
//     { id: "01", count: "10", label: `Years of \nExperience`},
//     { id: "02", count: "12", label: `Certifications \nEarned`},
//     { id: "03", count: "4y", label: `Projects \nCompleted` },
//     { id: "04", count: "37+", label: `Happly \nClients` },
// ]
export const STATS = [
    { id: "01", count: "100+", label: "Problems\nSolved" },
    { id: "02", count: "2", label: "Personal\nProjects" },
    { id: "03", count: "3", label: "Academic\nProjects" },
    { id: "04", count: "3.84", label: "CGPA\n(out of 4.0)" },
];

export const SKILL_TABS = [
    { id: "01", label: "All", value: "all" },
    { id: "02", label: "Frontend", value: "frontend" },
    { id: "03", label: "Backend", value: "backend" },
    { id: "04", label: "Tools", value: "tools" },
    // { id: "05", label: "Skills", value: "soft-skills" },
    { id: "05", label: "Database", value: "database" },
]

// export const SKILLS = [
//     {
//         id: "01",
//         icon: FaReact,
//         skill: "React.js",
//         progress: 95,
//         type: "frontend",
//         description: "Experienced in building scalable, component-driven web applications using React.js.",
//     },
//     {
//         id: "02",
//         icon: FaHtml5,
//         skill: "HTML5",
//         progress: 98,
//         type: "frontend",
//         description: "Expert in structuring semantic and accessible HTML5 markup.",
//     },
//     {
//         id: "03",
//         icon: FaCss3,
//         skill: "CSS3",
//         progress: 90,
//         type: "frontend",
//         description: "Strong understanding of modern CSS techniques, including Flexbox and Grid.",
//     },
//     {
//         id: "04",
//         icon: BiLogoJavascript,
//         skill: "JavaScript",
//         progress: 92,
//         type: "frontend",
//         description: "Experienced in writing efficient and optimized JavaScript code.",
//     },
//     {
//         id: "05",
//         icon: FaNodeJs,
//         skill: "Node.js",
//         progress: 85,
//         type: "backend",
//         description: "Proficient in building RESTful APIs and server-side applications with Node.js.",
//     },
//     {
//         id: "06",
//         icon: SiExpress,
//         skill: "Express.js",
//         progress: 80,
//         type: "backend",
//         description: "Experienced in creating fast and scalable backend applications using Express.js.",
//     },
//     {
//         id: "07",
//         icon: SiMongodb,
//         skill: "MongoDB",
//         progress: 80,
//         type: "database",
//         description: "Skilled in designing NoSQL databases and working with MongoDB for data storage.",
//     },
//     {
//         id: "08",
//         icon: SiMysql,
//         skill: "MySQL",
//         progress: 75,
//         type: "database",
//         description: "Knowledgeable in relational databases and MySQL query optimization.",
//     },
//     {
//         id: "09",
//         icon: SiWebpack,
//         skill: "Webpack",
//         progress: 70,
//         type: "tools",
//         description: "Capable of optimizing and bundling JavaScript applications using Webpack.",
//     },
//     {
//         id: "10",
//         icon: VscVscode,
//         skill: "VS Code",
//         progress: 95,
//         type: "tools",
//         description: "Expert in using Visual Studio Code for efficient coding and debugging.",
//     },
//     {
//         id: "11",
//         icon: VscTerminalPowershell,
//         skill: "PowerShell",
//         progress: 70,
//         type: "tools",
//         description: "Familiar with using PowerShell for automation and command-line tasks.",
//     },
//     {
//         id: "12",
//         icon: FaGitAlt,
//         skill: "Git",
//         progress: 85,
//         type: "tools",
//         description: "Experienced in version control and collaboration using Git.",
//     },
//     {
//         id: "13",
//         icon: MdDescription,
//         skill: "Documentation",
//         progress: 80,
//         type: "soft-skill",
//         description: "Proficient in writing clear and effective documentation for projects.",
//     },
//     {
//         id: "14",
//         icon: MdGroups3,
//         skill: "Team Collaboration",
//         progress: 90,
//         type: "soft-skill",
//         description: "Strong ability to work in teams and collaborate effectively on projects.",
//     },
// ];
export const SKILLS = [
    // Frontend Skills
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
    }
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
//         image: 'https://picsum.photos/id/870/200/300', // Replace with actual image import or path
//         tags: ["React", "Clerk", "Tailwind CSS", "React Router DOM"],
//         description: "A modern Learning Management System (LMS) that allows users to manage and track their learning progress efficiently.",
//         github: "https://github.com/rajpuc/SkillTrack-LMS", // Replace with actual link if available
//         liveDemo: "#", // Replace with live link if deployed
//     },
//     {
//         id: 2,
//         title: "Taskify | Todo App with Authentication",
//         image: 'https://picsum.photos/id/871/200/300', // Replace with actual image import or path
//         tags: ["Express.js", "MongoDB", "EJS", "Tailwind CSS", "Flowbite"],
//         description: "A feature-rich todo app with user authentication, task management, and email verification.",
//         github: "https://github.com/rajpuc/Taskify", // Replace with actual link if available
//         liveDemo: "#", // Replace with live link if deployed
//     },
//     {
//         id: 3,
//         title: "Prosis | Project & Thesis Management System",
//         image: 'https://picsum.photos/id/872/200/300', // Replace with actual image import or path
//         tags: ["MERN", "Bootstrap", "MongoDB"],
//         description: "A platform for managing project and thesis workflows, enabling students and faculty to collaborate effectively.",
//         github: "#", // Replace with actual link if available
//         liveDemo: "#", // Replace with live link if deployed
//     },
//     {
//         id: 4,
//         title: "Smart Enrollment Management System",
//         image: 'https://picsum.photos/id/873/200/300', // Replace with actual image import or path
//         tags: ["MERN", "SQL"],
//         description: "An enrollment management system designed to streamline student registration and course selection.",
//         github: "#", // Replace with actual link if available
//         liveDemo: "#", // Replace with live link if deployed
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
        title: "SkillTrack-LMS | Learning Management System",
        image: Edemy, // Replace with actual image import or path
        tags: ["React", "Clerk", "Tailwind CSS", "React Router DOM"],
        description: "A modern Learning Management System (LMS) that allows users to manage and track their learning progress efficiently.",
        github: "https://github.com/rajpuc/SkillTrack-LMS", // Replace with actual link if available
        liveDemo: "https://learning-management-system-orcin.vercel.app/", // Replace with live link if deployed
    },
    {
        id: 2,
        title: "Taskify | Todo App with custom Authentication",
        image: Taskify, // Replace with actual image import or path
        tags: ["Express.js", "MongoDB", "EJS", "Tailwind CSS", "Flowbite"],
        description: "A feature-rich todo app with user authentication, task management, and email verification.",
        github: "https://github.com/rajpuc/Taskify", // Replace with actual link if available
         // Replace with live link if deployed
    },
    {
        id: 3,
        title: "Prosis | Project & Thesis Management System",
        image: 'https://picsum.photos/id/872/200/300', // Replace with actual image import or path
        tags: ["MERN", "Bootstrap", "MongoDB"],
        description: "A platform for managing project and thesis workflows, enabling students and faculty to collaborate effectively.",
        // github: "#", // Replace with actual link if available
        // liveDemo: "#", // Replace with live link if deployed
    },
    {
        id: 4,
        title: "Smart Enrollment Management System",
        image: 'https://picsum.photos/id/873/200/300', // Replace with actual image import or path
        tags: ["MERN", "SQL"],
        description: "An enrollment management system designed to streamline student registration and course selection.",
        // github: "#", // Replace with actual link if available
        // liveDemo: "#", // Replace with live link if deployed
    },
    {
        id: 5,
        title: "Automatic Image Captioning in Bengali",
        image: 'https://picsum.photos/id/874/200/300', // Replace with actual image import or path
        tags: ["Python", "CNN", "Transformer"],
        description: "A deep learning project that generates Bengali captions for images using CNN and Transformer models.",
        github: "#", // Replace with actual link if available
        liveDemo: "#", // Replace with live link if deployed
    }
];
