"use client";

import { motion } from "framer-motion";
import AboutMe from "./components/aboutMe";
import HeroArea from "./components/hero";
import MyTechStack from "./components/myTeckStack";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Contacts from "./components/contacts";

export default function Home() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] } },
  };

  return (
    <div>
      <main>
        <HeroArea />

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInVariants}>
          <AboutMe />
        </motion.div>

        <div className="w-full h-px my-8 bg-gradient-to-r from-cyan-400 via-transparent to-fuchsia-500"></div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInVariants}>
          <MyTechStack />
        </motion.div>

        <div className="w-full h-px my-8 bg-gradient-to-r from-cyan-400 via-transparent to-fuchsia-500"></div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInVariants}>
          <Projects />
        </motion.div>

        <div className="w-full h-px my-8 bg-gradient-to-r from-cyan-400 via-transparent to-fuchsia-500"></div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInVariants}>
          <Contacts />
        </motion.div>

        <Footer />
      </main>
    </div>
  );
}
