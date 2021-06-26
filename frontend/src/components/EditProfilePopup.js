import React from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const user = React.useContext(CurrentUserContext);
  React.useEffect(() => {
    setName(user.name);
    setDescription(user.about);
  }, [user]);

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      submitButtonText="Сохранить"
      isOpened={props.isOpened}
      onClose={props.onClose}
      onSubmit={handleSubmit}>
      <input
        value={name || ''}
        onChange={handleNameChange}
        id="name"
        autoComplete="off"
        type="text"
        name="name"
        className="popup__input popup__input_type_name"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        required/>
      <span className="popup__error" id="name-error"> </span>
      <input
        value={description || ''}
        onChange={handleDescriptionChange}
        id="job"
        autoComplete="off"
        type="text"
        name="job"
        className="popup__input popup__input_type_job"
        placeholder="Вид деятельности"
        minLength="2"
        maxLength="200"
        required/>
      <span className="popup__error" id="job-error"> </span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;