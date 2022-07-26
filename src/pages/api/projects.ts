//This is a temporary solution. Going to switch to Database + CMS once I have time.
import type { NextApiRequest, NextApiResponse } from 'next';

let data = [
    {
        name: "FCPSDB",
        id: "10001",
        description: "Fullstack web app prototype for rating/reviewing classes, teachers, and schools in my county. Worked on alongside another classmate, who worked on some of the backend.",
        features: [
            "Custom Registration & Login System.",
            "Ability to mutate server data storage in a controlled fashion (ex: Reviews).",
            "Speedy, obtains a 98-100 on lighthouse performance metrics.",
            "Secure, not vulnerable to any common web exploits.",
            "Responsive to all screen sizes and mobile devices.",
            "Exstensible and simple to use REST API.",
            "Toggleable dark mode.",
        ],
        tags: [
            "React", "Next", "Webdev", "Frontend", "Backend", "Typescript",
        ],
        images: true,
        date: "Early Winter 2022",
        imageCount: 9
    },
    {
        name: "Akiara Website",
        id: "10002",
        description: "Prototype website frontend for a discord bot.",
        features: [
            "Discord OAuth2 intergration.",
            "Dynamic image generation (Profile Card)",
            "Modern and advanced user material design interface",
        ],
        tags: [
            "React", "Webdev", "Frontend", "Javascript",
        ],
        date: "Fall 2021",
        imageCount: 6
    },
    {
        name: "Manu CMS",
        id: "10003",
        description: "Minimalistic Fullstack Content Managment System, still a Work in Progress, developed as part of the Manu project, a fully open source platform for learning coding",
        link: "https://github.com/Manu-Opensource/CMS-Backend",
        features: [
            "Simplistic and easy to use interface",
            "Written in Golang for maximal performance",
            "Easy to use REST API for accessing database",
            "Strong authentication system",
        ],
        tags: [
            "Golang", "React", "Fullstack", "Frontend", "Backend"
        ],
        date: "Summer 2022",
        imageCount: 6
    },
    {
        name: "OpenGL Renderer",
        id: "30001",
        description: "Basic 3d rendering engine written in C++ utilizing OpenGL, also made a basic game with it.",
        features: [
            "Direct Lighting",
            "HDRI Skybox Support",
            "Texture Support",
        ],
        tags: [
            "C++", "OpenGL"
        ],
        date: "Early Winter 2022",
        imageCount: 6
    },
    {
        name: "Core Games API Wrapper",
        id: "20001",
        description: "Node.js API Wrapper for the Core Games Rest API",
        link: "https://github.com/aphrim/coregamesjs",
        features: [
            "Wrapped over the API",
            "Simple OOP interface",
            "Well documented"
        ],
        tags: [
            "Node", "Backend", "Javascript",
        ],
        date: "Spring 2021",
    },
    {
        name: "Core Games PBT Generator",
        id: "20002",
        description: "A library for generating PBT files for the Core Game Engine.",
        link: "https://github.com/aphrim/corePBTGenerators",
        features: [
            "Simple OOP Interface",
        ],
        tags: [
            "Javascript", "Python",
        ],
        date: "Summer 2021",
    },
    {
        name: "Core Games Discord Bot",
        id: "20003",
        description: "A simple discord bot for accesing data from the Core Games API. It was first actual coding project other than a few games, so it was quite bad.",
        link: "https://github.com/aphrim/CoreBot",
        features: [
            "Queries data from the Core Games API.",
            "Simple for a user to self host."
        ],
        tags: [
            "Node", "Backend", "Javascript",
        ],
        date: "Late Winter 2020",
    },
];

export default async (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).send(data);
}
