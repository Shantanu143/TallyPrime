import { HoverEffect } from "./card-hover-effect.tsx";

export function IPTStory() {
  return (
    <div className="max-w-5xl mx-auto px-8 dark">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Oct 2021 ",
    description:
      "IPT Founded - With the Vision to bridge the gap between Academic Knowledge and Industrial Skill Requirements.",
    link: "",
  },
  {
    title: "June 2022",
    description:
      " IPT Conducted first Batch at one of the prestigious Institute of Chhatrapati Sambhajinagar, formerly known as Aurangabad.",
    link: "",
  },
  {
    title: "April 2023",
    description:
      "IPT Conducted second Batch at Shivchhatrapati College, Chhatrapati Sambhajinagar (Auranagbad).",
    link: "",
  },
  {
    title: "July 2023",
    description:
      " 20% candidates got placed at assistant managerial level in Accounting Field.",
    link: "",
  },
  {
    title: "Counting......!!!",
    description:
      "",
    link: "",
  },

];
