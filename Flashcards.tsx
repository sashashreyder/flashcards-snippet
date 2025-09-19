import React, { useState } from "react";
import styles from "./Flashcards.module.css";

type Card = {
  front: string;
  back: string;
};

const Flashcards: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [flipped, setFlipped] = useState<number | null>(null);

  const addCard = () => {
    if (front.trim() && back.trim()) {
      setCards([...cards, { front, back }]);
      setFront("");
      setBack("");
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
          value={front}
          onChange={(e) => setFront(e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Back"
          value={back}
          onChange={(e) => setBack(e.target.value)}
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
