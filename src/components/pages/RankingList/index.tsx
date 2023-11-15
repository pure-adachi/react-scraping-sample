import { useEffect, useState } from "react";
import classNames from "classnames";
import { Ranking } from "../../../types";

interface Props {
  rankings: Ranking[];
}

const RankingList = ({ rankings }: Props) => {
  const [scrollStart, setScrollStart] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setScrollStart(true), 300);

    return () => clearTimeout(timeoutId);
  }, []);

  const List = ({ num }: { num: number }) => {
    return (
      <table
        className={classNames(
          "w-1/2",
          "text-sm",
          "font-light",
          "text-slate-200",
          {
            "animate-[infinity-scroll-ranking_40s_infinite_linear_both]":
              scrollStart
          }
        )}
      >
        <tbody>
          {rankings.map(({ rank, song, artist }) => {
            return (
              <tr key={`${num}-${rank}`}>
                <td className="whitespace-nowrap px-6 py-4 font-medium text-center">
                  {rank}
                </td>
                <td className="whitespace-nowrap px-6 py-4">{song}</td>
                <td className="whitespace-nowrap px-6 py-4">{artist}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  return (
    <div className="fixed z-[997] h-full w-full flex items-center justify-center font-serif animate-[fade-in_300ms_linear_forwards]">
      <div className="h-full overflow-hidden">
        <List num={1} />
        <List num={2} />
      </div>
    </div>
  );
};

export default RankingList;
