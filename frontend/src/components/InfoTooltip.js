import React from "react";

function InfoToolTip(props) {
  function successOrFail() {
    let text;
    if(props.isSuccess) {
      text = 'Вы успешно зарегистрировались!'
    } else {
      text = 'Что-то пошло не так! Попробуйте ещё раз.'
    }
    return text;
  }

  return (
    <div className={`popup popup_type_${props.name} ${props.isOpened ? 'popup_opened' : ''}`}>
      <div className={`popup__content popup__content_type_${props.name}`}>
        <div className={`popup__reg-image ${props.isSuccess ? 'popup__reg-image-success' : 'popup__reg-image-error'}`}></div>
        <h3 className="popup__reg-caption">{successOrFail()}</h3>
        <button type="button" className="button button_type_close" onClick={props.onClose}></button>
      </div>
    </div>
  )
}

export default InfoToolTip;