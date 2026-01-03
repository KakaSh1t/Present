import React, { useState } from "react";

const correctPassword = " ";

const LoginPage = ({ onLogin }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (input === correctPassword) {
      onLogin();
    } else {
      setError("Неверная дата, попробуй ещё раз!");
    }
  };

  return (
    <div className="login-page">
      <h1>Добро пожаловать!</h1>
      <p>Введите секретную дату:</p>
      <input
        type="text"
        placeholder="ДД.ММ"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleLogin}>Войти</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default LoginPage;
