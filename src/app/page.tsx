"use client";

import { motion } from "framer-motion";
import AboutMe from "./components/aboutMe";
import HeroArea from "./components/hero";
import MyTechStack from "./components/myTeckStack";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Contacts from "./components/contacts";

export default function Home() {
  // Animation properties for scroll-in effect
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] } },
  };

  // Animation properties for the separator
  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <main>
        <HeroArea />

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInVariants}>
          <AboutMe />
        </motion.div>

        <motion.div
          className="h-2 my-8 bg-gradient-to-r from-cyan-400 via-transparent to-fuchsia-500"
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        />

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInVariants}>
          <MyTechStack />
        </motion.div>

        <motion.div
          className="h-2 my-8 bg-gradient-to-r from-cyan-400 via-transparent to-fuchsia-500"
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        />

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInVariants}>
          <Projects />
        </motion.div>

        <motion.div
          className="h-2 my-8 bg-gradient-to-r from-cyan-400 via-transparent to-fuchsia-500"
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        />

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInVariants}>
          <Contacts />
        </motion.div>

        <Footer />
      </main>
    </div>
  );
}
