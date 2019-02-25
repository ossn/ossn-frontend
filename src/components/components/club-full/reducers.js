import { merge, set } from "lodash";

export function reducer(state, action) {
  switch (action.type) {
    case "valueChange":
      return set(state, action.payload.name, action.payload.value);
    case "stateUpdate":
      return merge(state, action.payload);
    default:
      return state;
  }
}
