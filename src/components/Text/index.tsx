import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { textsSelector } from "../../store/textsReducer";
import s from "./Text.module.scss";

export const Text = () => {
  const textId = useParams<string>();
  const texts = useSelector(textsSelector);

  const renderText = () => {
    const text = texts.filter((text) => text.id === textId.id);
    return <div className={s.blockPhoto}>{text.map((item) => item.text)}</div>;
  };
  return <>{renderText()}</>;
};
