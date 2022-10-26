import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import s from "./Texts.module.scss";
import {
  textsSelector,
  removeTextsAction,
} from "../../store/textsReducer";
import { fetchTexts } from "../../store/asyncActions/texts";
import { Button, List, Tooltip } from "antd";

export const Texts = () => {
  const textsList = useSelector(textsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!textsList.length) dispatch(fetchTexts());
  }, []);

  const getNewTexts = () => {
    dispatch(removeTextsAction());
    dispatch(fetchTexts());
  };

  const isTexts = () => textsList && textsList.length;

  const footerButton = () => {
    return (
      <div className={s.footer}>
        <Button
          type="primary"
          disabled={!isTexts()}
          onClick={() => getNewTexts()}
        >
          Request new texts
        </Button>
      </div>
    );
  };

  return (
    <div className={s.wrapperTexts}>
      <List
        loading={!isTexts()}
        size="small"
        header={
          <div className={s.headerListTexts}>Work with API baconipsum</div>
        }
        footer={footerButton()}
        bordered
        dataSource={textsList}
        renderItem={(item) => {
          const indexDot = item.text.indexOf(".");
          return (
            <Tooltip title={item.text}>
              <List.Item>
                <Link to={`/${item.id}`} key={item.id}>
                  {item.text.slice(0, indexDot)}
                </Link>
              </List.Item>
            </Tooltip>
          );
        }}
      />
    </div>
  );
};
