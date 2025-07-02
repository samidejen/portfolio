import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import cipherGuard from "@/public/cipherGuard.png";
import portfolio from "@/public/portfolio.png";
import StudyNotion from "@/public/StudyNotion.png"
import MahiStoreAdmin from "@/public/Admin.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;



export const experiencesData = [
  {
    title: "Full-Stack Developer Intern",
    location: "Debark University, Gonder, Ethiopia (On-site)",
    description: `
      Developed a Student Management Portal using PHP, MySQL, and JavaScript. 
      Implemented secure authentication and role-based access control. 
      Optimized database performance to improve query speed and overall efficiency.
    `,
    icon: React.createElement(CgWorkAlt),
    date: "June 2023 - September 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote",
    description: `
      Designed and developed a responsive eCommerce platform using React, Tailwind CSS, and TypeScript. 
      Built secure payment integrations using Stripe and Chapa, enhanced SEO, and improved application performance. 
      Worked on a complete platform rewrite including Node.js, Express, and MongoDB.
    `,
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - September 2024",
  },
  {
    title: "Network Engineering Intern",
    location: "onsite",
    description: `
   ssisted in designing, configuring, and securing the university's internal network infrastructure. 
    Implemented VLANs and firewall rules to segment traffic and enhance security. 
    Conducted routine diagnostics, documented topology changes, and supported troubleshooting 
    for routers, switches, and wireless access points across multiple departments.
    `,
    icon: React.createElement(CgWorkAlt),
    date: "August 2023 - December 2023",
  },
  {
    title: "Associate Cyber Security Consultant",
    location: "Remote",
    description: `
      I worked as an Associate Cyber Security Consultant at Security Brigade Infosec.
    `,
    icon: React.createElement(CgWorkAlt),
    date: "October 2024 - Present",
  },{
  title: "Nanodegree Graduate – Programming Foundations",
  location: "Udacity (Online)",
  description: `
    Completed the Udacity Fundamentals of Programming Nanodegree Program, gaining a strong 
    foundation in Python, problem-solving, control flow, data structures, and basic algorithms. 
    Built interactive mini-projects and scripts that demonstrated logical thinking and clean code practices.
  `,
  icon: React.createElement(CgWorkAlt) ,
  date: "August 2024",
}


] as const;


export const projectsData = [
  {
  title: "Mahi-STORE ADMIN",
  description: "the admin-facing dashboard of the platform, built to manage products, users, and orders. It empowers administrators with tools for content control, analytics, and a seamless user experience. Key features include product management with image uploads, role-based access control, order tracking, and real-time analytics dashboards powered by charts and data caching.",
  tags: ["NodeJS", "ExpressJS", "MongoDB", "TailwindCSS", "Redux Toolkit", "TypeScript", "Next.js", "Mongoose"],


  imageUrl: MahiStoreAdmin, // Replace with actual image import or path
  liveUrl: "https://mahieco.onrender.com/", // Replace with actual deployed link
}
,
  // {
  //   title: "CipherGuard",
  //   description:
  //     "Cipher Guard is a cutting-edge security application designed for robust data protection. Built on Mern , this project offers a modern and efficient platform to secure digital credentials.",
  //   tags: ["React", "MongoDB", "Tailwind", "Express"],
  //   imageUrl: cipherGuard,
  //   liveUrl:"#",
  // },
  {
    title: "Personal Portfolio",
    description:
      "I Build this Personal Portfolio to showcase my skills and interests to the world.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind",],
    imageUrl: portfolio,
    liveUrl:"https://samidejen.vercel.app",
  },
  {
 
  title: "Mahi-STORE USER",
  description: "MahiStoreUser website is a digital platform that facilitates online buying and selling of goods and services. These websites enable businesses to reach a global audience and provide consumers with a convenient and efficient shopping experience from the comfort of their homes.",
  tags: ["ReactJS", "NodeJS", "MongoDB", "ExpressJS"],
  imageUrl: StudyNotion,  // keep the same image or change if you have a new one
  liveUrl: "https://mahistore1.onrender.com/",
}

] as const;

export const skillsData = [
  "Javascript", "Python", "Bash", "HTML", "CSS", "Express.js", "Next.js", "React.js", "NoSQL", "SQL", "Linux", "Windows", "Penetration Testing",  "Exploitation", "Privilege Escalation", "Vulnerability Scanning", "Tunneling", "Kali Linux", "Nmap", "OWASP Top 10", "Wireshark", "Burpsuite", "Metasploit", "Nikto", "Hashcat", "FFUF","Aircrack-ng", "SQLMap", "Git", "GitHub", "Postman", "Figma", "VS Code", 
] as const;
