import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpened ? 'popup_opened' : ''}`}>
      <div className={`popup__content popup__content_type_${props.name}`}>
        <h3 className="popup__title">{props.title}</h3>
        <form name={props.name} className={`popup__form popup__form_type_${props.name}`} onSubmit={props.onSubmit}>
          {props.children}
          <button type="submit" className="button button_type_submit">{props.submitButtonText}</button>
        </form>
        <button type="button" className="button button_type_close" onClick={props.onClose}></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
