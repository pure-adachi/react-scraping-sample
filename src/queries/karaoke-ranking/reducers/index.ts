import { KaraokeRankingQueryStore } from "../../../types";
import Action from "../actions";

export const reducer = (
  state: KaraokeRankingQueryStore.State,
  action: KaraokeRankingQueryStore.Action
): KaraokeRankingQueryStore.State => {
  switch (action.type) {
    case "request":
      return Action.request(state);
    case "response":
      return Action.response(state, action.data);
    case "error":
      return Action.error(state);
    default:
      return { ...state };
  }
};
