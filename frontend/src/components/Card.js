import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card(props) {
  const user = React.useContext(CurrentUserContext);
  const isOwn = props.cardData.owner._id === user._id;
  const cardDeleteButtonClassName = (
    `button ${isOwn ? 'button_type_delete' : 'button_type_delete_hidden'}`
  );
  const isLiked = props.cardData.likes.some(i => i._id === user._id);
  const cardLikeButtonClassName = (
    `button ${isLiked ? 'button_type_like_active' : 'button_type_like'}`
  );

  function handleClick() {
    props.onCardClick(props.cardData);
  }

  function handleLikeClick() {
    props.onCardLike(props.cardData);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.cardData);
  }

  return (
    <li className="place">
    <img className="place__image" src={props.cardData.link} alt={props.cardData.name} onClick={handleClick}/>
    <div className="place__caption">
      <h2 className="place__title">{props.cardData.name}</h2>
      <div className="place__likes">
        <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
        <p className="place__likesCounter">{props.cardData.likes.length}</p>
      </div>
    </div>
    <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick}></button>
  </li>
  )}

export default Card;
