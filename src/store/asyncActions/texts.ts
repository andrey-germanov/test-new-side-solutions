import { Dispatch } from "react";
import { AnyAction } from "redux";
import { getTextsAction, IText } from "../textsReducer";
import { generateId } from "../../utils/helpers";

export const fetchTexts = (): any => {
  const controller = new AbortController();
  const signal = controller.signal;

  return (dispatch: Dispatch<AnyAction>) => {
    fetch(`https://baconipsum.com/api/?type=meat-and-filler`, { signal })
      .then((response) => response.json())
      .then((json) => {
        const newTexts = json.map((text: string): IText => {
          return { id: generateId(), text };
        });
        return dispatch(getTextsAction(newTexts));
      });
    return () => {
      controller.abort();
    };
  };
};
