import React from "react";
import "../css/main.css";

function Modal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>It's Me 😎</h2>
        <p>Привет! Я MrBinola, Я Ютубер.</p>
        <button className="close-btn" onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
}

export default Modal;