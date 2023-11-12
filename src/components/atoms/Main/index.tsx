import { useEffect, useState } from "react";

const Main = () => {
  const [isStartedAnimation, setIsStartedAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsStartedAnimation(true), 3000);
  }, []);

  return (
    <div className="fixed z-[997] top-0 left-0 h-full w-full flex items-center justify-center">
      {!isStartedAnimation && (
        <div className="text-slate-300 font-serif text-3xl md:text-5xl">
          トップ１０
        </div>
      )}
    </div>
  );
};

export default Main;
