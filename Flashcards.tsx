import React, { useState } from "react";
import styles from "./Flashcards.module.css";

type Card = {
  front: string;
  back: string;
};

const Flashcards: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [faces, setFaces] = useState<Card>({ front: "", back: "" });
  const [flipped, setFlipped] = useState<number | null>(null);

  const addCard = () => {
    if (faces.front.trim() && faces.back.trim()) {
      setCards([...cards, { ...faces }]);
      setFaces({ front: "", back: "" });
    }
  };

  const toggleFlip = (index: number) => {
    setFlipped(flipped === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Flashcards</h2>

      <div className={styles.form}>
        <input
          type="text"
          placeholder="Front"
          value={faces.front}
          onChange={(e) => setFaces({ ...faces, front: e.target.value })}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Back"
          value={faces.back}
          onChange={(e) => setFaces({ ...faces, back: e.target.value })}
          className={styles.input}
        />
        <button onClick={addCard} className={styles.addButton}>
          +
        </button>
      </div>

      <div className={styles.cards}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${styles.card} ${
              flipped === index ? styles.flipped : ""
            }`}
            onClick={() => toggleFlip(index)}
          >
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>{card.front}</div>
              <div className={styles.cardBack}>{card.back}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flashcards;

