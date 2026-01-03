import React from "react";
import Card from "./Card";
import { days } from "./days";

const startDate = new Date("2025-01-24");

const CardGrid = ({ setOpenCard }) => {
  const today = new Date();

  return (
    <div className="card-grid">
      {days.map((d) => {
        const cardDate = new Date(startDate);
        cardDate.setDate(startDate.getDate() + d.day - 1);
        const isAvailable = today >= cardDate;

        return (
          <Card
            key={d.day}
            card={d}
            isAvailable={isAvailable}
            setOpenCard={setOpenCard}
          />
        );
      })}
    </div>
  );
};

export default CardGrid;
