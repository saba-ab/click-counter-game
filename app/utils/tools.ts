import { useEffect } from "react";

const useTimer = (
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>
) => {
  useEffect(() => {
    const handleTime = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => {
      clearInterval(handleTime);
    };
  }, [setTimeLeft]);
};
export default useTimer;

export const handleGameOverImported =
  (setIsGameOver: (isOver: boolean) => void) => (gameOver: boolean) => {
    setIsGameOver(gameOver);
  };
export const handleCountExternal = (
  isGameOver: boolean,
  setClickCount: React.Dispatch<React.SetStateAction<number>>
) => {
  if (!isGameOver) {
    setClickCount((prev) => prev + 1);
  }
};

export const resetExternal = (
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>,
  setClickCount: React.Dispatch<React.SetStateAction<number>>,
  setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setTimeLeft(10);
  setClickCount(0);
  setIsGameOver(false);
};
