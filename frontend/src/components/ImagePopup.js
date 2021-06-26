import React from "react";

function ImagePopup(props) {
  return (
    <div className={`popup popup_type_fullImage ${props.isOpened ? 'popup_opened' : ''}`}>
      <div className="popup__content popup__content_type_fullImage">
        <img className="popup__image" src={props.card.link} alt={props.card.name} />
        <h3 className="popup__caption">{props.card.name}</h3>
        <button type="button" className="button button_type_close button_type_close-fullImage" onClick={props.onClose}></button>
      </div>
    </div>
  )
}

export default ImagePopup;