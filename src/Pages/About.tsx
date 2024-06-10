import { IPTStory } from "../aceternity/IPTStory/IPTStory";
import { InfiniteMovingCardsDemo } from "../aceternity/InfiniteMovingCardsDemo/InfiniteMovingCardsDemo";
import { PageHeader } from "../aceternity/PageHeaders/PageHeader";
import { TextGenerateEffect } from "../aceternity/TextGenerateEffect/TextGenerateEffect";
interface Word {
  text: string;
  className?: string; // Optional className property
}
const About = () => {
  const words: Word[] = [
    { text: "Discover" },
    { text: "our" },
    { text: "story and " },
    { text: "mission at" },
    { text: "About Us.", className: "text-blue-500 dark:text-blue-500" },
  ];
  const aboutUs = `The founders of Institute of Professional Talent, henceforth called as IPT noticed the gap between the academic education and industrial requirements in respect to add on skills.
  The IPT was formed in Oct’2021 with the vision to bridge the gap between Academic Knowledge and Industrial Skill Requirements. With the focus on imparting industry relevant skills and empowering the students with practical knowledge in Accounting, Taxation-Direct and Indirect, Finance and Business Management using various Software’s, Tools, Techniques, Microsoft-Office etc..
  We believe in a practical approach to learning. Our courses combine theoretical concepts with hands-on exercises and real-business scenarios, enabling learners to gain expert knowledge. This enables them to develop problem-solving abilities, further enhancing their understanding of skills application in different business environments. Our certifications are widely recognized and accepted as an employable skill, giving our learners a competitive edge in the industry.`;
  
  return (
    <div>
      <PageHeader words={words} />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-5xl text-white font-bold mb-4">
            The Institute of Professional Talent
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            We Make you one step ahead from others
          </p>
        </div>
        <div className="text-center px-10">
          <TextGenerateEffect words={aboutUs} />
        </div>
      </div>
      <IPTStory />
      <InfiniteMovingCardsDemo />
    </div>
  );
};

export default About;
