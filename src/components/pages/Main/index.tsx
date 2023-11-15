import { useEffect, useState } from "react";
import RankingPart from "../../atoms/RankingPart";
import { Ranking } from "../../../types";

interface Props {
  rankings: Ranking[];
}

const Main = ({ rankings }: Props) => {
  const [isStartedAnimation, setIsStartedAnimation] = useState(false);
  const [displayRankings] = useState(
    [...rankings].sort((a: Ranking, b: Ranking) => b.rank - a.rank)
  );

  useEffect(() => {
    setTimeout(() => setIsStartedAnimation(true), 3000);
  }, []);

  return (
    <div className="fixed z-[997] top-0 left-0 h-full w-full flex items-center justify-center font-serif">
      {isStartedAnimation ? (
        <div className="h-full relative w-9/12 overflow-hidden bg-zinc-400">
          {displayRankings.map((ranking) => (
            <RankingPart key={ranking.rank} ranking={ranking} />
          ))}
        </div>
      ) : (
        <div className="text-slate-300 text-3xl md:text-5xl">トップ２０</div>
      )}
    </div>
  );
};

export default Main;
