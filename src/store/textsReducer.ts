import { RootState } from ".";

export interface IText {
  id: string;
  text: string;
}
export interface IStore {
  texts: IText[];
}
const defaultState: IStore = {
  texts: [],
};

export type action = {
  type: string;
  texts: IText[];
};

const GET_TEXTS = "GET_TEXTS";
const REMOVE_TEXTS = "REMOVE_TEXTS";

export const textsReducer = (state = defaultState, action: action): IStore => {
  switch (action.type) {
    case GET_TEXTS:
      return { ...state, texts: action.texts };
    case REMOVE_TEXTS:
      return { ...state, texts: [] };
    default:
      return state;
  }
};

// Dispatch actions

export const getTextsAction = (texts: IText[]) => ({ type: GET_TEXTS, texts });
export const removeTextsAction = () => ({ type: GET_TEXTS });

// Selectors

export const textsSelector = (state: RootState): IText[] =>
  state.textsReducer.texts;
