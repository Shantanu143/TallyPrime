"use client";
import { Link } from "react-router-dom";
import { TypewriterEffectSmooth } from "./typewriter-effect.tsx";
interface Word {
  text: string;
  className?: string; // Optional className property
}

interface PageHeaderProps {
  words: Word[];
}
export function PageHeader({ words }: PageHeaderProps) {

  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  dark">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        We Make you one step ahead from others
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link to={"/contactus"}>
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            Join now
          </button>
        </Link>
        <Link to={"/signup"}>
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
}
