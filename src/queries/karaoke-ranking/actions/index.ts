import { KaraokeRankingQueryStore } from "../../../types";

export default {
  request: (
    state: KaraokeRankingQueryStore.State
  ): KaraokeRankingQueryStore.State => {
    return {
      ...state,
      loading: true
    };
  },
  response: (
    state: KaraokeRankingQueryStore.State,
    data: KaraokeRankingQueryStore.ResponseKaraokeRanking
  ): KaraokeRankingQueryStore.State => {
    return {
      ...state,
      loading: false,
      data,
      error: null
    };
  },
  error: (
    state: KaraokeRankingQueryStore.State
  ): KaraokeRankingQueryStore.State => {
    return {
      ...state,
      error: {
        message: "サーバ側で予期せぬエラーが発生しました。"
      }
    };
  }
};
