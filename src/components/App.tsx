import Loading from "./atoms/Loading";
import { useKaraokeRankingQuery } from "../queries/karaoke-ranking";

const App = () => {
  const { loading, data, error } = useKaraokeRankingQuery();

  console.log(loading, data, error);

  return (
    <>
      <Loading isShow={loading || (!data && !error)} />
      App
    </>
  );
};

export default App;
