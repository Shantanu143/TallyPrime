import { PageHeader } from "../aceternity/PageHeaders/PageHeader";
import { People } from "../aceternity/Peoples/People";
import { Students } from "../aceternity/Students/Students";

interface Word {
  text: string;
  className?: string; // Optional className property
}
interface Student {
  id: number;
  name: string;
    image: string;
  review:string;
}
const PlacedStudents = () => {
  const words: Word[] = [
    { text: "Listen to " },
    { text: "what our" },
    { text: "students have " },
    { text: "to say" },
    { text: "About Us.", className: "text-blue-500 dark:text-blue-500" },
  ];

  const students: Student[] = [
    {
      id: 1,
      name: "John Doe",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
      review: "John's expertise in software development has greatly contributed to our projects. He consistently delivers high-quality code and is a valuable team player."
    },
    {
      id: 2,
      name: "Robert Johnson",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      review: "Robert's strategic insights and leadership skills as a product strategist have been instrumental in guiding our product roadmap. He excels in analyzing market trends and customer needs."
    },
    {
      id: 3,
      name: "Jane Smith",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      review: "Jane's proficiency in data analysis has significantly enhanced our decision-making process. Her attention to detail and ability to extract meaningful insights from complex datasets are commendable."
    },
    {
      id: 4,
      name: "Emily Davis",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      review: "Emily's creativity and attention to user experience have elevated our product designs to new heights. She consistently delivers visually stunning and intuitive interfaces that resonate with our users."
    },
    {
      id: 5,
      name: "Tyler Durden",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
      review: "Tyler's meticulous approach to quality assurance ensures that our products meet the highest standards. His thorough testing procedures have significantly improved product reliability and user satisfaction."
    },
    {
      id: 6,
      name: "Dora",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
      review: "Dora's dedication to enhancing customer experience has been exemplary. Her prompt responses and personalized support have fostered strong relationships with our clients, leading to increased satisfaction and loyalty."
    },
  ];
  

  return (
    <div>
      <PageHeader words={words} />
      <People />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-20">
        {students.map((student) => (
          <Students
            key={student.id}
            imageSrc={student.image}
            alt={student.name}
            title={student.name}
            description={student.review}
          />
        ))}
      </div>
    </div>
  );
};

export default PlacedStudents;
