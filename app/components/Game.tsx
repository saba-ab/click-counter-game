import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import styles from "../page.module.css";
import useTimer, { resetExternal, handleCountExternal } from "../utils/tools";
import Result from "./Result";

export type ResetRef = {
  reset: () => void;
};

const Game = forwardRef<ResetRef, { onGameOver: (isOver: boolean) => void }>(
  ({ onGameOver }, ref) => {
    const [timeLeft, setTimeLeft] = useState<number>(10);
    const [clickCount, setClickCount] = useState<number>(0);
    const [isGameOver, setIsGameOver] = useState<boolean>(false);
    const handleCount = () => handleCountExternal(isGameOver, setClickCount);
    const reset = () =>
      resetExternal(setTimeLeft, setClickCount, setIsGameOver);
    useTimer(setTimeLeft);

    useEffect(() => {
      if (timeLeft === 0 && !isGameOver) {
        setIsGameOver(true);
        onGameOver(true);
      }
    }, [timeLeft, isGameOver, onGameOver]);

    useImperativeHandle(ref, () => ({ reset, isGameOver }));

    return (
      <div className={styles.game_container}>
        <button onClick={handleCount}>Click me!</button>
        <p>time left - {timeLeft}</p>
        <p>click count - {clickCount}</p>
        {isGameOver ? <Result clickCount={clickCount} /> : null}
      </div>
    );
  }
);

Game.displayName = "Game";

export default Game;
