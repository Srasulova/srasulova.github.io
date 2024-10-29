import dynamic from "next/dynamic";
import AboutMe from "./components/aboutMe";
import HeroArea from "./components/hero";
import MyTechStack from "./components/myTeckStack";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Contacts from "./components/contacts";

// Dynamically import framer-motion's `motion.div` with SSR disabled
const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false });

export default function Home() {
  // Animation properties for scroll-in effect
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <main>
        <HeroArea />

        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariants}
        >
          <AboutMe />
        </MotionDiv>

        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariants}
        >
          <MyTechStack />
        </MotionDiv>

        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariants}
        >
          <Projects />
        </MotionDiv>

        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariants}
        >
          <Contacts />
        </MotionDiv>

        <Footer />
      </main>
    </div>
  );
}
