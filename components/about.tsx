"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
<p className="mb-3 leading-relaxed text-lg text-gray-700 dark:text-gray-300">
  I’m a passionate, <span className="font-semibold text-primary">Penetration Tester</span> with a solid foundation in 
  <span className="font-semibold text-primary"> Vulnerability Assessment and Penetration Testing (VAPT)</span>.
  <span className="font-semibold text-primary"> BSc in Computer Science</span> in Ethiopia, I continuously enhance my practical skills 
  by solving real-world <span className="font-semibold text-primary">Capture The Flag (CTF)</span> challenges on platforms like 
  <span className="font-semibold text-primary"> Hack The Box</span> and <span className="font-semibold text-primary">TryHackMe</span>. 
  I’m deeply interested in ethical hacking, network security, and hands-on exploitation techniques.
  In addition to cybersecurity, I have growing experience as a 
  <span className="font-semibold text-primary"> Full Stack Developer</span>, building secure web applications using technologies like 
  <span className="font-semibold text-primary"> React</span>, <span className="font-semibold text-primary">Node.js</span>, 
  <span className="font-semibold text-primary">MongoDB</span>, and <span className="font-semibold text-primary">Express</span> — with a strong focus on implementing best practices for 
  <span className="font-semibold text-primary"> authentication</span>, <span className="font-semibold text-primary">authorization</span>, and 
  <span className="font-semibold text-primary"> secure coding</span>.
</p>



      
    </motion.section>
  );
}
