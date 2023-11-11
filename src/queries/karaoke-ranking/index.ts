import { useEffect, useReducer } from "react";
import { reducer } from "./reducers";
import { KaraokeRankingQueryStore } from "../../types";

export const initialState: KaraokeRankingQueryStore.State = {
  loading: false,
  data: null,
  error: null
};

export const initialStore: KaraokeRankingQueryStore = {
  state: initialState
};

export function useKaraokeRankingQuery(): KaraokeRankingQueryStore.State {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "request" });
  }, []);

  useEffect(() => {
    if (state.loading) {
      const endpoint = new URL("ranking", process.env.REACT_APP_SERVER_URL);

      void fetch(endpoint)
        .then((res) => res.json())
        .then((data: KaraokeRankingQueryStore.ResponseKaraokeRanking) => {
          dispatch({ type: "response", data });
        })
        .catch(() => {
          dispatch({ type: "error" });
        });
    }
  }, [state.loading]);

  return state;
}
