import React from "react";
import doneIcon from "../images/infoTooltip__done-icon.svg";
import errorIcon from "../images/infoTooltip__error-icon.svg";

function InfoTooltip({ tooltipIcon, title, isOpen, onClose, onOverlayClose }) {

  return (
    <div className={`popup popup_content_tooltip ${isOpen ? "popup_opened" : ""}`} onClick={onOverlayClose}>
      <div className="popup__container-tooltip">
        <div className="popup__icon-tooltip">
          {tooltipIcon === "success" && (
            <img src={doneIcon} alt="Изображение Выполнено" />
          )}
          {tooltipIcon === "error" && <img src={errorIcon} alt="Изображение Ошибка" />}
        </div>
        <h2 className="popup__title-tooltip">{title}</h2>
        <button type="button" className="button popup__close-button" onClick={onClose} />
      </div>
    </div>
  )
}

export default InfoTooltip;