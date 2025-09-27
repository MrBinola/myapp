import React, { useState } from "react";
import "../css/main.css";
import welcomeImage from '../img/logo2.jpeg';

function Check() {
        const [login, setLogin] = useState("");
        const [code, setCode] = useState("");
        const [message, setMessage] = useState("");
        const [messageClass, setMessageClass] = useState("");
        const [loading, setLoading] = useState(false);

    const handleCheck = () => {
        setLoading(true)

      setTimeout(() => {
          if (login === "Vitalii Shulha" && code === "MrBinola_777") {
          setMessage("Вы авторизованы ✅");
          setMessageClass("authorized");
        } else {
          setMessage("Вы не авторизованы 😾");
          setMessageClass("unauthorized");
      }
          setLoading(false)
    }, 2000);
};

  return (
        <div className="check-container" onKeyDown={(e) => e.key === 'Enter' && handleCheck()}>
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
      {messageClass === 'authorized' && (
        <div className="welcome-block">
        <p className="welcome-text">Рады видеть тебя дома, Саймон Райли 🙂</p>
        <img src={welcomeImage} alt="Добро пожаловать" className="welcome-image" />
    </div>
)}
      {loading && <div className="loader"></div>}
    {message && !loading && (
    <div />
    )}
      {message && (
        <div className={`check-message ${messageClass}`}>{message}</div>
      )}
    </div>
  );
}

export default Check;