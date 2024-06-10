
import { InfiniteMovingCards } from "./infinite-moving-cards.tsx";

export function InfiniteMovingCardsDemo() {
  return (
       <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
   
  );
}

const testimonials = [
  {
    quote:
      "“Bridge the gap between Academic Knowledge and Industrial Skill Requirements.”", 
        //  name: "Charles Dickens",
    title: "Vision",
  },
  {
    quote:
      "IPT brings skill-oriented small duration certificate courses that make you competent in the industries requirements and help achieve the above vision.",
      // name: "Mission",
    title: "Mission",
  },
  {
    quote: "IPT believes that the education system should be updated regularly to meet the industry upcoming trends. To fulfill the gap, IPT will take necessary steps by offering skill-oriented small duration certificate courses.",
    // name: "Edgar Allan Poe",
    title: "Goals",
  },


];
