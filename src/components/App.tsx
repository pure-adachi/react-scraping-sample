import Loading from "./atoms/Loading";
import Title from "./atoms/Title";
import { useKaraokeRankingQuery } from "../queries/karaoke-ranking";

const App = () => {
  const { loading, data, error } = useKaraokeRankingQuery();
  const isInPreparation = loading || (!data && !error);
  const fadeOutTimeToLoading = 1000;

  return (
    <div className="h-full bg-amber-500">
      <Loading
        isShow={isInPreparation}
        defaultFadeOutTime={fadeOutTimeToLoading}
      />

      {!isInPreparation && <Title delay={fadeOutTimeToLoading} />}
    </div>
  );
};

export default App;
