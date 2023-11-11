import { useKaraokeRankingQuery } from "../queries/karaoke-ranking";

const App = () => {
  const { loading, data, error } = useKaraokeRankingQuery();

  console.log(loading, data, error);

  return <div>App</div>;
};

export default App;
