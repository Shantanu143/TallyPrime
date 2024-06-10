import { PageHeader } from "../aceternity/PageHeaders/PageHeader";
import { TextGenerateEffect } from "../aceternity/TextGenerateEffect/TextGenerateEffect";

import img from "../assets/TallyP.png";
interface Word {
  text: string;
  className?: string; // Optional className property
}

const TallyPrime = () => {
  const words: Word[] = [
    { text: "About" },
    { text: "the" },
    { text: "Certificate " },
    { text: "Course on" },
    { text: " Tally Prime.", className: "text-blue-500 dark:text-blue-500" },
  ];

  const tallyAbout1 = `If you are a beginner in the Accounting and Finance domain, then Tally Prime is the course designed for your career growth. It covers topics from basic to intermediate Business, Cost and Management of Financial Accounting concepts. The various concepts explained through Practical Learning Approach (PLA) that helps to establish a strong foundation for your Accounting and Financial career.`;
  const tallyAbout2 = `The course will help you understand how to perform basic to intermediate Accounting, Inventory and Basic Taxation (GST, TDS), and Simplification of Company Books of Accounts to name a few. The practical applications will be done on the new Tally Prime software to keep you at par with the new releases.`;


  return (
    <div>
      <PageHeader words={words} />
      <div className="flex flex-row justify-evenly pb-10">
        <div className="p-5 bg-white">
          <img src={img} alt="Image" className="w-full md:w-96 " />
        </div>

        <div className="w-full md:w-1/2">
          <TextGenerateEffect words={tallyAbout1} />
          <TextGenerateEffect words={tallyAbout2} />
        </div>
      </div>
    </div>
  );
};

export default TallyPrime;
