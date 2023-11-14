import { useEffect, useState } from "react";
import classNames from "classnames";
import background from "./background.jpg";
import "./index.scss";

interface Props {
  isShow: boolean;
}

const Loading = ({ isShow }: Props) => {
  const [displayed, setDisplayed] = useState(false);
  const [startCountDown, setStartCountDown] = useState(false);
  const [count, setCount] = useState(3);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (!displayed && isShow) {
      setDisplayed(true);
    }
  }, [isShow]);

  useEffect(() => {
    if (displayed && !isShow) {
      setStartCountDown(true);
    }
  }, [isShow]);

  useEffect(() => {
    if (startCountDown) {
      setTimeout(() => {
        const decrementedCount = count - 1;

        setCount(decrementedCount);

        if (decrementedCount === 0) {
          setStartCountDown(false);
          setDisplayed(false);
          setTimeout(() => setIsFinished(true), 1000);
        }
      }, 1000);
    }
  }, [startCountDown, count]);

  if (isFinished) {
    return <></>;
  }

  return (
    <div
      className={classNames(
        "fixed",
        "z-[999]",
        "h-full",
        "w-full",
        "bg-orange-50",
        "flex",
        "items-center",
        "justify-center",
        "transition-opacity",
        "duration-1000",
        {
          "opacity-0": !displayed,
          "opacity-100": displayed
        },
        "glitch"
      )}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="channel r"></div>
      <div className="channel g"></div>
      <div className="channel b"></div>

      <div className="fixed z-50 top-3 right-3 flex items-center justify-center">
        <div className="animate-spin h-10 w-10 border-2 rounded-full border-t-transparent" />
        {startCountDown && <div className="absolute text-white">{count}</div>}
      </div>
    </div>
  );
};

export default Loading;
