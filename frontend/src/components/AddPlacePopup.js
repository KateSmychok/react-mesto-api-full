import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name,
      link,
    });
  }

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [props.isOpened]);

  return (
    <PopupWithForm
    title="Новое место"
    name="addCard"
    submitButtonText="Создать"
    isOpened={props.isOpened}
    onClose={props.onClose}
    onSubmit={handleSubmit}>
    <input
      value={name || ''}
      onChange={handleNameChange}
      id="title"
      autoComplete="off"
      type="text"
      name="title"
      className="popup__input popup__input_type_card-title"
      placeholder="Название"
      minLength="2"
      maxLength="30"
      required/>
    <span className="popup__error" id="title-error"> </span>
    <input
      value={link || ''}
      onChange={handleLinkChange}
      id="link"
      autoComplete="off"
      type="url"
      name="link"
      className="popup__input popup__input_type_card-link"
      placeholder="Ссылка на картинку"
      required/>
    <span className="popup__error" id="link-error"> </span>
  </PopupWithForm>
  );
}

export default AddPlacePopup;
