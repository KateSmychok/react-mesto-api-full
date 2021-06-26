import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const inputRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: inputRef.current.value
    });
  }

  React.useEffect(() => {
    inputRef.current.value = ''
  }, [props.isOpened])

  return (
  <PopupWithForm
    title="Обновить аватар"
    name="avatar"
    submitButtonText="Сохранить"
    isOpened={props.isOpened}
    onClose={props.onClose}
    onSubmit={handleSubmit}>
    <input
      ref={inputRef}
      id="avatarLink"
      autoComplete="off"
      type="url"
      name="avatarLink"
      className="popup__input popup__input_type_avatar-link"
      placeholder="Ссылка на картинку"
      required/>
    <span className="popup__error" id="avatarLink-error"> </span>
  </PopupWithForm>
  )
}

export default EditAvatarPopup;