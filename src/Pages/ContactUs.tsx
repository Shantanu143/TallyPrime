import { ContactForm } from "../aceternity/Forms/ContactForm";
import { PageHeader } from "../aceternity/PageHeaders/PageHeader";

interface Word {
  text: string;
  className?: string; // Optional className property
}
const ContactUs = () => {
  const words: Word[] = [
    { text: "Connect    " },
    { text: "with us" },
    { text: "today and " },
    { text: "let's start" },
    {
      text: "the conversation.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="dark">
      <PageHeader words={words} />
      {/* <div className="flex lg:flex-row md:flex-col "> */}
        <section className="text-gray-600 body-font relative">
          <div className="absolute inset-0 bg-gray-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7509.168004410534!2d75.16859174003477!3d19.77282132263693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9cc1171b37d5%3A0x98fff8f19c4d5dfe!2sLimbe%20Jalgaon%2C%20Maharashtra%20431133!5e0!3m2!1sen!2sin!4v1712163005996!5m2!1sen!2sin"
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="container px-5 py-24 mx-auto flex">
            <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
              <ContactForm />
            </div>
          </div>
        </section>
         </div>
    // </div>
  );
};

export default ContactUs;
