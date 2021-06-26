import React from "react";
import Card from "./Card";
import CurrentUserContext from '../contexts/CurrentUserContext';

function Main(props) {
  const user = React.useContext(CurrentUserContext);
  const initialCards = props.cards.map((card) => {
      return <Card cardData={card} key={card._id} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete}/>
  })

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__userPhoto">
          <button type="button" className="button button_type_updateAvatar"></button>
          <img className="profile__avatar" src={user.avatar} alt="Аватар" onClick={props.onEditAvatar}/>
        </div>
        <div className="profile__info">
          <div className="profile__first-row">
            <h1 className="profile__name">{user.name}</h1>
            <button type="button" className="button button_type_edit" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__job">{user.about}</p>
        </div>
        <button type="button" className="button button_type_add" onClick={props.onAddPlace}></button>
      </section>
      <section>
        <ul className="places">{initialCards}</ul>
      </section>
    </main>
  )
}

export default Main;