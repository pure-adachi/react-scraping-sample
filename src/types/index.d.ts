export interface KaraokeRankingQueryStore {
  state: KaraokeRankingQueryStore.State;
}

export namespace KaraokeRankingQueryStore {
  export interface State {
    loading: boolean;
    data: ResponseKaraokeRanking;
    error: ResponseError;
  }

  export type ResponseKaraokeRanking = {
    rankings: Ranking[];
  } | null;

  export type ResponseError = {
    message: string | null;
  } | null;

  export type Action = RequestAction | ResponseAction | ErrorAction;

  interface RequestAction {
    type: "request";
  }

  interface ResponseAction {
    type: "response";
    data: ResponseKaraokeRanking;
  }

  interface ErrorAction {
    type: "error";
  }
}

export interface Ranking {
  rank: number;
  song: string;
  artist: string;
}
