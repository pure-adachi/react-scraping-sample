import { useEffect, useState } from "react";
import classNames from "classnames";

interface Props {
  isShow: boolean;
  defaultFadeOutTime?: number;
}

const Loading = ({ isShow, defaultFadeOutTime }: Props) => {
  const [displayed, setDisplayed] = useState(false);
  const fadeOutTime = defaultFadeOutTime || 0;

  useEffect(() => {
    if (!displayed && isShow) {
      setDisplayed(true);
    }
  }, [isShow]);

  useEffect(() => {
    if (displayed && !isShow) {
      setTimeout(() => setDisplayed(false), fadeOutTime);
    }
  }, [isShow]);

  return (
    <div
      className={classNames(
        "fixed",
        "bg-orange-50",
        "flex",
        "items-center",
        "justify-center",
        "transition-opacity",
        `duration-${fadeOutTime}`,
        {
          "h-full": displayed,
          "w-full": displayed,
          "z-50": displayed,
          "h-0": !displayed,
          "w-0": !displayed,
          "z-0": !displayed,
          "opacity-0": !isShow,
          "opacity-100": isShow
        }
      )}
    >
      <div className="rounded-full bg-amber-800 h-5 w-5 animate-[pulse_2000ms_ease-in-out_100ms_infinite,bounce_1000ms_ease-in_100ms_infinite] mr-3" />
      <div className="rounded-full bg-amber-800 h-5 w-5 animate-[pulse_2000ms_ease-in-out_200ms_infinite,bounce_1000ms_ease-in_200ms_infinite]  mr-3" />
      <div className="rounded-full bg-amber-800 h-5 w-5 animate-[pulse_2000ms_ease-in-out_300ms_infinite,bounce_1000ms_ease-in_300ms_infinite]" />
    </div>
  );
};

export default Loading;
