import { useEffect, useState } from "react";
import RankingPart from "../../atoms/RankingPart";
import { Ranking } from "../../../types";

interface Props {
  rankings: Ranking[];
}

const MAX_COUNT = 20;

const Main = ({ rankings }: Props) => {
  const [isStartedAnimation, setIsStartedAnimation] = useState(false);
  const [displayRankings] = useState(
    [...rankings.slice(0, MAX_COUNT)].sort(
      (a: Ranking, b: Ranking) => b.rank - a.rank
    )
  );
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsStartedAnimation(true), 3000);
    setTimeout(() => setIsFinished(true), 21000);
  }, []);

  if (isFinished) {
    return <></>;
  }

  return (
    <div className="fixed z-[997] top-0 left-0 h-full w-full flex items-center justify-center font-serif animate-[fade-out_300ms_linear_20000ms_forwards]">
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
