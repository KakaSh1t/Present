import React from "react";

const Card = ({ card, isAvailable, setOpenCard }) => {
  const handleClick = () => {
    if (isAvailable) setOpenCard(card);
  };

  return (
    <div
      className={`card ${isAvailable ? "colorful" : "grayscale"} ${
        card.animation
      }`}
      onClick={handleClick}
    >
      <span>{card.day}</span>
      <div className="days-left">
        {card.day} день{card.day > 1 ? "а" : ""}
      </div>
    </div>
  );
};

export default Card;
