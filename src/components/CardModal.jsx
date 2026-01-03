import React, { useState, useEffect } from "react";

// Опционально: мини эффект конфетти
const Confetti = () => <div className="confetti">🎊🎉✨</div>;

const CardModal = ({ card, onClose }) => {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizCorrect, setQuizCorrect] = useState(false);
  const [showText, setShowText] = useState(!card.delayedText);

  // Для дня 7: задержка текста
  useEffect(() => {
    if (card.delayedText) {
      const timer = setTimeout(() => setShowText(true), 1000); // 12 секунд
      return () => clearTimeout(timer);
    }
  }, [card.delayedText]);

  // Для fakeError (день 6) можно показать «ошибку» сначала
  const isFakeError = card.fakeError;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{card.title}</h2>

        {/* День 6: фальшивая ошибка */}
        {isFakeError && !showText && (
          <div className="fake-error">
            <h3>⚠️ Ошибка загрузки</h3>
            <p>Не удалось загрузить данные. Попробуй обновить страницу…</p>
            <div className="loading-bar"></div>
          </div>
        )}

        {/* Основной текст */}
        {showText && (
          <p style={{ whiteSpace: "pre-line" }}>
            {typeof card.content === "function" ? card.content() : card.content}
          </p>
        )}

        {/* Видео */}
        {card.videoUrl && (
          <iframe
            width="100%"
            height="200"
            src={card.videoUrl}
            title="video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )}

        {/* Викторина */}
        {card.quiz && !quizCorrect && (
          <div>
            <p>{card.quiz.question}</p>
            <input
              value={quizAnswer}
              onChange={(e) => setQuizAnswer(e.target.value)}
            />
            <button
              onClick={() => {
                if (
                  quizAnswer.toLowerCase() === card.quiz.answer.toLowerCase()
                ) {
                  setQuizCorrect(true);
                } else {
                  alert("Неверно, попробуй ещё раз!");
                }
              }}
            >
              Проверить
            </button>
          </div>
        )}

        {card.quiz && quizCorrect && card.quiz.rewardImg && (
          <img
            src={card.quiz.rewardImg}
            alt="Сюрприз"
            style={{ width: "100%" }}
          />
        )}

        {/* Конфетти */}
        {card.confetti && <Confetti />}

        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default CardModal;
