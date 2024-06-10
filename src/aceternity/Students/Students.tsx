import { BackgroundGradient } from "./background-gradient";

interface StudentProps {
  imageSrc: string;
  alt: string;
  title: string;
  description: string;
}

export function Students({ imageSrc, alt, title, description }: StudentProps) {
  return (
    <div className="dark">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <img
          src={imageSrc}
          alt={alt}
          height="400"
          width="400"
          className="object-cover w-full h-[20rem]"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {title}
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      </BackgroundGradient>
    </div>
  );
}
