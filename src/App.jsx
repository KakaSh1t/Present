import React, { useState } from "react";
import LoginPage from "./components/LoginPage";
import CardGrid from "./components/CardGrid";
import CardModal from "./components/CardModal";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [openCard, setOpenCard] = useState(null);

  return (
    <div className="app">
      {!loggedIn ? (
        <LoginPage onLogin={() => setLoggedIn(true)} />
      ) : (
        <>
          <CardGrid setOpenCard={setOpenCard} />
          {openCard && (
            <CardModal card={openCard} onClose={() => setOpenCard(null)} />
          )}
        </>
      )}
    </div>
  );
};

export default App;
