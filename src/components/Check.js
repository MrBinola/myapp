import React, { useState } from "react";
import "../css/main.css";

function Check() {
        const [login, setLogin] = useState("");
        const [code, setCode] = useState("");
        const [message, setMessage] = useState("");
        const [messageClass, setMessageClass] = useState("");

    const handleCheck = () => {
        if (login === "Vitalii Shulha" && code === "MrBinola_777") {
        setMessage("Вы авторизованы ✅");
        setMessageClass("authorized");
    } else {
      setMessage("Вы не авторизованы 😾");
      setMessageClass("unauthorized");
    }
  };

  return (
        <div className="check-container">
            <h2>Авторизация</h2>
        <input
            className="check-input"
            placeholder="Имя"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
/>
      <input
            className="check-input"
            placeholder="Код"
             type="password"
            value={code}
            onChange={(e) => setCode(e.target.value)}
      />
      <button className="check-button" onClick={handleCheck}>
        Проверить
      </button>
      {message && (
        <div className={`check-message ${messageClass}`}>{message}</div>
      )}
    </div>
  );
}

export default Check;