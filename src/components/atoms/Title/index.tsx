import { useEffect, useState } from "react";
import classNames from "classnames";

interface Props {
  delay: number;
}

const Title = ({ delay }: Props) => {
  const [isStartedAnimation, setIsStartedAnimation] = useState(false);
  const [isFinishedAnimation, setIsFinishedAnimation] = useState(false);

  const classList = [
    "transition-transform",
    "duration-700",
    {
      "translate-y-12": !isStartedAnimation,
      "translate-y-0": isStartedAnimation && !isFinishedAnimation,
      "-translate-y-12": isFinishedAnimation,
      "delay-0": isFinishedAnimation
    }
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsStartedAnimation(true);
    }, delay);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsFinishedAnimation(true);
    }, delay + 3800);
  }, []);

  return (
    <div
      className={classNames(
        "fixed",
        "z-10",
        "h-full",
        "w-full",
        "bg-orange-50",
        "flex",
        "items-center",
        "justify-center",
        "font-serif",
        "text-5xl",
        "text-sky-800",
        "transition-transform",
        "duration-500",
        "delay-300",
        { "-translate-y-full": isFinishedAnimation }
      )}
    >
      <div className="flex overflow-hidden">
        <span className={classNames(classList)}>K</span>
        <span
          className={classNames(
            { "delay-[100ms]": !isFinishedAnimation },
            classList
          )}
        >
          A
        </span>
        <span
          className={classNames(
            { "delay-[200ms]": !isFinishedAnimation },
            classList
          )}
        >
          R
        </span>
        <span
          className={classNames(
            { "delay-[300ms]": !isFinishedAnimation },
            classList
          )}
        >
          A
        </span>
        <span
          className={classNames(
            { "delay-[400ms]": !isFinishedAnimation },
            classList
          )}
        >
          O
        </span>
        <span
          className={classNames(
            { "delay-[500ms]": !isFinishedAnimation },
            classList
          )}
        >
          K
        </span>
        <span
          className={classNames(
            { "delay-[600ms]": !isFinishedAnimation },
            classList
          )}
        >
          E
        </span>
        <span
          className={classNames(
            { "delay-[700ms]": !isFinishedAnimation },
            classList
          )}
        >
          &nbsp;
        </span>
        <span
          className={classNames(
            { "delay-[1000ms]": !isFinishedAnimation },
            classList
          )}
        >
          R
        </span>
        <span
          className={classNames(
            { "delay-[1100ms]": !isFinishedAnimation },
            classList
          )}
        >
          A
        </span>
        <span
          className={classNames(
            { "delay-[1200ms]": !isFinishedAnimation },
            classList
          )}
        >
          N
        </span>
        <span
          className={classNames(
            { "delay-[1300ms]": !isFinishedAnimation },
            classList
          )}
        >
          K
        </span>
        <span
          className={classNames(
            { "delay-[1400ms]": !isFinishedAnimation },
            classList
          )}
        >
          I
        </span>
        <span
          className={classNames(
            { "delay-[1500ms]": !isFinishedAnimation },
            classList
          )}
        >
          N
        </span>
        <span
          className={classNames(
            { "delay-[1600ms]": !isFinishedAnimation },
            classList
          )}
        >
          G
        </span>
      </div>
    </div>
  );
};

export default Title;
