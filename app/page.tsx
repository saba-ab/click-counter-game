"use client";
import styles from "./page.module.css";
import WelcomeText from "../app/components/WelcomeText";
import Game, { ResetRef } from "./components/Game";
import { useRef, useState } from "react";
import { handleGameOverImported } from "./utils/tools";
export default function Home() {
  const resetRef = useRef<ResetRef>(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const handleGameOver = handleGameOverImported(setIsGameOver);
  return (
    <main className={styles.main}>
      <WelcomeText />
      <Game ref={resetRef} onGameOver={handleGameOver} />
      {isGameOver && (
        <button
          onClick={() => {
            resetRef.current?.reset();
            setIsGameOver(false);
          }}
          className={styles.reset}
        >
          Play Again
        </button>
      )}
    </main>
  );
}
