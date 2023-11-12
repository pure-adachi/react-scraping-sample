import { useEffect, useState } from "react";
import Loading from "./atoms/Loading";
import Title from "./atoms/Title";
import Main from "./atoms/Main";
import { useKaraokeRankingQuery } from "../queries/karaoke-ranking";

const App = () => {
  const { loading, data, error } = useKaraokeRankingQuery();
  const startLoading = loading || (!data && !error);
  const [startTitle, setStartTitle] = useState(false);
  const [startMain, setStartMain] = useState(false);

  useEffect(() => {
    if (!startLoading) {
      setTimeout(() => setStartTitle(true), 3000);
      setTimeout(() => setStartMain(true), 10000);
    }
  }, [startLoading]);

  return (
    <div className="h-full bg-neutral-900">
      <Loading isShow={startLoading} />

      {startTitle && <Title />}
      {startMain && <Main />}
    </div>
  );
};

export default App;
