import { useEffect, useState } from "react";
import Loading from "./pages/Loading";
import Title from "./pages/Title";
import Main from "./pages/Main";
import { useKaraokeRankingQuery } from "../queries/karaoke-ranking";

const App = () => {
  const { loading, data, error } = useKaraokeRankingQuery();
  const startLoading = loading || (!data && !error);
  const rankings = data?.rankings || [];
  const [startTitle, setStartTitle] = useState(false);
  const [startMain, setStartMain] = useState(false);
  const displayLoadingTime = 3000;
  const displayTitleTime = displayLoadingTime + 7000;

  useEffect(() => {
    if (!startLoading) {
      setTimeout(() => setStartTitle(true), displayLoadingTime);
      setTimeout(() => setStartMain(true), displayTitleTime);
    }
  }, [startLoading]);

  return (
    <div className="h-full bg-neutral-900">
      <Loading isShow={startLoading} />

      {startTitle && <Title />}
      {startMain && <Main rankings={rankings} />}
    </div>
  );
};

export default App;
