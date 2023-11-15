import { useEffect, useState } from "react";
import Loading from "./pages/Loading";
import Title from "./pages/Title";
import Main from "./pages/Main";
import RankingList from "./pages/RankingList";
import { useKaraokeRankingQuery } from "../queries/karaoke-ranking";

const App = () => {
  const { loading, data, error } = useKaraokeRankingQuery();
  const startLoading = loading || (!data && !error);
  const rankings = data?.rankings || [];
  const [startTitle, setStartTitle] = useState(false);
  const [startMain, setStartMain] = useState(false);
  const [startRanking, setStartRanking] = useState(false);
  const displayLoadingTime = 3000;
  const displayTitleTime = displayLoadingTime + 7000;
  const displayRankingTime = displayTitleTime + 21000;

  useEffect(() => {
    if (!startLoading) {
      setTimeout(() => setStartTitle(true), displayLoadingTime);
      setTimeout(() => setStartMain(true), displayTitleTime);
      setTimeout(() => setStartRanking(true), displayRankingTime);
    }
  }, [startLoading]);

  return (
    <div className="h-full bg-neutral-900">
      <Loading isShow={startLoading} />

      {startTitle && <Title />}
      {startMain && <Main rankings={rankings} />}
      {startRanking && <RankingList rankings={rankings} />}
    </div>
  );
};

export default App;
