import { motion } from "framer-motion";
import { AuroraBackground } from "../Header/aurora-background";
import { MeteorsDemo } from "./MeteorsDemo";

const Cource = () => {
  return (
 
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center py-16">
          Discover our diverse courses
        </div>

        <div className="flex justify-between">
          <div className="card mx-8">
            <MeteorsDemo
              heading="Tally Prime"
              info="If you are a beginner in the Accounting and Finance domain, then Tally Prime is the course designed for your career growth. It covers topics from basic to intermediate Business, Cost and Management of Financial Accounting concepts."
              link="/tallyprime"
            />
          </div>
          <div className="card mx-8">
            <MeteorsDemo
              heading="Excel & Advance Excel "
              info="If you’re an Excel beginner (or an intermediate) and want to learn Excel, this is the perfect place for you to start. The various concepts explained through Practical Learning Approach (PLA) that helps to establish a strong foundation for you’re smoothly working in industry."
              link="/advanceexcel"
            />
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default Cource;
