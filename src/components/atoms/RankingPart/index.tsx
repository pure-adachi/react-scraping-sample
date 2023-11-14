import classNames from "classnames";
import { Ranking } from "../../../types";
import "./index.scss";

interface Props {
  ranking: Ranking;
}

const RankingPart = ({ ranking }: Props) => {
  return (
    <div
      className={classNames(
        "font-serif",
        `animate-ranking-part-${ranking.rank}`
      )}
    >
      <div className="text-xs">
        [{ranking.rank}: {ranking.artist}]
      </div>
      <div>{ranking.song}</div>
    </div>
  );
};

export default RankingPart;
