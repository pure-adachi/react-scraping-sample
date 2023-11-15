import { useEffect, useState } from "react";

const Title = () => {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsFinished(true), 6300);

    return () => clearTimeout(timeoutId);
  }, []);

  if (isFinished) {
    return <></>;
  }

  return (
    <div className="fixed z-[998] top-0 left-0 h-full w-full flex items-center justify-center">
      <div className="flex overflow-hidden font-serif text-3xl md:text-5xl text-sky-700 animate-[fade-out_300ms_linear_6000ms_forwards]">
        <span className="translate-y-12 animate-[fade-in-title_2000ms_ease-in-out_600ms_forwards]">
          K
        </span>
        <span className="translate-y-12 animate-[fade-in-title_2200ms_ease-in-out_1000ms_forwards]">
          A
        </span>
        <span className="translate-y-12 animate-[fade-in-title_2100ms_ease-in-out_1400ms_forwards]">
          R
        </span>
        <span className="translate-y-12 animate-[fade-in-title_1900ms_ease-in-out_200ms_forwards]">
          A
        </span>
        <span className="translate-y-12 animate-[fade-in-title_1500ms_ease-in-out_3500ms_forwards]">
          O
        </span>
        <span className="translate-y-12 animate-[fade-in-title_2300ms_ease-in-out_300ms_forwards]">
          K
        </span>
        <span className="translate-y-12 animate-[fade-in-title_1700ms_ease-in-out_1100ms_forwards]">
          E
        </span>
        <span>&nbsp;</span>
        <span className="translate-y-12 animate-[fade-in-title_1900ms_ease-in-out_400ms_forwards]">
          R
        </span>
        <span className="translate-y-12 animate-[fade-in-title_2000ms_ease-in-out_800ms_forwards]">
          A
        </span>
        <span className="translate-y-12 animate-[fade-in-title_1800ms_ease-in-out_1300ms_forwards]">
          N
        </span>
        <span className="translate-y-12 animate-[fade-in-title_2200ms_ease-in-out_900ms_forwards]">
          K
        </span>
        <span className="translate-y-12 animate-[fade-in-title_2100ms_ease-in-out_700ms_forwards]">
          I
        </span>
        <span className="translate-y-12 animate-[fade-in-title_1900ms_ease-in-out_500ms_forwards]">
          N
        </span>
        <span className="translate-y-12 animate-[fade-in-title_2000ms_ease-in-out_100ms_forwards]">
          G
        </span>
      </div>
    </div>
  );
};

export default Title;
